import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import ContactUs from './components/Contact/ContactUs.jsx';
import Hero from './components/Hero/Hero.jsx';
import AboutSection from './components/About/AboutUs.jsx';
import ServicesSection from './components/Services/ServicesSection.jsx';
import ProjectsSection from './components/Projects/ProjectsSection.jsx';
import ScrollNavbar from './components/NavBar/ScrollNavbar.jsx';
import ServiceDetail from './components/Services/ServiceDetail.jsx';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton.jsx';

function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactUs />
    </>
  );
}

function MainLayout() {
  return (
    <>
      <Navbar />
      <ScrollNavbar />
      <HomePage />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

function ServicePageLayout() {
  return (
    <>
      <Navbar />
      <ScrollNavbar />
      <ServiceDetail />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/services/:slug" element={<ServicePageLayout />} />
      </Routes>
    </Router>
  );
}