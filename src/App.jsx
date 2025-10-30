import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hero from "./Components/Herosection/herosection";
import Header from "./Components/Header/header";
import About from "./Components/About/about";
import Category from "./Components/Category/Category";
import Destination from "./Components/Destination/Destination";
import Footer from "./Components/Footer/footer";
import DestinationPage from "./Components/DestinationPage/DestinationPage";
import Preview from "./Components/Preview/Preview";
import Event from "./Components/Event/event";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Header />
      <About />
      <Category />
      <Destination />
      <Event />
      <Preview />
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/destination" element={<DestinationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
