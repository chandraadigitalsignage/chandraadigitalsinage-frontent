// src/components/SignageOverview.tsx
import React from 'react';
import { scrollToSection } from '../utils/animations';

const SignageOverview: React.FC = () => {
  return (
    <section id="signage-overview" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-blue-400">
          Transforming Business with Digital Signage
        </h2>
        <p className="text-xl text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          Digital signage isn't just about displays—it's about revolutionizing
          customer engagement, brand awareness, and sales strategies. Explore
          how cutting-edge signage solutions can drive your business forward.
        </p>

        <div className="space-y-12">
          <div className="bg-gray-700 bg-opacity-50 p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">
              What Makes Digital Signage Essential?
            </h3>
            <p className="text-lg leading-relaxed">
              Digital signage seamlessly integrates into various industries,
              providing impactful visuals and real-time content updates.
              Businesses leverage this technology for advertising, customer
              engagement, and information sharing.
            </p>
          </div>

          <div className="bg-gray-700 bg-opacity-50 p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">
              Types & Sizes of Digital Signage
            </h3>
            <p className="text-lg mb-4">
              Digital signage comes in diverse formats, customized to different
              business needs:
            </p>
            <ul className="space-y-3">
              {[
                'Indoor Displays: Ideal for promotions, menus, and corporate communication.',
                'Outdoor Billboards: High-visibility screens built for durability.',
                'Interactive Kiosks: Self-service touch-enabled screens for improved engagement.',
                'Video Walls: Large-scale screens for maximum visual impact.'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-400 mr-3">•</span>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-700 bg-opacity-50 p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">
              Market Trends & Business Impact
            </h3>
            <p className="text-lg mb-6">
              Digital signage has seen exponential growth, with businesses
              embracing innovative display strategies.
            </p>
            <div className="space-y-4">
              {[
                'The global market is expanding at an annual rate of 8%.',
                'Companies report up to a 30% boost in sales.',
                'Dynamic displays enhance customer experience and retention.'
              ].map((trend, index) => (
                <p key={index} className="flex items-center text-lg">
                  <i className="fas fa-chart-line text-blue-400 mr-3 w-6 text-center" />
                  {trend}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-xl mb-6">
            Ready to redefine your business with digital signage?
          </p>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
          >
            Get Started Today!
          </button>
        </div>
      </div>
    </section>
  );
};

export default SignageOverview;