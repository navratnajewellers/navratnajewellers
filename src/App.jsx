import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import ViteDefaultPage from './pages/ViteDefaultPage';
import TestConnection from './pages/TestConnection';
// import 'rsuite/dist/rsuite.min.css';
import TestLogin from './pages/TestLogin';
import GoldCoinPage from './pages/coins/GoldCoinPage';
import SilverCoinsPage from './pages/coins/SilverCoinsPage';
import VerifyLogin from './pages/VerifyLogin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gold-coin/:gramQt" element={<GoldCoinPage />} />
        <Route path="/silver-coin/:gramQt" element={<SilverCoinsPage />} />
        <Route path="/vitepage" element={<ViteDefaultPage />} />
        <Route path="/test-connection" element={<TestConnection />} />
        <Route path="/test-connection/test-login" element={<TestLogin />} />
        <Route path="/test-connection/verify-login" element={<VerifyLogin />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
