import React, { useRef } from 'react';
import { Upload } from 'lucide-react';
import { Button } from './Button';
import { LoadingSpinner } from './LoadingSpinner';
import { useImageProcessor } from '../hooks/useImageProcessor';
import { validateImageFile } from '../utils/imageUtils';

interface ImageUploaderProps {
  onImageSelect: (file: File) => void;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageSelect }) => {
  const { processImage, isProcessing } = useImageProcessor();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      validateImageFile(file);
      await processImage(file);
      onImageSelect(file);
    } catch (error) {
      console.error('Error processing image:', error);
      alert(error instanceof Error ? error.message : 'Failed to process image');
    } finally {
      // Reset the input so the same file can be selected again
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-6">Cam</h1>
        <p className="text-gray-400 mb-8">Upload an image to start editing</p>
        {isProcessing ? (
          <LoadingSpinner />
        ) : (
          <>
            <input
              ref={fileInputRef}
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />
            <Button onClick={handleButtonClick}>
              <Upload className="w-5 h-5 mr-2" />
              Select Image
            </Button>
          </>
        )}
      </div>
    </div>
  );
};