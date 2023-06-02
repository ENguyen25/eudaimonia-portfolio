import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Work from "./components/pages/Work";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
