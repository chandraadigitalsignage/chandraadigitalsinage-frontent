import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useRef, useState } from 'react';
import { useScrollAnimation } from './hooks/useScrollAnimation';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef, 0.1);

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const subject = `New Contact Inquiry from ${form.name}`;
    
    const body = `
Name: ${form.name}
Email: ${form.email}
Company: ${form.company}

Message:
${form.message}
    `;

    const mailtoLink = `mailto:chandraadigitalsignage@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to transform your space? Let's discuss your digital signage needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div
            className={`transition-all duration-1000 transform ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
            }`}
          >
            <div className="space-y-8">
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-blue-600 group-hover:scale-110">
                  <Mail className="w-6 h-6 text-blue-600 transition-colors duration-300 group-hover:text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Email Us</h3>
                  <p className="text-gray-600">chandraadigitalsignage@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-blue-600 group-hover:scale-110">
                  <Phone className="w-6 h-6 text-blue-600 transition-colors duration-300 group-hover:text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Call Us</h3>
                  <p className="text-gray-600">+91 (958) 527-2027</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-blue-600 group-hover:scale-110">
                  <MapPin className="w-6 h-6 text-blue-600 transition-colors duration-300 group-hover:text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Visit Us</h3>
                  <p className="text-gray-600">Coimbatore,Tamilnadu.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why Choose SignageFlow?
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  24/7 Technical Support
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  Free Consultation & Demo
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  Custom Integration Solutions
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  Scalable Platform
                </li>
              </ul>
            </div>
          </div>

           {/* RIGHT SIDE: FORM */}
          <div className={`transition-all duration-1000 delay-200 transform ${isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"}`}>
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              
              {/* NAME */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 hover:border-blue-300 focus:border-blue-500 transition-all"
                  placeholder="John Doe"
                  required
                />
              </div>

              {/* EMAIL */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 hover:border-blue-300 focus:border-blue-500 transition-all"
                  placeholder="john@example.com"
                  required
                />
              </div>

              {/* COMPANY */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Company</label>
                <input
                  type="text"
                  value={form.company}
                  onChange={(e) => handleChange("company", e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 hover:border-blue-300 focus:border-blue-500 transition-all"
                  placeholder="Your Company"
                />
              </div>

              {/* MESSAGE */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 hover:border-blue-300 focus:border-blue-500 transition-all resize-none"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="group w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                <span className="flex items-center justify-center gap-2">
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"/>
                </span>
              </button>

            </form>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Contact;
