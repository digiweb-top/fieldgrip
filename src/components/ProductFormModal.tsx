// src/components/ProductFormModal.tsx
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import type { DbProduct } from '../types';

interface ProductFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
  product: DbProduct | null;
}

const LANGUAGES = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'Hindi' },
  { code: 'mr', name: 'Marathi' },
];

const initialFormData = {
  slug: '',
  name: { en: '', hi: '', mr: '' },
  category: { en: '', hi: '', mr: '' },
  description: { en: '', hi: '', mr: '' },
  benefits: { en: [] as string[], hi: [] as string[], mr: [] as string[] },
  image_url: null as string | null,
};

export default function ProductFormModal({ isOpen, onClose, onSave, product }: ProductFormModalProps) {
  const [formData, setFormData] = useState(initialFormData);
  const [activeLang, setActiveLang] = useState('en');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (product) {
      setFormData({
        slug: product.slug,
        name: { ...initialFormData.name, ...product.name },
        category: { ...initialFormData.category, ...product.category },
        description: { ...initialFormData.description, ...product.description },
        benefits: { ...initialFormData.benefits, ...product.benefits },
        image_url: product.image_url,
      });
    } else {
      setFormData(initialFormData);
    }
    // Reset other states when modal opens/product changes
    setImageFile(null);
    setError(null);
    setActiveLang('en');
  }, [product, isOpen]);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'name' || name === 'category' || name === 'description') {
      setFormData(prev => ({
        ...prev,
        [name]: { ...prev[name], [activeLang]: value },
      }));
    }
  };

  const handleBenefitChange = (index: number, value: string) => {
    const currentBenefits = formData.benefits[activeLang as keyof typeof formData.benefits] || [];
    const newBenefits = [...currentBenefits];
    newBenefits[index] = value;
    setFormData(prev => ({
      ...prev,
      benefits: { ...prev.benefits, [activeLang]: newBenefits },
    }));
  };

  const addBenefit = () => {
    const currentBenefits = formData.benefits[activeLang as keyof typeof formData.benefits] || [];
    const newBenefits = [...currentBenefits, ''];
    setFormData(prev => ({
      ...prev,
      benefits: { ...prev.benefits, [activeLang]: newBenefits },
    }));
  };

  const removeBenefit = (index: number) => {
    const currentBenefits = formData.benefits[activeLang as keyof typeof formData.benefits] || [];
    const newBenefits = currentBenefits.filter((_: string, i: number) => i !== index);
    setFormData(prev => ({
      ...prev,
      benefits: { ...prev.benefits, [activeLang]: newBenefits },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.en) {
        setError('The English name is required as a fallback.');
        return;
    }
    setLoading(true);
    setError(null);

    let finalImageUrl = product?.image_url || null;

    if (imageFile) {
      const fileName = `${Date.now()}-${imageFile.name}`;
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('product-images').upload(fileName, imageFile);

      if (uploadError) {
        setError(`Image upload failed: ${uploadError.message}`); 
        setLoading(false); 
        return;
      }
      
      const { data: { publicUrl } } = supabase.storage.from('product-images').getPublicUrl(uploadData.path);
      finalImageUrl = publicUrl;
    }
    
    const productData = {
      slug: formData.slug.toLowerCase().replace(/\s+/g, '-'),
      name: formData.name,
      category: formData.category,
      description: formData.description,
      benefits: formData.benefits,
      image_url: finalImageUrl,
    };
    
    const { error: dbError } = product
      ? await supabase.from('products').update(productData).eq('id', product.id)
      : await supabase.from('products').insert([productData]);

    if (dbError) {
      setError(`Database error: ${dbError.message}`);
    } else {
      onSave();
      onClose();
    }
    setLoading(false);
  };
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">{product ? 'Edit Product' : 'Add New Product'}</h2>
        
        {/* SLUG INPUT - non-translatable */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Product Slug (unique, e.g., "vermigro")</label>
          <input 
            value={formData.slug} 
            onChange={e => setFormData(p => ({...p, slug: e.target.value}))} 
            required 
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" 
          />
        </div>

        {/* LANGUAGE TABS */}
        <div className="border-b border-gray-200 mt-6 mb-4">
            <nav className="-mb-px flex space-x-6">
                {LANGUAGES.map(lang => (
                    <button
                        key={lang.code}
                        onClick={() => setActiveLang(lang.code)}
                        className={`whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm ${activeLang === lang.code ? 'border-green-500 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                    >
                        {lang.name}
                    </button>
                ))}
            </nav>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Translatable Fields */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Product Name</label>
            <input name="name" value={formData.name[activeLang as keyof typeof formData.name] || ''} onChange={handleTextChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <input name="category" value={formData.category[activeLang as keyof typeof formData.category] || ''} onChange={handleTextChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea name="description" value={formData.description[activeLang as keyof typeof formData.description] || ''} onChange={handleTextChange} rows={3} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" />
          </div>
          
          {/* Dynamic Benefits List */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Key Benefits</label>
            <div className="space-y-2 mt-1">
              {(formData.benefits[activeLang as keyof typeof formData.benefits] || []).map((benefit: string, index: number) => (
                <div key={index} className="flex items-center space-x-2">
                  <input value={benefit} onChange={e => handleBenefitChange(index, e.target.value)} className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" />
                  <button type="button" onClick={() => removeBenefit(index)} className="text-red-500 hover:text-red-700 p-1 rounded-full">&times;</button>
                </div>
              ))}
              <button type="button" onClick={addBenefit} className="text-sm text-green-600 hover:text-green-800">+ Add Benefit</button>
            </div>
          </div>

          {/* Image Upload - non-translatable */}
          <div className="pt-4">
            <label className="block text-sm font-medium text-gray-700">Product Image</label>
            <input type="file" accept="image/*" onChange={e => setImageFile(e.target.files?.[0] || null)} className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"/>
            {formData.image_url && !imageFile && <img src={formData.image_url} alt="Current" className="mt-2 h-24 rounded-md object-cover" />}
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          
          <div className="flex justify-end space-x-4 pt-4">
            <button type="button" onClick={onClose} className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">Cancel</button>
            <button type="submit" disabled={loading} className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 disabled:bg-gray-400">{loading ? 'Saving...' : 'Save Product'}</button>
          </div>
        </form>
      </div>
    </div>
  );
}
