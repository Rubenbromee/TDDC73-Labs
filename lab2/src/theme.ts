import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {ThemeProp} from 'react-native-paper/lib/typescript/types';

// Extending default theme
const theme: ThemeProp = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'blue',
    secondary: 'white',
    borderColor: '#b7dffd',
    primaryContainer: 'white',
  },
};

export default theme;
