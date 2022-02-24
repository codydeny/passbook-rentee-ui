import React from "react";
import {
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { CssBaseline, LinearProgress, useMediaQuery } from "@mui/material";
import Layout from "./components/Layout";
import StoreProvider, { StoreContext } from "./store/store";
import Login from "./components/onboarding/Login";
import Home from "./views/Home";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./App.css";
import { useTheme } from '@mui/material/styles';
import RenteeProfile from "./components/RenteeProfile";
import InProgressRenteesDetail from "./components/InProgressRenteesDetail";
import ConsentPage from "./views/ConsentPage";
import AgreementPage from "./views/AgreementPage";

function App() {
  const location = useLocation();
  const themeHook = useTheme();
  const [themeMode, sethemeMode] = React.useState(useMediaQuery('(prefers-color-scheme: dark)') ? 'light': 'light')
  const isScreenMd = useMediaQuery(themeHook.breakpoints.up('md'));

  React.useEffect(()=> { 
    localStorage.getItem('theme')
    if(themeMode === 'dark') {
      sethemeMode('light')
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
    else {
      sethemeMode('dark')
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
  }, [])

  const toggleTheme = ()=> {
    if(themeMode === 'dark') {
      sethemeMode('light')
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
    else {
      sethemeMode('dark')
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
  }

  const theme = React.useMemo(
    () =>
      createTheme({
        shadows: ["none"],
        props: {
          // Name of the component ⚛️
          MuiButtonBase: {
            // The default props to change
            disableRipple: true, // No more ripple, on the whole application 💣!
          },
        },
        palette: {
          type: themeMode,
          mode: themeMode,

          primary: {
            main : "#2563EB",
            dark : "#111827"
          },

          // Used by `getContrastText()` to maximize the contrast between
          // the background and the text.
          contrastThreshold: 3,
          // Used by the functions below to shift a color's luminance by approximately
          // two indexes within its tonal palette.
          // E.g., shift from Red 500 to Red 300 or Red 700.
          tonalOffset: 0.2,
          action : {
            hoverOpacity: 0.04,
            selectedOpacity: 0.08,
            disabledOpacity: 0.38,
            focusOpacity: 0.12,
            activatedOpacity: 0.12
          }
        },

      }),
    [themeMode],
  );

  return (
    <StoreProvider>
      <ThemeProvider theme={theme}>
      <StoreContext.Consumer>                 
            {(context) => <p className="absolute mt-14 w-screen md:mt-16">
            {context.state.loading && <LinearProgress  color="primary"/>}
              </p>}
         </StoreContext.Consumer>
        <CssBaseline/>
        <Layout changeTheme={toggleTheme} theme={themeMode}>
          <Routes>
              {/* <Route path="rentee/:id/*" element={<RenteeProfile/>} /> */}
              <Route path="anumati/*" element={<ConsentPage/>} />
              <Route path="agreement/:id" element={<AgreementPage/>} />
              <Route path="incoming/:id/*" element={<InProgressRenteesDetail/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/onboarding" element={<p>Onboarding</p>} />
              <Route path="/onboarding" element={<p>Onboarding</p>} />
              <Route path="/" element={<RenteeProfile/>} />
          </Routes>
        </Layout>
      </ThemeProvider>
  </StoreProvider>
  );
}

export default App;
