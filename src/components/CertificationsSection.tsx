
import { Award } from 'lucide-react';
import { useEffect } from 'react';

const certificates = [
  {
    id: 1,
    title: 'Data Structures and Algorithms',
    issuer: 'NeoColab LPU',
    date: 'October 2023',
    description: 'Comprehensive course covering advanced algorithms and data structures including arrays, linked lists, trees, and graph algorithms.'
  },
  {
    id: 2,
    title: 'MERN Stack Development',
    issuer: 'Cipher School',
    date: 'March 2023',
    description: 'Intensive training in MongoDB, Express.js, React.js, and Node.js for building full-stack web applications.'
  }
];

const CertificationsSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="certifications" className="bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="section-heading reveal">Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <div 
              key={cert.id} 
              className="glass-card p-6 card-hover reveal"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-portfolio-purple/20 p-2 rounded-lg mr-4">
                  <Award size={24} className="text-portfolio-purple" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{cert.title}</h3>
                  <p className="text-gray-400">{cert.issuer}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">{cert.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">{cert.date}</span>
                <a href="#" className="text-portfolio-purple hover:text-portfolio-blue transition-colors">
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
