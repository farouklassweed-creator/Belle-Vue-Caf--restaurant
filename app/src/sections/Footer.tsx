import { MapPin, Phone, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-amber-400">Belle Vue</span> Café-Restaurant
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Une expérience culinaire exceptionnelle au cœur de Bizerte. 
              Découvrez nos saveurs authentiques dans un cadre élégant avec vue panoramique.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/bellevuecaferesto/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/Bellevuecaferesto/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens Rapides</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-amber-400 transition-colors">
                  À Propos
                </a>
              </li>
              <li>
                <a href="#menu" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Notre Menu
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Galerie
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Boulevard Habib Bougatfa<br />
                  Bizerte, Tunisie
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <a 
                  href="tel:+21698136464" 
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  +216 98 136 464
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              {currentYear} Belle Vue Café-Restaurant. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-amber-400 transition-colors">
                Mentions Légales
              </a>
              <a href="#" className="text-gray-500 hover:text-amber-400 transition-colors">
                Politique de Confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
