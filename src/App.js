import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import OurWorks from './pages/OurWorks';
import PricingPage from './pages/PricingPage';
import FeaturesPage from './pages/FeaturesPage';
import Blogs from './pages/Blogs';
import ContactPage from './pages/ContactPage';
import Privacy from './pages/PrivacyPage';
import ReadBlog1 from './pages/ReadBlog1';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/features" element={<FeaturesPage />}></Route>
        <Route path="/pricing" element={<PricingPage />}></Route>
        <Route path="/works" element={<OurWorks />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/readBlog1" element={<ReadBlog1 />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="/privacy" element={<Privacy />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
