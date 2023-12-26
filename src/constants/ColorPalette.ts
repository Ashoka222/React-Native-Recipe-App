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
  activeTintColor: string;
  inactiveTintColor: string;
  background: string;
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
    activeTintColor: '#398439', // Success color
    inactiveTintColor: '#A6A2A1', // Primary color
    background: '#FFFFFF', // Header background color
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
    activeTintColor: '#4CAF50', // Success color
    inactiveTintColor: '#787575', // Primary color
    background: '#000000', // Header background color
  },
};

export default ColorPalette;
