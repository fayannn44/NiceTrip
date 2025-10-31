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
      <Header />
      <Hero />
      <About />
      <div id="category">
        <Category />
      </div>
      <div id="destination">
        <Destination />
      </div>
      <div id="event">
        <Event />
      </div>
      <div id="preview">
        <Preview />
      </div>
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router basename="/NiceTrip">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category" element={<Category />} />
        <Route path="/destination" element={<DestinationPage />} />
        <Route path="/event" element={<Event />} />
        <Route path="/preview" element={<Preview />} />
      </Routes>
    </Router>
  );
}

export default App;