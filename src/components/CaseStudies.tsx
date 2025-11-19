import { TrendingUp, Users, Award, Globe } from 'lucide-react';
import { useRef, useEffect } from 'react';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import { useCounter } from './hooks/usecounter';

const metrics = [
  { icon: TrendingUp, value: 78, suffix: '%', label: 'Brand Recall Increase' },
  { icon: Users, value: 250, suffix: '+', label: 'Satisfied Clients' },
  { icon: Award, value: 98, suffix: '%', label: 'Customer Satisfaction' },
  { icon: Globe, value: 45, suffix: '+', label: 'Countries Served' }
];

const MetricCard = ({ icon: Icon, value, suffix, label, delay }: {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  delay: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(cardRef, 0.3);
  const { count, startAnimation } = useCounter(value, 2000);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        startAnimation();
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, startAnimation, delay]);

  return (
    <div
      ref={cardRef}
      className={`text-center transition-all duration-700 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 transition-all duration-300 hover:scale-110 hover:bg-blue-200">
        <Icon className="w-8 h-8 text-blue-600" />
      </div>

      <div className="text-5xl font-bold text-gray-900 mb-2">
        {count}{suffix}
      </div>

      <p className="text-gray-600 font-medium">{label}</p>
    </div>
  );
};

const SuccessMetrics = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef, 0.1);

  return (
    <section ref={sectionRef} className="py-24 bg-white-100">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Proven Results
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Numbers that speak to our commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {metrics.map((metric, index) => (
            <MetricCard
              key={index}
              icon={metric.icon}
              value={metric.value}
              suffix={metric.suffix}
              label={metric.label}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessMetrics;
