import { useState } from 'react';
import { Coffee, Fish, Beef, Salad, Wine } from 'lucide-react';

const categories = [
  { id: 'breakfast', name: 'Petit-Déjeuner', icon: Coffee },
  { id: 'seafood', name: 'Fruits de Mer', icon: Fish },
  { id: 'meat', name: 'Viandes', icon: Beef },
  { id: 'salads', name: 'Salades', icon: Salad },
  { id: 'drinks', name: 'Boissons', icon: Wine },
];

const menuItems = {
  breakfast: [
    {
      name: 'Petit-Déjeuner Complet',
      description: 'Croissants, pain frais, beurre, confiture, jus d\'orange pressé, café ou thé',
      price: '18 TND',
      image: '/breakfast.jpg'
    },
    {
      name: 'Parfait aux Fruits',
      description: 'Yaourt grec, granola maison, fruits frais de saison, miel',
      price: '12 TND',
      image: '/breakfast.jpg'
    },
    {
      name: 'Omelette du Chef',
      description: 'Omelette aux herbes fraîches, fromage, tomates, servie avec pain toasté',
      price: '14 TND',
      image: '/breakfast.jpg'
    }
  ],
  seafood: [
    {
      name: 'Pasta aux Fruits de Mer',
      description: 'Spaghetti avec crevettes, moules, calamars et sauce crémeuse aux herbes',
      price: '32 TND',
      image: '/seafood-pasta.jpg'
    },
    {
      name: 'Poisson Grillé',
      description: 'Bar entier grillé, servi avec légumes de saison et citron',
      price: '38 TND',
      image: '/grilled-fish.jpg'
    },
    {
      name: 'Couscous de Poisson',
      description: 'Couscous traditionnel avec poisson frais et légumes',
      price: '28 TND',
      image: '/couscous.jpg'
    }
  ],
  meat: [
    {
      name: 'Couscous d\'Agneau',
      description: 'Couscous traditionnel tunisien avec agneau tendre et légumes',
      price: '35 TND',
      image: '/couscous.jpg'
    },
    {
      name: 'Grillade Mixte',
      description: 'Sélection de viandes grillées : côtelettes d\'agneau, poulet, bœuf',
      price: '45 TND',
      image: '/grilled-meat.jpg'
    },
    {
      name: 'Escalope Panée',
      description: 'Escalope de poulet panée, servie avec frites et salade',
      price: '22 TND',
      image: '/grilled-meat.jpg'
    }
  ],
  salads: [
    {
      name: 'Salade César',
      description: 'Laitue romaine, poulet grillé, croûtons, parmesan, sauce César',
      price: '18 TND',
      image: '/salad.jpg'
    },
    {
      name: 'Salade Niçoise',
      description: 'Thon, œufs durs, haricots verts, olives, tomates, vinaigrette',
      price: '20 TND',
      image: '/salad.jpg'
    },
    {
      name: 'Salade Méchouia',
      description: 'Salade tunisienne traditionnelle avec poivrons grillés et tomates',
      price: '12 TND',
      image: '/salad.jpg'
    }
  ],
  drinks: [
    {
      name: 'Cocktails Maison',
      description: 'Sélection de cocktails frais préparés par nos barmen',
      price: '15 TND',
      image: '/cocktails.jpg'
    },
    {
      name: 'Jus de Fraise Frais',
      description: 'Jus de fraise pressé à la commande',
      price: '10 TND',
      image: '/cocktails.jpg'
    },
    {
      name: 'Café Spécial',
      description: 'Café arabica préparé à la perfection',
      price: '5 TND',
      image: '/cocktails.jpg'
    }
  ]
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('breakfast');

  return (
    <section id="menu" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-amber-600 font-medium tracking-wider uppercase text-sm">Notre Carte</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-3 mb-6">
            Découvrez Nos Saveurs
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Une cuisine authentique alliant traditions tunisiennes et saveurs méditerranéennes, 
            préparée avec des ingrédients frais et de qualité.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-amber-100 hover:text-amber-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-amber-600 transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-lg font-bold text-amber-600">{item.price}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Price Note */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            * Prix moyen par personne : 30-40 TND | Menu susceptible de changement selon la saison
          </p>
        </div>
      </div>
    </section>
  );
}
