import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Outlet } from 'react-router-dom';
/*import Layout from './components/Layout';*/
import Navbar from './components/sections/Navbar/Navbar';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import AdditionalR from './pages/AdditionalR';
import Additional from './components/additional/Additional';
import Contact from './pages/Contact';
import Footer from './components/sections/footer/Footer';
import ArticleDetail from './pages/ArticleDetail';

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return null;
}

function App() {

  return (
    <BrowserRouter>
    <ScrollToHash />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/additionalR" element={<AdditionalR />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/additional" element={<Additional />} />

        <Route path="/blog/:articleId" element={<ArticleDetail />} />
        <Route path="/additional/:articleId" element={<ArticleDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App
