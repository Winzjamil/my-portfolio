import './App.css';
// import Introduction from './components/Introduction';
// import About from './components/About';
// import Skills from './components/Skills';
// import Projects from './components/Projects';
// import Contacts from './components/Contacts';
import { Route, Routes } from 'react-router-dom';
// import MainLayout from './components/layout/MainLayout';
import MyResume from './components/my-resume/MyResume';
import MainPage from './components/page/MainPage';
import Carousel from './components/Carousel';
function App() {
  return (
    <>
      {/* <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Introduction />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes> */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/resume" element={<MyResume />} />
        <Route path="/carousel" element={<Carousel />} />
      </Routes>
    </>
  );
}

export default App;
