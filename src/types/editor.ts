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
      'bg-primary': string;
      'bg-secondary': string;
      'accent-primary': string;
      'accent-secondary': string;
      'text-primary': string;
      'text-secondary': string;
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