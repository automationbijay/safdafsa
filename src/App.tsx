import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import SuccessStories from './components/SuccessStories'
import About from './components/About'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import BlogPage from './pages/BlogPage'

const HomePage = () => (
  <>
    <Hero />
    <HowItWorks />
    <SuccessStories />
    <About />
    <FAQ />
  </>
)

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blogs" element={<BlogPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
