import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Destinations from './components/Destinations'
import Packages from './components/Packages'
import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <div style={{ marginTop: '80px' }}>
        <Stats />
      </div>
      <Destinations />
      <Packages />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  )
}
