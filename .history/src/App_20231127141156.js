import {useState} from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { THEMES_TYPES }  from 'utils/enums';
import './App.css';
import themes from './themes'



function App() {
  const [activeTheme, setActiveTheme] = useState(themes[THEMES_TYPES.LIGHT]);
  return (
  <ThemeProvider theme={}>
    <div>
      ..Testing
    </div>
  </ThemeProvider>
  );
}

export default App;
