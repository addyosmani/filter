import React from 'react';
import FilerobotImageEditor, { TABS, TOOLS } from 'react-filerobot-image-editor';
import { createEditorConfig } from '../config/editorConfig';

interface ImageEditorProps {
  imageUrl: string;
  onClose: () => void;
  onSave: (editedImageUrl: string) => void;
}

export const ImageEditor: React.FC<ImageEditorProps> = ({
  imageUrl,
  onClose,
  onSave,
}) => {
  const config = createEditorConfig(imageUrl);

  return (
    <div className="h-screen w-full">
      <FilerobotImageEditor
        {...config}
        onSave={(editedImageObject) => {
          onSave(editedImageObject.imageBase64);
        }}
        onClose={onClose}
        defaultTabId={TABS.ADJUST}
        defaultToolId={TOOLS.CROP}
        savingPixelRatio={2}
        previewPixelRatio={2}
      />
    </div>
  );
};