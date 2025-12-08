import NavBar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ContactUs from './components/layout/ContactUs';
import Hero  from './components/layout/Hero';
import AboutSection from './components/layout/AboutUs';
import ClinicServices from './components/layout/ClinicServices';
import AdvancedServices from './components/layout/AdvancedServices';
import ProjectsSection from './components/layout/ProjectsSection';
export default function App() {
  return(
    <>
      <NavBar />   
      <Hero />
      <AboutSection />
      <ClinicServices />
      <AdvancedServices />
      <ProjectsSection />
      <ContactUs />
      <Footer />
    </>
  )

} 