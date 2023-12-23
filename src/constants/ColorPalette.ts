export interface ColorPaletteInterface {
  primaryBackgroundColor: string;
  secondaryBackgroundColor: string;
  textColor: string;
  primaryColor: string;
  secondaryColor: string;
  successColor: string;
  infoColor: string;
  warningColor: string;
  dangerColor: string;
  headerBackgroundColor: string;
}

const ColorPalette = {
  LightMode: {
    primaryBackgroundColor: '#C6CBD1',
    secondaryBackgroundColor: '#B8AAC3',
    textColor: '#41384E',
    primaryColor: '#A6A2A1',
    secondaryColor: '#725A7A',
    successColor: '#398439',
    infoColor: '#00ADD6',
    warningColor: '#FFC107',
    dangerColor: '#DC3545',
    headerBackgroundColor: '#FFFFFF',
  },
  DarkMode: {
    primaryBackgroundColor: '#1E1E1E',
    secondaryBackgroundColor: '#2B2533',
    textColor: '#FFFFFF',
    primaryColor: '#787575',
    secondaryColor: '#725A7A',
    successColor: '#4CAF50',
    infoColor: '#00ADD6',
    warningColor: '#FFC107',
    dangerColor: '#DC3545',
    headerBackgroundColor: '#000000',
  },
};

export default ColorPalette;
