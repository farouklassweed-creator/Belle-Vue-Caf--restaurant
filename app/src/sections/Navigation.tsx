import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Accueil', href: '#home' },
  { name: 'À Propos', href: '#about' },
  { name: 'Menu', href: '#menu' },
  { name: 'Galerie', href: '#gallery' },
  { name: 'Avis', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#home" 
              onClick={(e) => handleLinkClick(e, '#home')}
              className="flex items-center gap-2"
            >
              <span className={`text-2xl font-bold transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                <span className="text-amber-500">Belle</span> Vue
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-sm font-medium transition-colors hover:text-amber-500 ${
                    isScrolled ? 'text-gray-700' : 'text-white/90'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button 
                className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-6"
                onClick={() => window.open('tel:+21698136464')}
              >
                <Phone className="w-4 h-4 mr-2" />
                Réserver
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div 
          className={`absolute top-0 right-0 h-full w-72 bg-white shadow-2xl transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6 pt-20">
            <div className="space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="block text-lg font-medium text-gray-800 hover:text-amber-600 transition-colors py-2"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <Button 
                className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                onClick={() => window.open('tel:+21698136464')}
              >
                <Phone className="w-4 h-4 mr-2" />
                Réserver une Table
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
