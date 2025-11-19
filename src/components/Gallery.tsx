import { useRef } from 'react';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import { ExternalLink } from 'lucide-react';
import img1 from '../media/digital-signage-photos/digital-signage1.jpeg';
import img2 from '../media/digital-signage-photos/digital-signage2.jpeg';
import img3 from '../media/digital-signage-photos/digital-signage3.jpeg';
import img4 from '../media/digital-signage-photos/Digital-Signage4.jpg';
import img5 from '../media/digital-signage-photos/digital-signage5.jpeg';
import img6 from '../media/digital-signage-photos/Digital-Signage6.jpg';



const projects = [
  {
    title: 'Luxury Retail Chain',
    category: 'Retail',
    image: img1,
    description: 'Interactive product showcases across 50+ locations'
  },
  {
    title: 'Tech Campus',
    category: 'Corporate',
    image: img2,
    description: 'Integrated wayfinding and communication system'
  },
  {
    title: 'Shopping Complex',
    category: 'Commercial',
    image: img3,
    description: 'Dynamic directory and promotional displays'
  },
  {
    title: 'Medical Center',
    category: 'Healthcare',
    image: img4,
    description: 'Patient information and queue management'
  },
  {
    title: 'Airport Terminal',
    category: 'Transportation',
    image: img5,
    description: 'Flight information and advertising network'
  },
  {
    title: 'University Campus',
    category: 'Education',
    image: img6,
    description: 'Event schedules and emergency alerts'
  }
];

const OurWork = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef, 0.1);

  return (
    <section id="work" ref={sectionRef} className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Our Work
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Discover how we've transformed spaces with innovative digital signage
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-700 hover:shadow-2xl hover:scale-105 cursor-pointer ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

              <div className="absolute inset-0 flex flex-col justify-end p-6 transform transition-transform duration-300 group-hover:-translate-y-2">
                <span className="inline-block px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full mb-3 w-fit">
                  {project.category}
                </span>

                <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                  {project.title}
                  <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </h3>

                <p className="text-gray-200 text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork;
