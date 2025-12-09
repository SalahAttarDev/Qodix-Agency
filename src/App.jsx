import NavBar from './components/NavBar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import ContactUs from './components/Contact/ContactUs.jsx';
import Hero  from './components/Hero/Hero.jsx';
import AboutSection from './components/About/AboutUs.jsx';
import ServicesSection from './components/Services/ServicesSection.jsx';
import ProjectsSection from './components/Projects/ProjectsSection.jsx';
import ScrollNavbar from '/src/components/NavBar/ScrollNavbar.jsx';
export default function App() {
  return(
    <>
      <NavBar />   
      <ScrollNavbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactUs />
      <Footer />
    </>
  )

} 