import NavBar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ContactUs from './components/layout/ContactUs';
import Hero  from './components/layout/Hero';
export default function App() {
  return(
    <>
      <NavBar />
      <Hero />

            
            <div style={{ height: '100vh', background: '#F8FAFC' }}>
                {/* Your other content sections */}
            </div>
      <ContactUs />
      <Footer />
    </>
  )

} 