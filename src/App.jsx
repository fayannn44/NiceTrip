import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Komponen yang sudah ada
import Hero from "./Component/Herosection/herosection";
import Header from "./Component/Header/header";
import About from "./Component/About/about";
import Category from "./Component/Category/Category";
import Destination from "./Component/Destination/Destination";
import Footer from "./Component/Footer/footer";
import DestinationPage from "./Component/DestinationPage/DestinationPage";

// Halaman utama HomePage (hanya di App.jsx kita definisikan, tidak buat file baru)
const HomePage = () => {
  return (
    <>
      <Hero />
      <Header />
      <About />
      <Category />
      <Destination />
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Halaman utama */}
        <Route path="/" element={<HomePage />} />

        {/* Halaman destinasi */}
        <Route path="/destination" element={<DestinationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
