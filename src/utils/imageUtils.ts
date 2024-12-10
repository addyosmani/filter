export const createDownloadLink = (imageUrl: string, filename: string): void => {
  const link = document.createElement('a');
  link.href = imageUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const validateImageFile = (file: File): void => {
  if (!file.type.startsWith('image/')) {
    throw new Error('Please select a valid image file');
  }

  // 10MB size limit
  const maxSize = 10 * 1024 * 1024;
  if (file.size > maxSize) {
    throw new Error('Image size must be less than 10MB');
  }

  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
  if (!allowedTypes.includes(file.type)) {
    throw new Error('Please select a JPEG, PNG, GIF, or WebP image');
  }
};