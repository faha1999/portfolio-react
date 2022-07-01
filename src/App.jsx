import { ThemeProvider } from 'styled-components';
import { lightTheme } from './components/Themes';
import { Route, Routes, useLocation } from 'react-router';
import { About } from './components/About';
import { Main } from './components/Main';
import { Blog } from './components/Blog';
import { Work } from './components/Work';
import { Skill } from './components/Skill';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/work" element={<Work />} />
            <Route path="/skill" element={<Skill />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
