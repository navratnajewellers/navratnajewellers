import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
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
import ReturnPolicy from './pages/pcPages/ReturnPolicy';
import PrivacyPolicy from './pages/pcPages/PrivacyPolicy';
import ShippingPolicy from './pages/pcPages/ShippingPolicy';
import TermAndConditions from './pages/pcPages/TermAndConditions';
import AboutUs from './pages/pcPages/AboutUs';
import AdminDashboard from './admin/AdminDashboard';
import UpdateGoldRate from './admin/UpdateGoldRate';
import OrderListGrid from './admin/OrderListGrid';
import AdminMainLayout from './admin/AdminMainLayout';
import { AdminProfileProvider } from './context/adminProfile.context';
import WebsiteStatus from './admin/WebsiteStatus';
import { StatusProvider } from './context/status.context';
import { useEffect } from 'react';
import { initializeAnalytics, logPageView } from './analytics.js';
import { DeleteAndVersionProvider } from './context/deleteAndVersion.context.jsx';
import { PriceProvider } from './context/price.context.jsx';
import MmtcPampPage from './pages/MmtcPampPage.jsx';
import GemsBlog from './pages/blogPages/GemsBlog.jsx';
import RubyGem from './pages/gems/RubyGem.jsx';
import PearlGem from './pages/gems/PearlGem.jsx';
import RedCoralGem from './pages/gems/RedCoralGem.jsx';
import EmeraldGem from './pages/gems/EmeraldGem.jsx';
import YellowSapphireGem from './pages/gems/YellowSapphireGem.jsx';
import BlueSapphireGem from './pages/gems/BlueSapphireGem.jsx';
import HessoniteGarnetGem from './pages/gems/HessoniteGarnetGem.jsx';
import CatEye from './pages/gems/CatEye.jsx';

const TrackPageView = () => {
  const location = useLocation();

  useEffect(() => {
    logPageView(location.pathname);
  }, [location]);

  return null;
};

function App() {
  useEffect(() => {
    initializeAnalytics();
  }, []);

  return (
    <ServerProvider>
      <DeleteAndVersionProvider>
        <StatusProvider>
          <PriceProvider>
            <MessageProvider>
              <AdminProfileProvider>
                <ProfileProvider>
                  <ProductProvider>
                    <CartProvider>
                      <BrowserRouter>
                        <TrackPageView />
                        <Routes>
                          <Route path="/" element={<Home />} />
                          <Route
                            path="/mmtc-pamp/"
                            element={<MmtcPampPage />}
                          />
                          <Route path="/contact" element={<Contact />} />
                          <Route
                            path="/gold-coin/:gramQt"
                            element={<GoldCoinPage />}
                          />
                          <Route
                            path="/silver-coin/:gramQt"
                            element={<SilverCoinsPage />}
                          />
                          <Route path="/cart" element={<Cart />} />
                          <Route path="/gold-rate" element={<GoldRate />} />
                          <Route
                            path="/shop/:productName"
                            element={<Product />}
                          />
                          <Route path="/shop" element={<ShopGrid />} />
                          <Route
                            path="/dashboard"
                            element={<UserDashboard />}
                          />
                          <Route
                            path="/forgotPassword"
                            element={<ForgotPassword />}
                          />
                          <Route
                            path="/product/:productCategory"
                            element={<CategoryPageGrid />}
                          />
                          <Route
                            path="/page/return-policy"
                            element={<ReturnPolicy />}
                          />
                          <Route
                            path="/page/privacy-policy"
                            element={<PrivacyPolicy />}
                          />
                          <Route
                            path="/page/shipping-policy"
                            element={<ShippingPolicy />}
                          />
                          <Route
                            path="/page/term-condition"
                            element={<TermAndConditions />}
                          />
                          <Route path="/page/ahout-us" element={<AboutUs />} />
                          <Route
                            path="/testPayment"
                            element={<PaymentTest />}
                          />
                          <Route path="*" element={<PageNotFound />} />
                          <Route element={<AdminMainLayout />}>
                            <Route
                              path="/nav-admin"
                              element={<AdminDashboard />}
                            />
                            <Route
                              path="/admin/change-rate"
                              element={<UpdateGoldRate />}
                            />
                            <Route
                              path="/admin/order-list"
                              element={<OrderListGrid />}
                            />
                            <Route
                              path="/admin/website-status"
                              element={<WebsiteStatus />}
                            />
                          </Route>
                          <Route
                            path="/blog/astrological-gems-unlocking-the-power-of-precious-stones"
                            element={<GemsBlog />}
                          />
                          <Route
                            path="/astrological-gems/ruby-manik"
                            element={<RubyGem />}
                          />
                          <Route
                            path="/astrological-gems/pearl-moti"
                            element={<PearlGem />}
                          />

                          <Route
                            path="/astrological-gems/red-coral-moonga"
                            element={<RedCoralGem />}
                          />
                          <Route
                            path="/astrological-gems/emerald-panna"
                            element={<EmeraldGem />}
                          />
                          <Route
                            path="/astrological-gems/yellow-sapphire-pokhraj"
                            element={<YellowSapphireGem />}
                          />
                          <Route
                            path="/astrological-gems/blue-sapphire-neelam"
                            element={<BlueSapphireGem />}
                          />
                          <Route
                            path="/astrological-gems/hessonite-garnet-gomed"
                            element={<HessoniteGarnetGem />}
                          />
                          <Route
                            path="/astrological-gems/cat-eye-lehsunia"
                            element={<CatEye />}
                          />
                          {/* Gems in Hindi Language */}
                          <Route
                            path="/hi/astrological-gems/ruby-manik"
                            element={<RubyGem />}
                          />
                          <Route
                            path="/hi/astrological-gems/pearl-moti"
                            element={<PearlGem />}
                          />

                          <Route
                            path="/hi/astrological-gems/red-coral-moonga"
                            element={<RedCoralGem />}
                          />
                          <Route
                            path="/hi/astrological-gems/emerald-panna"
                            element={<EmeraldGem />}
                          />
                          <Route
                            path="/hi/astrological-gems/yellow-sapphire-pokhraj"
                            element={<YellowSapphireGem />}
                          />
                          <Route
                            path="/hi/astrological-gems/blue-sapphire-neelam"
                            element={<BlueSapphireGem />}
                          />
                          <Route
                            path="/hi/astrological-gems/hessonite-garnet-gomed"
                            element={<HessoniteGarnetGem />}
                          />
                          <Route
                            path="/hi/astrological-gems/cat-eye-lehsunia"
                            element={<CatEye />}
                          />
                        </Routes>
                      </BrowserRouter>
                    </CartProvider>
                  </ProductProvider>
                </ProfileProvider>
              </AdminProfileProvider>
            </MessageProvider>
          </PriceProvider>
        </StatusProvider>
      </DeleteAndVersionProvider>
    </ServerProvider>
  );
}

export default App;
