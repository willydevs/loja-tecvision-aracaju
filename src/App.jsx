import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Products from './components/Products'
import TargetAudience from './components/TargetAudience'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <main>
        <Hero />
        <Features />
        <Services />
        <Testimonials />
        <Products />
        <TargetAudience />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
