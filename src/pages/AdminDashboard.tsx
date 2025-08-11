// src/pages/AdminDashboard.tsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { supabase } from '../lib/supabaseClient';
import ProductFormModal from '../components/ProductFormModal';
import ConfirmationModal from '../components/ConfirmationModal';
import type { DbProduct } from '../types';

// A single sortable row component
function SortableProductRow({ product, onEdit, onDelete }: { product: DbProduct, onEdit: (p: DbProduct) => void, onDelete: (id: number, img: string|null) => void }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: product.id });
  
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <tr ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <td className="px-6 py-4 whitespace-nowrap">
        <img 
          src={product.image_url || 'https://via.placeholder.com/60'} 
          alt={product.slug} 
          className="w-16 h-16 object-cover rounded-md"
        />
      </td>
      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
        {product.name.en || product.slug}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-gray-500">
        {product.category.en || 'N/A'}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-gray-500">
        {product.display_order}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <button onClick={() => onEdit(product)} className="text-indigo-600 hover:text-indigo-900 mr-4">Edit</button>
        <button onClick={() => onDelete(product.id, product.image_url)} className="text-red-600 hover:text-red-900">Delete</button>
      </td>
    </tr>
  );
}

// The main dashboard component
export default function AdminDashboard() {
  const [products, setProducts] = useState<DbProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<DbProduct | null>(null);
  const [deleteConfirmation, setDeleteConfirmation] = useState<{
    isOpen: boolean;
    productId: number | null;
    imageUrl: string | null;
  }>({ isOpen: false, productId: null, imageUrl: null });
  const navigate = useNavigate();
  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 5 } }));

  useEffect(() => { 
    fetchProducts(); 
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('display_order', { ascending: true });

    if (error) {
      console.error('Error fetching products:', error);
      alert('Failed to fetch products.');
    } else {
      setProducts(data || []);
    }
    setLoading(false);
  };

  const handleDragEnd = async (event: any) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = products.findIndex((p) => p.id === active.id);
      const newIndex = products.findIndex((p) => p.id === over.id);
      const newOrder = arrayMove(products, oldIndex, newIndex);
      
      setProducts(newOrder); // Optimistically update UI

      // Update the display_order for all products in the new order
      const updates = newOrder.map((p, index) => ({
        id: p.id,
        display_order: index,
      }));

      const { error } = await supabase.from('products').upsert(updates);
      if (error) {
        alert("Failed to save new order. Please refresh.");
        fetchProducts(); // Revert on failure
      }
    }
  };
  
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error logging out:', error);
    } else {
      navigate('/admin/login');
    }
  };

  const handleOpenAddModal = () => {
    setEditingProduct(null);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (product: DbProduct) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  };

  const handleOpenDeleteModal = (productId: number, imageUrl: string | null) => {
    setDeleteConfirmation({
      isOpen: true,
      productId,
      imageUrl,
    });
  };

  const handleConfirmDelete = async () => {
    if (!deleteConfirmation.productId) return;
    
    // First, delete the database record
    const { error: dbError } = await supabase
      .from('products')
      .delete()
      .eq('id', deleteConfirmation.productId);

    if (dbError) {
      alert(`Failed to delete product: ${dbError.message}`);
      setDeleteConfirmation({ isOpen: false, productId: null, imageUrl: null }); // Close modal on error
      return;
    }
    
    // If DB deletion is successful, delete the associated image from storage
    if (deleteConfirmation.imageUrl) {
        const fileName = deleteConfirmation.imageUrl.split('/').pop();
        if (fileName) {
            const { error: storageError } = await supabase.storage.from('product-images').remove([fileName]);
            if (storageError) {
                // Non-critical error, the DB record is gone. Log it.
                console.error("Failed to delete image from storage, but product was deleted from DB:", storageError.message);
            }
        }
    }
    
    setDeleteConfirmation({ isOpen: false, productId: null, imageUrl: null }); // Close modal
    fetchProducts();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
          <div>
            <button
              onClick={handleOpenAddModal}
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 mr-4"
            >
              + Add Product
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </header>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Name (EN)</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category (EN)</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <SortableContext items={products} strategy={verticalListSortingStrategy}>
                  {loading ? (
                    <tr><td colSpan={5} className="text-center py-4">Loading...</td></tr>
                  ) : (
                    products.map(product => (
                      <SortableProductRow 
                        key={product.id} 
                        product={product} 
                        onEdit={handleOpenEditModal} 
                        onDelete={handleOpenDeleteModal} 
                      />
                    ))
                  )}
                </SortableContext>
                 {products.length === 0 && !loading && (
                   <tr><td colSpan={5} className="text-center py-4">No products found. Click "Add Product" to get started.</td></tr>
                 )}
              </tbody>
            </table>
          </DndContext>
        </div>
      </div>
      
      <ProductFormModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={fetchProducts}
        product={editingProduct}
      />

      <ConfirmationModal
        isOpen={deleteConfirmation.isOpen}
        onClose={() => setDeleteConfirmation({ isOpen: false, productId: null, imageUrl: null })}
        onConfirm={handleConfirmDelete}
        title="Delete Product"
        message="Are you sure you want to delete this product? This action cannot be undone."
      />
    </div>
  );
}