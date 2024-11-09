import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// import ViewCanvas from './components/ViewCanvas';
import Home from './routes/Home/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Blogs from './routes/Blogs/Blogs';

const App = () => (
  <>
    <Header />
    {/* <Suspense fallback={<div>Loading...</div>}> */}
      {/* <ViewCanvas /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    {/* </Suspense> */}

    <Footer />
  </>
);

export default App;
