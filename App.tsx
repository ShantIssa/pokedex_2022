import React from 'react';
import {ThemeProvider} from 'styled-components/native';

import {baseTheme} from 'src/theme';

import Navigation from './src/navigation';

const App = () => {
  return (
    <ThemeProvider theme={baseTheme}>
      <Navigation />
    </ThemeProvider>
  );
};

export default App;
