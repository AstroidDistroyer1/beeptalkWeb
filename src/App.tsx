import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import TermsOfService from './components/TermsOfService';
import PrivacyStatement from './components/PrivacyStatement';
import CommunityGuidelines from './components/CommunityGuidelines';
import RefundPolicy from './components/RefundPolicy';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyStatement />} />
          <Route path="/community-guidelines" element={<CommunityGuidelines />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;