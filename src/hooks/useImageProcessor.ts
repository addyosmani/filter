import { useState, useCallback } from 'react';

interface ImageProcessorResult {
  processImage: (file: File) => Promise<void>;
  isProcessing: boolean;
}

export const useImageProcessor = (): ImageProcessorResult => {
  const [isProcessing, setIsProcessing] = useState(false);

  const processImage = useCallback(async (file: File): Promise<void> => {
    setIsProcessing(true);
    try {
      // Create an image object to ensure the file is valid
      const image = new Image();
      const imageUrl = URL.createObjectURL(file);
      
      await new Promise((resolve, reject) => {
        image.onload = resolve;
        image.onerror = () => reject(new Error('Failed to load image'));
        image.src = imageUrl;
      });

      // Cleanup
      URL.revokeObjectURL(imageUrl);
    } finally {
      setIsProcessing(false);
    }
  }, []);

  return {
    processImage,
    isProcessing
  };
};