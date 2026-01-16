import './App.css';
import MainPage from './components/page/MainPage';
import { Route, Routes } from 'react-router-dom';
import MyResume from './components/my-resume/MyResume';

function App() {
  return (
    <>
      <Routes>
        <Route path="/resume" element={<MyResume />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
