import {useState} from 'react';
import { ThemeProvider } from '@mui/material/styles';
import {THEMES}  from 'utils/enums';
import './App.css';



function App() {
  const [activeTheme, setActiveTheme] = useState(THEMES.LIGHT)
  return (
  <ThemeProvider>
    <div>
      ..Testing
    </div>
  </ThemeProvider>
  );
}

export default App;
