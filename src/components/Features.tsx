import { Cloud, Zap, Shield, } from 'lucide-react';
import { useRef } from 'react'
import { useScrollAnimation } from './hooks/useScrollAnimation';


const features = [
  {
    icon: Cloud,
    title: 'CLOUD MANAGEMENT ',
    description: 'Control all your displays from anywhere with our intuitive cloud platform'
  },
  {
    icon: Zap,
    title: '4K DISPLAY SUPPORT ',
    description: 'Push content instantly to any screen with zero delay or downtime'
  },
  {
    icon: Shield,
    title: 'SMART SCHEDULING',
    description: 'Bank-level encryption and secure content delivery for peace of mind'
  },
  
];

const KeyFeatures = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef, 0.1);

  return (
    <section id="features" ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to create stunning digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`group p-8 bg-white rounded-2xl shadow-sm border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 cursor-pointer ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg group-hover:shadow-blue-500/50">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-blue-600">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
