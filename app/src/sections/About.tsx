import { Utensils, Users, Award, Heart } from 'lucide-react';

const features = [
  {
    icon: Utensils,
    title: 'Cuisine Authentique',
    description: 'Des plats tunisiens traditionnels et une cuisine méditerranéenne raffinée préparés avec passion.'
  },
  {
    icon: Users,
    title: 'Ambiance Conviviale',
    description: 'Un cadre chaleureux et accueillant, parfait pour les repas en famille ou entre amis.'
  },
  {
    icon: Award,
    title: 'Service Professionnel',
    description: 'Une équipe dédiée dirigée par le chef Mejri, reconnu pour son professionnalisme.'
  },
  {
    icon: Heart,
    title: 'Vue Panoramique',
    description: 'Profitez d\'une vue imprenable sur la mer et le pont de Bizerte pendant votre repas.'
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-gradient-to-b from-amber-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-amber-600 font-medium tracking-wider uppercase text-sm">À Propos de Nous</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-3 mb-6">
            Une Histoire de Passion
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full" />
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/interior.jpg" 
                alt="Intérieur élégant du restaurant" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 max-w-xs hidden sm:block">
              <p className="text-amber-600 font-bold text-3xl mb-1">3.8</p>
              <p className="text-gray-600 text-sm">Note moyenne sur Google</p>
              <div className="flex gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Bienvenue chez Belle Vue Café-Restaurant
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Situé au cœur de Bizerte, sur le Boulevard Habib Bougatfa, Belle Vue est bien plus qu'un simple restaurant. 
              C'est un lieu où la gastronomie rencontre la convivialité, où chaque plat raconte une histoire et où 
              la vue panoramique sur la mer et le pont de Bizerte crée une atmosphère magique.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Que vous soyez un habitant de la région ou un visiteur en quête d'une expérience culinaire mémorable, 
              notre équipe chaleureuse vous accueille dans un cadre confortable et élégant. Du petit-déjeuner au dîner, 
              nous vous proposons une cuisine de qualité préparée avec des ingrédients frais et soigneusement sélectionnés.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-amber-100 px-6 py-3 rounded-full">
                <span className="text-amber-800 font-semibold">Petit-Déjeuner</span>
              </div>
              <div className="bg-amber-100 px-6 py-3 rounded-full">
                <span className="text-amber-800 font-semibold">Déjeuner</span>
              </div>
              <div className="bg-amber-100 px-6 py-3 rounded-full">
                <span className="text-amber-800 font-semibold">Dîner</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-amber-100"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
