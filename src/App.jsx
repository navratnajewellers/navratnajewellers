import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import ViteDefaultPage from './pages/ViteDefaultPage';
import TestConnection from './pages/TestConnection';
import 'rsuite/dist/rsuite.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/vitepage" element={<ViteDefaultPage />} />
        <Route path="/test-connection" element={<TestConnection />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
