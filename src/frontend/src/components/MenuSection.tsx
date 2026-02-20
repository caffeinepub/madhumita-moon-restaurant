import { Fish, Leaf, Moon, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const menuCategories = [
  {
    icon: Fish,
    title: 'Traditional Assamese',
    description: 'Authentic dishes from the heart of Assam',
    items: [
      'Masor Tenga - Tangy fish curry with tomatoes and herbs',
      'Duck Curry - Slow-cooked with aromatic spices',
      'Khar - Traditional alkaline preparation',
      'Assamese Thali - Complete traditional platter'
    ]
  },
  {
    icon: Moon,
    title: 'Moon Specials',
    description: 'Our signature fusion creations',
    items: [
      'Moonlit Pitha Platter - Assorted rice cakes with modern twists',
      'Lunar Fish Tikka - Grilled fish with special marinade',
      'Starlight Biryani - Fusion rice dish with local ingredients',
      'Celestial Sweets - Moon-shaped desserts'
    ]
  },
  {
    icon: Leaf,
    title: 'Fresh & Light',
    description: 'Healthy options with vibrant flavors',
    items: [
      'Herb Garden Salad - Fresh greens with local herbs',
      'Steamed Fish with Ginger - Light and aromatic',
      'Vegetable Medley - Seasonal vegetables',
      'Fresh Fruit Platter - Tropical selections'
    ]
  },
  {
    icon: Sparkles,
    title: 'Desserts & Beverages',
    description: 'Sweet endings and refreshing drinks',
    items: [
      'Pitha Varieties - Traditional rice cakes',
      'Narikol Laru - Coconut sweets',
      'Assam Tea - Premium selection',
      'Seasonal Fresh Juices'
    ]
  }
];

export function MenuSection() {
  return (
    <section id="menu" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display text-golden mb-4">
            Our Menu
          </h2>
          <p className="text-cream/80 text-lg max-w-2xl mx-auto">
            A carefully curated selection of traditional Assamese delicacies and innovative fusion dishes
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {menuCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index}
                className="bg-navy-card/80 backdrop-blur-sm border-golden/20 hover:border-golden/40 transition-all hover:shadow-xl hover:shadow-golden/10"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-golden/10 rounded-lg">
                      <Icon className="w-6 h-6 text-golden" />
                    </div>
                    <CardTitle className="text-golden text-2xl font-display">
                      {category.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-cream/70">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-cream/90">
                        <span className="text-golden mt-1">•</span>
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
