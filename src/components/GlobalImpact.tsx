// src/components/GlobalImpact.tsx
import React from 'react';
import { ImpactCard } from '../types/index';
import { scrollToSection } from '../utils/animations';

const GlobalImpact: React.FC = () => {
  const impactCards: ImpactCard[] = [
    {
      title: 'Retail Transformation',
      description: 'Boost sales by 30%.',
      icon: 'fas fa-shopping-cart'
    },
    {
      title: 'Corporate Efficiency',
      description: 'Employee engagement up by 65%.',
      icon: 'fas fa-building'
    },
    {
      title: 'Healthcare Benefits',
      description: 'Waiting times reduced by 40%.',
      icon: 'fas fa-hospital'
    },
    {
      title: 'Outdoor Advertising',
      description: 'Brand recall increased by 60%.',
      icon: 'fas fa-bullhorn'
    }
  ];

  return (
    <section id="global-impact" className="py-20 bg-gray-800 text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-blue-400">
          The Global Influence of Digital Signage
        </h2>
        <p className="text-xl text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          Digital signage transforms industries worldwide, driving engagement,
          efficiency, and revenue. Discover how businesses across the globe are
          benefiting from dynamic display solutions.
        </p>

        <div className="relative overflow-hidden py-8">
          <div className="flex animate-scroll gap-6">
            {[...impactCards, ...impactCards].map((card, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 bg-gray-700 bg-opacity-50 p-6 rounded-xl text-center"
              >
                <h3 className="text-xl font-semibold mb-3 text-blue-400">
                  {card.title}
                </h3>
                <p className="text-lg mb-4">{card.description}</p>
                <i className={`${card.icon} text-3xl text-blue-400`} />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-xl mb-6">
            Want to leverage digital signage for your business?
          </p>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
          >
            Get Started Today!
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
          display: flex;
          width: max-content;
        }
      `}</style>
    </section>
  );
};

export default GlobalImpact;