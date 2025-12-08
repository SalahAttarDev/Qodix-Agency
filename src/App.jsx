import NavBar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ContactUs from './components/layout/ContactUs';
import Hero  from './components/layout/Hero';
import AboutSection from './components/layout/AboutUs';
export default function App() {
  return(
    <>
      <NavBar />   
      <Hero />

      <AboutSection />
            <div style={{ height: '100vh', background: '#F8FAFC' }}>
                {/* Your other content sections */}
            </div>
      <ContactUs />
      <Footer />
    </>
  )

} 