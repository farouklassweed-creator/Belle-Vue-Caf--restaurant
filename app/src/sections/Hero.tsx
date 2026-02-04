import { Phone, MapPin, Clock, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/hero-restaurant.jpg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-20">
        <div className="mb-6 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-amber-500/20 backdrop-blur-sm rounded-full text-amber-300 text-sm font-medium tracking-wider uppercase border border-amber-500/30">
            Bienvenue à Bizerte
          </span>
        </div>
        
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
          <span className="block">Belle Vue</span>
          <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mt-2 text-amber-200">
            Café-Restaurant
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
          Une expérience culinaire exceptionnelle avec une vue panoramique sur la mer et le pont de Bizerte
        </p>

        {/* Quick Info */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-10 text-sm sm:text-base">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>Boulevard Habib Bougatfa</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <Phone className="w-4 h-4 text-amber-400" />
            <span>+216 98 136 464</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>Ouvert jusqu'à minuit</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Découvrir le Menu
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white/50 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full backdrop-blur-sm transition-all duration-300"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Réserver une Table
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/60" />
      </div>
    </section>
  );
}
