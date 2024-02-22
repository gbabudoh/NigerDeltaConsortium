import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import useTrackPageViews from './useTrackPageViews'; // Ensure this path is correct
import Home from './pages/Home';
import Environmental from './pages/Environmental';
import Underdevelopment from './pages/Underdevelopment';
import Insecurity from './pages/Insecurity';
import Climate from './pages/Climate';
import Community from './pages/Community';
import Framework from './pages/Framework';
import About from './pages/About';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Events from './pages/Events';
import Search from './pages/Search';
import Registration from './pages/Registration';
import Navbar from './components/header/Navbar';
import Footer from './components/footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Favicon from './components/favicon/Favicon'; // Ensure this path matches your project structure
import Cookie from './pages/Cookie';


function App() {
  useTrackPageViews(); // This hooks into route changes for GA tracking
  const location = useLocation(); // Use the useLocation hook to get the current location

  return (
    <div>
      <Favicon />
      <ScrollToTop />
      {/* Conditionally render Navbar if not on the /registration page */}
      {location.pathname !== '/registration' && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/environmental-devastation" element={<Environmental />} />
        <Route path="/underdevelopment-and-poverty" element={<Underdevelopment />} />
        <Route path="/insecurity-and-conflict" element={<Insecurity />} />
        <Route path="/climate-change-vulnerability" element={<Climate />} />
        <Route path="/community-engagement" element={<Community />} />
        <Route path="/lack-of-sustainable-framework" element={<Framework />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/events" element={<Events />} />
        <Route path="/search" element={<Search />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
      <Footer />
      <Cookie/>
    </div>
  );
}

export default App;

