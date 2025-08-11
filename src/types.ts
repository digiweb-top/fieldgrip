// src/types.ts

// Frontend Product interface (for display)
export interface Product {
  name: string;
  category: string;
  description: string;
  benefits: string[];
  image: string;
}

// Database Product interface (for admin operations)
export interface DbProduct {
  id: number;
  slug: string;
  name: Record<string, string>;
  category: Record<string, string>;
  description: Record<string, string>;
  benefits: Record<string, string[]>;
  display_order: number;
  image_url: string | null;
}