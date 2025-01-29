import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'how-it-works', label: 'How It Works', path: '/#how-it-works' },
  { id: 'success-stories', label: 'Success Stories', path: '/#success-stories' },
  { id: 'about', label: 'About', path: '/#about' },
  { id: 'blogs', label: 'Blogs', path: '/blogs' },
  { id: 'faq', label: 'FAQs', path: '/#faq' }
]

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      if (location.pathname === '/') {
        const sections = document.querySelectorAll('section[id]')
        const scrollPosition = window.scrollY + 100

        sections.forEach(section => {
          const sectionTop = (section as HTMLElement).offsetTop
          const sectionHeight = section.clientHeight
          const sectionId = section.getAttribute('id') || ''

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sectionId)
          }
        })
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location])

  const handleNavClick = (id: string, path: string) => {
    setIsMobileMenuOpen(false)
    if (path.startsWith('/#')) {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-sm shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="font-bold text-xl gradient-text">
              INFLUENCERS NEPAL
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => handleNavClick(item.id, item.path)}
                className={`nav-link ${
                  (location.pathname === '/' && activeSection === item.id) || 
                  (location.pathname === item.path && !item.path.startsWith('/#'))
                    ? 'active' 
                    : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen 
              ? 'max-h-96 opacity-100' 
              : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 backdrop-blur-sm mt-2 rounded-lg">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => handleNavClick(item.id, item.path)}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                  (location.pathname === '/' && activeSection === item.id) || 
                  (location.pathname === item.path && !item.path.startsWith('/#'))
                    ? 'bg-blue-50 text-blue-600 font-medium'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
