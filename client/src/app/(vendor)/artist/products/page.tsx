'use client'
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';

import { Plus, Image as ImageIcon, X } from 'lucide-react';
import { toast } from 'sonner';

interface ProductFormData {
  name: string;
  description: string;
  price: number;
  artist: string;
  category: string;
  medium: string;
  dimensions: string;
  mainImage: string;
  images: string[];
  stock: number;
  isAvailable: boolean;
}

const AddProduct = () => {
  const [formData, setFormData] = useState<ProductFormData>({
    name: '',
    description: '',
    price: 0,
    artist: '',
    category: '',
    medium: '',
    dimensions: '',
    mainImage: '',
    images: [],
    stock: 1,
    isAvailable: true
  });

  const [currentImage, setCurrentImage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    'painting',
    'sculpture',
    'drawing',
    'photography',
    'print',
    'other'
  ];

  const handleInputChange = (field: keyof ProductFormData, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const addImage = () => {
    if (currentImage.trim()) {
      setFormData(prev => ({
        ...prev,
        images: [...prev.images, currentImage.trim()]
      }));
      setCurrentImage('');
    }
  };

  const removeImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
  if (!formData.name.trim() || !formData.description.trim() || !formData.mainImage.trim()) {
    toast.error("Please fill in all required fields.", { // Changed
      description: "Missing Information", // Changed
    });
    setIsSubmitting(false);
    return;
  }

  if (formData.price <= 0) {
    toast.error("Price must be greater than 0.", { // Changed
      description: "Invalid Price", // Changed
    });
    setIsSubmitting(false);
    return;
  }

  try {
    // Here you would typically send the data to your backend
    console.log('Product data:', formData);

    toast.success(`${formData.name} has been added to your collection.`, { // Changed
      description: "Product Added Successfully!", // Changed
    });

      // Reset form
      setFormData({
        name: '',
        description: '',
        price: 0,
        artist: '',
        category: '',
        medium: '',
        dimensions: '',
        mainImage: '',
        images: [],
        stock: 1,
        isAvailable: true
      });

    }  catch (error) {
    toast.error("Failed to add product. Please try again.", { // Changed
      description: "Error", // Changed
    });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-coral to-burnt-orange p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Add New Artwork</h1>
          <p className="text-white/90 text-lg">Share your beautiful creation with the world</p>
        </div>

        <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
          <CardHeader className="bg-gradient-to-r from-coral/10 to-burnt-orange/10 border-b">
            <CardTitle className="text-2xl text-gray-800 flex items-center gap-2">
              <ImageIcon className="h-6 w-6 text-coral" />
              Product Details
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Basic Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-700 font-medium">
                    Artwork Name *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Enter artwork name"
                    className="border-2 border-coral/20 focus:border-coral transition-colors"
                    maxLength={100}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="price" className="text-gray-700 font-medium">
                    Price ($) *
                  </Label>
                  <Input
                    id="price"
                    type="number"
                    value={formData.price || ''}
                    onChange={(e) => handleInputChange('price', parseFloat(e.target.value) || 0)}
                    placeholder="0.00"
                    className="border-2 border-coral/20 focus:border-coral transition-colors"
                    min="0"
                    step="0.01"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description" className="text-gray-700 font-medium">
                  Description *
                </Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="Describe your artwork in detail..."
                  className="border-2 border-coral/20 focus:border-coral transition-colors min-h-[120px]"
                  rows={5}
                />
              </div>

              {/* Artist and Category */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="artist" className="text-gray-700 font-medium">
                    Artist ID *
                  </Label>
                  <Input
                    id="artist"
                    value={formData.artist}
                    onChange={(e) => handleInputChange('artist', e.target.value)}
                    placeholder="Enter artist ID"
                    className="border-2 border-coral/20 focus:border-coral transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category" className="text-gray-700 font-medium">
                    Category *
                  </Label>
                  <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                    <SelectTrigger className="border-2 border-coral/20 focus:border-coral transition-colors">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category} className="capitalize">
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Medium and Dimensions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="medium" className="text-gray-700 font-medium">
                    Medium *
                  </Label>
                  <Input
                    id="medium"
                    value={formData.medium}
                    onChange={(e) => handleInputChange('medium', e.target.value)}
                    placeholder="e.g., Oil on canvas, Bronze, Digital"
                    className="border-2 border-coral/20 focus:border-coral transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dimensions" className="text-gray-700 font-medium">
                    Dimensions
                  </Label>
                  <Input
                    id="dimensions"
                    value={formData.dimensions}
                    onChange={(e) => handleInputChange('dimensions', e.target.value)}
                    placeholder="e.g., 24x36 inches, 10x15x8 cm"
                    className="border-2 border-coral/20 focus:border-coral transition-colors"
                  />
                </div>
              </div>

              {/* Main Image */}
              <div className="space-y-2">
                <Label htmlFor="mainImage" className="text-gray-700 font-medium">
                  Main Image URL *
                </Label>
                <Input
                  id="mainImage"
                  value={formData.mainImage}
                  onChange={(e) => handleInputChange('mainImage', e.target.value)}
                  placeholder="Enter main image URL"
                  className="border-2 border-coral/20 focus:border-coral transition-colors"
                />
                {formData.mainImage && (
                  <div className="mt-2">
                    <img
                      src={formData.mainImage}
                      alt="Main preview"
                      className="w-32 h-32 object-cover rounded-lg border-2 border-coral/20"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Additional Images */}
              <div className="space-y-4">
                <Label className="text-gray-700 font-medium">Additional Images</Label>
                <div className="flex gap-2">
                  <Input
                    value={currentImage}
                    onChange={(e) => setCurrentImage(e.target.value)}
                    placeholder="Enter image URL"
                    className="border-2 border-coral/20 focus:border-coral transition-colors"
                  />
                  <Button
                    type="button"
                    onClick={addImage}
                    className="bg-coral hover:bg-coral/90 text-white px-4"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                
                {formData.images.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {formData.images.map((image, index) => (
                      <div key={index} className="relative">
                        <img
                          src={image}
                          alt={`Additional ${index + 1}`}
                          className="w-full h-24 object-cover rounded-lg border-2 border-coral/20"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                        <Button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1 h-6 w-6"
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Stock and Availability */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="stock" className="text-gray-700 font-medium">
                    Stock Quantity
                  </Label>
                  <Input
                    id="stock"
                    type="number"
                    value={formData.stock}
                    onChange={(e) => handleInputChange('stock', parseInt(e.target.value) || 0)}
                    className="border-2 border-coral/20 focus:border-coral transition-colors"
                    min="0"
                  />
                </div>

                <div className="flex items-center space-x-2 pt-8">
                  <Switch
                    id="isAvailable"
                    checked={formData.isAvailable}
                    onCheckedChange={(checked) => handleInputChange('isAvailable', checked)}
                  />
                  <Label htmlFor="isAvailable" className="text-gray-700 font-medium">
                    Available for Sale
                  </Label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-coral to-burnt-orange hover:from-coral/90 hover:to-burnt-orange/90 text-white font-semibold py-4 text-lg transition-all duration-200 transform hover:scale-[1.02]"
                >
                  {isSubmitting ? 'Adding Product...' : 'Add Artwork to Collection'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AddProduct;
