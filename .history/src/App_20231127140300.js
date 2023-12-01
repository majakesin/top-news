import {useState} from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { THEMES }  from 'uti'
import './App.css';



function App() {
  const [activeTheme, setActiveTheme] = useState(THEMES.LIGHT)
  return (
  <ThemeProvider theme={activeTheme}>
    <div>
      ..Testing
    </div>
  </ThemeProvider>
  );
}

export default App;
