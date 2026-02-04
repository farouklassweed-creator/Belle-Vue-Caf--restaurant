import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Naourez Aloui',
    rating: 5,
    text: 'Mohamed Zarga est très accueillant et chaleureux. Le service est excellent et la vue est magnifique. Je recommande vivement !',
    date: 'Il y a 20 jours',
    platform: 'Google'
  },
  {
    name: 'Soltani Mohamed',
    rating: 5,
    text: 'Merci beaucoup pour tout le monde, les repas sont délicieux et merci beaucoup au chef Mr Mejri (Zarga) il était très professionnel et très gentil.',
    date: 'Il y a 20 jours',
    platform: 'Google'
  },
  {
    name: 'Hannen Mejri',
    rating: 5,
    text: 'J\'aime bien le service et la vue et tous. Une expérience agréable à chaque visite.',
    date: 'Il y a 21 jours',
    platform: 'Google'
  },
  {
    name: 'Amira Ben',
    rating: 4,
    text: 'Très bon restaurant avec une superbe vue sur le pont de Bizerte. Le petit-déjeuner est excellent et le personnel est attentionné.',
    date: 'Il y a 1 mois',
    platform: 'Facebook'
  },
  {
    name: 'Karim Trabelsi',
    rating: 5,
    text: 'Une adresse incontournable à Bizerte. La cuisine est raffinée, les cocktails sont délicieux et l\'ambiance est top !',
    date: 'Il y a 2 mois',
    platform: 'Google'
  },
  {
    name: 'Leila Mansour',
    rating: 4,
    text: 'J\'adore venir ici pour le brunch du week-end. Les croissants sont frais et le café est excellent.',
    date: 'Il y a 2 mois',
    platform: 'Facebook'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-amber-600 font-medium tracking-wider uppercase text-sm">Témoignages</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-3 mb-6">
            Ce Que Disent Nos Clients
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            La satisfaction de nos clients est notre plus belle récompense. 
            Découvrez leurs avis authentiques.
          </p>
        </div>

        {/* Rating Summary */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-5xl font-bold text-gray-900">3.8</span>
              <div className="flex flex-col items-start">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < 4 ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">sur Google</span>
              </div>
            </div>
            <p className="text-gray-600">108 avis</p>
          </div>
          
          <div className="hidden sm:block w-px h-16 bg-gray-200" />
          
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-5xl font-bold text-gray-900">5.0</span>
              <div className="flex flex-col items-start">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-500">sur Facebook</span>
              </div>
            </div>
            <p className="text-gray-600">5.1K+ followers</p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 relative hover:shadow-lg transition-shadow duration-300"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-amber-200" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.date}</p>
                </div>
                <span className="text-xs bg-white px-3 py-1 rounded-full text-gray-600">
                  {testimonial.platform}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Vous aussi, partagez votre expérience !
          </p>
          <a 
            href="https://www.google.com/search?q=Belle+Vue+Caf%C3%A9-restaurant+Bizerte"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-shadow duration-300"
          >
            <Star className="w-5 h-5" />
            Laisser un Avis
          </a>
        </div>
      </div>
    </section>
  );
}
