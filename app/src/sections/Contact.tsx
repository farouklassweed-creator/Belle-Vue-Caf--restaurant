import { MapPin, Phone, Clock, Instagram, Facebook, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-gradient-to-b from-amber-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-amber-600 font-medium tracking-wider uppercase text-sm">Contact</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-3 mb-6">
            Réservez Votre Table
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Contactez-nous pour une réservation ou pour toute question. 
            Notre équipe sera ravie de vous accueillir.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Informations de Contact</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Adresse</h4>
                    <p className="text-gray-600">Boulevard Habib Bougatfa</p>
                    <p className="text-gray-600">Bizerte, Tunisie</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Téléphone</h4>
                    <a 
                      href="tel:+21698136464" 
                      className="text-gray-600 hover:text-amber-600 transition-colors"
                    >
                      +216 98 136 464
                    </a>
                    <p className="text-gray-500 text-sm mt-1">
                      (également disponible sur WhatsApp)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Horaires d'Ouverture</h4>
                    <p className="text-gray-600">Tous les jours</p>
                    <p className="text-amber-600 font-medium">10h00 - 00h00</p>
                    <p className="text-gray-500 text-sm mt-1">
                      Ouverture continue
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Suivez-Nous</h3>
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/bellevuecaferesto/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-3 rounded-lg hover:shadow-lg transition-shadow"
                >
                  <Instagram className="w-5 h-5" />
                  <span>Instagram</span>
                  <span className="text-white/70 text-sm">6.2K+</span>
                </a>
                <a 
                  href="https://www.facebook.com/Bellevuecaferesto/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-lg hover:shadow-lg transition-shadow"
                >
                  <Facebook className="w-5 h-5" />
                  <span>Facebook</span>
                  <span className="text-white/70 text-sm">5.1K+</span>
                </a>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Réservation Rapide</h3>
              <p className="text-white/90 mb-6">
                Appelez-nous directement pour réserver votre table. 
                Nous vous recommandons de réserver à l'avance pour les week-ends.
              </p>
              <Button 
                size="lg"
                className="bg-white text-amber-600 hover:bg-amber-50 w-full"
                onClick={() => window.open('tel:+21698136464')}
              >
                <Phone className="w-5 h-5 mr-2" />
                Appeler Maintenant
              </Button>
            </div>
          </div>

          {/* Map */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-4 shadow-lg">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3180.1234567890123!2d9.8776512!3d37.2752698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e31feb47d70781%3A0xf40785b54d849fde!2sBelle%20Vue%20Caf%C3%A9-restaurant!5e0!3m2!1sen!2stn!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Belle Vue Café-Restaurant Location"
                />
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4 shadow text-center">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-gray-800">Terrasse Extérieure</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow text-center">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-gray-800">Vue sur la Mer</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow text-center">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-gray-800">Options Végétaliennes</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow text-center">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-gray-800">À Emporter</p>
              </div>
            </div>

            {/* Directions Button */}
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=37.27526980,9.87765120"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors w-full"
            >
              <ExternalLink className="w-5 h-5" />
              Obtenir l'Itinéraire
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
