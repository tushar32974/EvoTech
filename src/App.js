import {BrowserRouter, Navigate,Routes,Route} from 'react-router-dom';
import HomePage from 'scenes/homePage';
import SurveyForm from "scenes/surveyForm";
import LoginPage from 'scenes/loginPage';

import { useMemo } from 'react';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import { CssBaseline,ThemeProvider } from '@mui/material';
import {createTheme} from "@mui/material/styles";
import { themeSettings } from './theme';

function App() {
  const mode=useSelector((state)=> state.mode);
  const theme=useMemo(()=>createTheme(themeSettings(mode)),[mode]);
  const isAuth=Boolean(useSelector((state)=>state.token));

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<SurveyForm />} />
            <Route path="/adminLogin" element={<LoginPage/>} />
            <Route
              path="/home"
              element={isAuth ? <HomePage /> : <Navigate to="/" />}
            />
  
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
