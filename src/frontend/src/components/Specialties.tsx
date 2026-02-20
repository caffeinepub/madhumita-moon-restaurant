import { Award, ChefHat, Heart, Star } from 'lucide-react';

const specialties = [
  {
    icon: ChefHat,
    title: 'Expert Chefs',
    description: 'Our culinary team brings decades of experience in traditional Assamese cuisine'
  },
  {
    icon: Heart,
    title: 'Fresh Ingredients',
    description: 'We source the finest local ingredients daily for authentic flavors'
  },
  {
    icon: Star,
    title: 'Signature Dishes',
    description: 'Unique fusion creations that honor tradition while embracing innovation'
  },
  {
    icon: Award,
    title: 'Premium Experience',
    description: 'Elegant ambiance and exceptional service for memorable dining'
  }
];

export function Specialties() {
  return (
    <section id="specialties" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-crimson/5 to-transparent" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display text-golden mb-4">
            What Makes Us Special
          </h2>
          <p className="text-cream/80 text-lg max-w-2xl mx-auto">
            A commitment to excellence in every aspect of your dining experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {specialties.map((specialty, index) => {
            const Icon = specialty.icon;
            return (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-golden/10 rounded-full mb-6 group-hover:bg-golden/20 transition-colors border-2 border-golden/30">
                  <Icon className="w-10 h-10 text-golden" />
                </div>
                <h3 className="text-xl font-display text-golden mb-3">
                  {specialty.title}
                </h3>
                <p className="text-cream/70 leading-relaxed">
                  {specialty.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
