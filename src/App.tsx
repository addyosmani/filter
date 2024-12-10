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
    <div className="min-h-screen bg-gray-900">
      {!selectedImage && !editedImage && (
        <ImageUploader onImageSelect={handleImageSelect} />
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