import { Sun, Box, Package, Grid3x3, Umbrella, Tv, Lightbulb, Zap, Palette, Store, Truck, PaintBucket } from 'lucide-react';
import { useRef } from 'react';
import { useScrollAnimation } from './hooks/useScrollAnimation';

const services = [
  {
    icon: Sun,
    title: 'Sunback Sheets',
    description: 'High-quality outdoor advertising displays with sun-resistant printing'
  },
  {
    icon: Box,
    title: 'Standee Models',
    description: 'Custom free-standing displays for promotions and events'
  },
  {
    icon: Package,
    title: 'In-Shop Displays',
    description: 'Customized retail display solutions for maximum product visibility'
  },
  {
    icon: Grid3x3,
    title: 'Custom Display Racks',
    description: 'Tailor-made merchandising solutions for your specific needs'
  },
  {
    icon: Umbrella,
    title: 'Promotional Canopies',
    description: 'Branded shade solutions for outdoor events and promotions'
  },
  {
    icon: Tv,
    title: 'Advertising Kiosks',
    description: 'Eye-catching standalone promotional units for high-traffic areas'
  },
  {
    icon: Lightbulb,
    title: 'Printed Advertising Umbrellas',
    description: 'Mobile brand visibility solutions for all weather conditions'
  },
  {
    icon: Zap,
    title: 'Helium Promotional Balloons',
    description: 'Large-scale helium balloons for maximum aerial visibility'
  },
  {
    icon: Palette,
    title: 'Party Decorations',
    description: 'Themed balloon installations and event decoration services'
  },
  {
    icon: Store,
    title: 'Promotional Stalls',
    description: 'Complete temporary stall solutions for exhibitions and markets'
  },
  {
    icon: Truck,
    title: 'Vehicle Road Shows',
    description: 'Mobile advertising solutions with customized vehicle wraps'
  },
  {
    icon: PaintBucket,
    title: 'Wall & Floor Branding',
    description: 'Custom wall paintings and floor stand installations'
  }
];

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef, 0.1);

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive advertising and display solutions for every need
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`group relative p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-500 hover:shadow-xl hover:scale-105 cursor-pointer ${
                  isVisible ? 'translate-x-0 opacity-100' : index % 2 === 0 ? '-translate-x-12 opacity-0' : 'translate-x-12 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full -translate-y-16 translate-x-16 transition-transform duration-500 group-hover:scale-150" />

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-md">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-blue-600">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
