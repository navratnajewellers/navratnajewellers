import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
// import 'rsuite/dist/rsuite.min.css';
import GoldCoinPage from './pages/coins/GoldCoinPage';
import SilverCoinsPage from './pages/coins/SilverCoinsPage';
import Cart from './pages/Cart';
import GoldRate from './pages/GoldRate';
import { ProfileProvider } from './context/profile.context';
import { CartProvider } from './context/Cart.context';
import PaymentTest from './pages/PaymentTest';
import { ProductProvider } from './context/product.context';
import Product from './pages/coins/Product';
import ShopGrid from './pages/product/ShopGrid';
import UserDashboard from './pages/dashboard/UserDashboard';
import ForgotPassword from './pages/ForgotPassword';
import { MessageProvider } from './context/message.context';
import CategoryPageGrid from './pages/categoryPage/CategoryPageGrid';
import { ServerProvider } from './context/server.context';

function App() {
  return (
    <ServerProvider>
      <MessageProvider>
        <ProfileProvider>
          <ProductProvider>
            <CartProvider>
              <HashRouter>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/gold-coin/:gramQt" element={<GoldCoinPage />} />
                  <Route
                    path="/silver-coin/:gramQt"
                    element={<SilverCoinsPage />}
                  />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/gold-rate" element={<GoldRate />} />
                  <Route path="/shop/:productName" element={<Product />} />
                  <Route path="/shop" element={<ShopGrid />} />
                  <Route path="/dashboard" element={<UserDashboard />} />
                  <Route path="/forgotPassword" element={<ForgotPassword />} />
                  <Route
                    path="/product/:productCategory"
                    element={<CategoryPageGrid />}
                  />
                  <Route path="/testPayment" element={<PaymentTest />} />
                  <Route path="*" element={<PageNotFound />} />
                </Routes>
              </HashRouter>
            </CartProvider>
          </ProductProvider>
        </ProfileProvider>
      </MessageProvider>
    </ServerProvider>
  );
}

export default App;
