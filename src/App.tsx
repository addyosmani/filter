import React, { useState } from 'react';
import { ImageUploader } from './components/ImageUploader';
import { ImageEditor } from './components/ImageEditor';
import { Button } from './components/Button';
import { X } from 'lucide-react';
import { createDownloadLink } from './utils/imageUtils';

function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [editedImage, setEditedImage] = useState<string | null>(null);

  const handleImageSelect = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        setSelectedImage(e.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSave = (editedImageUrl: string) => {
    setEditedImage(editedImageUrl);
    setSelectedImage(null);
  };

  const handleDownload = () => {
    if (editedImage) {
      createDownloadLink(editedImage, 'edited-image.png');
    }
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handleReset = () => {
    setEditedImage(null);
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {!selectedImage && !editedImage && (
        <div className="flex flex-col items-center justify-center p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Filter</h1>
          <div className="text-center max-w-2xl mb-12">
            <p className="text-xl text-gray-600 mb-6">
              A powerful, web-based image editor with an intuitive interface for quick edits and filters.
            </p>
            <ImageUploader onImageSelect={handleImageSelect} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
            <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
              <span className="text-lg font-semibold text-gray-800 mb-2">🖼️ Intuitive Editing</span>
              <p className="text-gray-600 text-center">Easy-to-use interface for basic and advanced modifications</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
              <span className="text-lg font-semibold text-gray-800 mb-2">📱 Mobile-Optimized</span>
              <p className="text-gray-600 text-center">Fully responsive design that works on all devices</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
              <span className="text-lg font-semibold text-gray-800 mb-2">🎨 Rich Tools</span>
              <p className="text-gray-600 text-center">Crop, rotate, adjust, filters, and more</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
              <span className="text-lg font-semibold text-gray-800 mb-2">⚡ Fast Processing</span>
              <p className="text-gray-600 text-center">Client-side image processing for quick edits</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
              <span className="text-lg font-semibold text-gray-800 mb-2">💾 Easy Export</span>
              <p className="text-gray-600 text-center">Download edited images in various formats</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
              <span className="text-lg font-semibold text-gray-800 mb-2">🎯 Preset Crops</span>
              <p className="text-gray-600 text-center">Common aspect ratios for social media and web</p>
            </div>
          </div>
        </div>
      )}

      {selectedImage && (
        <div className="fixed inset-0 z-50">
          <ImageEditor
            imageUrl={selectedImage}
            onClose={handleClose}
            onSave={handleSave}
          />
        </div>
      )}

      {editedImage && !selectedImage && (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
          <div className="relative w-full max-w-2xl">
            <img
              src={editedImage}
              alt="Edited"
              className="w-full rounded-lg shadow-xl"
            />
            <div className="absolute top-4 right-4">
              <Button variant="secondary" onClick={handleReset}>
                <X className="w-5 h-5" />
              </Button>
            </div>
          </div>
          <div className="mt-6">
            <Button onClick={handleDownload}>
              Download Image
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;