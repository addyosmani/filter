import { CropPreset, EditorConfig } from '../types/editor';
import { TABS } from 'react-filerobot-image-editor';

const cropPresets: CropPreset[] = [
  {
    titleKey: 'classicTv',
    descriptionKey: '4:3',
    ratio: 4 / 3,
  },
  {
    titleKey: 'wide',
    descriptionKey: '16:9',
    ratio: 16 / 9,
  },
  {
    titleKey: 'square',
    descriptionKey: '1:1',
    ratio: 1,
  },
  {
    titleKey: 'portrait',
    descriptionKey: '3:4',
    ratio: 3 / 4,
  },
];

export const createEditorConfig = (imageUrl: string): EditorConfig => ({
  source: imageUrl,
  defaultSavedImageType: 'png',
  defaultSavedImageName: 'edited-image',
  theme: {
    palette: {
      'bg-primary': '#111827',
      'bg-secondary': '#1f2937',
      'accent-primary': '#3b82f6',
      'accent-secondary': '#60a5fa',
      'text-primary': '#f3f4f6',
      'text-secondary': '#e5e7eb',
    },
    typography: {
      fontFamily: 'Inter, system-ui, sans-serif',
    },
  },
  annotationsCommon: {
    fill: '#3b82f6',
  },
  Text: { 
    text: 'Add text...',
    fonts: [
      { label: 'Arial', value: 'Arial' },
      { label: 'Helvetica', value: 'Helvetica' },
      { label: 'Inter', value: 'Inter' },
    ],
  },
  translations: {
    profile: 'Profile',
    coverPhoto: 'Cover Photo',
    facebook: 'Facebook',
    socialMedia: 'Social Media',
    classicTv: 'Classic TV',
    wide: 'Widescreen',
    square: 'Square',
    portrait: 'Portrait',
  },
  Crop: {
    presetsItems: cropPresets,
    autoResize: true,
  },
  defaultTabId: TABS.ADJUST,
  defaultToolId: 'Crop',
  observePluginContainerSize: true,
  showCanvasOnly: false,
  useZoomPresetsMenu: true,
  getCurrentImgDataFnRef: () => null,
});