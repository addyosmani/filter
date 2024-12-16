export interface CropPreset {
  titleKey: string;
  descriptionKey: string;
  ratio: number;
}

export interface EditorConfig {
  source: string;
  defaultSavedImageType: string;
  defaultSavedImageName: string;
  theme: {
    palette: {
      'txt-primary': string;
      'txt-primary-invert': string;
      'txt-secondary': string;
      'txt-secondary-invert': string;
      'txt-placeholder': string;
      'accent-primary': string;
      'accent-primary-hover': string;
      'accent-primary-active': string;
      'accent-primary-disabled': string;
      'bg-primary': string;
      'bg-primary-hover': string;
      'bg-primary-active': string;
      'bg-primary-0-5-opacity': string;
      'bg-secondary': string;
      'icons-primary': string;
      'icons-primary-opacity-0-6': string;
      'icons-secondary': string;
      'icons-placeholder': string;
      'btn-primary-text': string;
      'btn-disabled-text': string;
      'link-primary': string;
      'link-hover': string;
      'link-active': string;
      'borders-primary': string;
      'borders-secondary': string;
      'borders-strong': string;
      'borders-invert': string;
      'border-active-bottom': string;
      'active-secondary': string;
      'active-secondary-hover': string;
      'active-secondary-active': string;
    };
    typography: {
      fontFamily: string;
    };
  };
  annotationsCommon: {
    fill: string;
  };
  Text: {
    text: string;
    fonts: Array<{
      label: string;
      value: string;
    }>;
  };
  translations: {
    [key: string]: string;
  };
  Crop: {
    presetsItems: CropPreset[];
    autoResize: boolean;
  };
  defaultTabId: string;
  defaultToolId: string;
  observePluginContainerSize: boolean;
  showCanvasOnly: boolean;
}
