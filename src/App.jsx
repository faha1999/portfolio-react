import { ThemeProvider } from 'styled-components';
import { lightTheme, DarkTheme } from './components/Themes';
import { Route, Routes } from 'react-router-dom';
import { About } from './components/About';
import { Main } from './components/Main';
import { Blog } from './components/Blog';
import { Work } from './components/Work';
import { Skill } from './components/Skill';

function App() {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/work" element={<Work />} />
          <Route path="/skill" element={<Skill />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
