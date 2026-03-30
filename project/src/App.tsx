import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import PentestWeb from './pages/PentestWeb';
import PentestAPI from './pages/PentestAPI';
import PentestMobile from './pages/PentestMobile';
import OSINT from './pages/OSINT';
import Phishing from './pages/Phishing';
import Methodology from './pages/Methodology';
import About from './pages/About';
import Contact from './pages/Contact';
import Legal from './pages/Legal';
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="services/pentest-web" element={<PentestWeb />} />
          <Route path="services/pentest-api" element={<PentestAPI />} />
          <Route path="services/pentest-mobile" element={<PentestMobile />} />
          <Route path="services/osint" element={<OSINT />} />
          <Route path="services/phishing" element={<Phishing />} />
          <Route path="methodology" element={<Methodology />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="legal" element={<Legal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
