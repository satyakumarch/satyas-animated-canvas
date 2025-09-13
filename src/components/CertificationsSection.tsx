
import { Award } from 'lucide-react'; 
import { useEffect } from 'react';

const certificates = [
  {
    id: 1,
    title: 'Data Structures and Algorithms',
    issuer: 'NeoColab LPU',
    date: 'October 2023',
    description: 'Comprehensive course covering advanced algorithms and data structures including arrays, linked lists, trees, and graph algorithms.',
    image: '/dsa.png'
  },
  {
    id: 2,
    title: 'MERN Stack Development',
    issuer: 'Cipher School',
    date: 'March 2023',
    description: 'Intensive training in MongoDB, Express.js, React.js, and Node.js for building full-stack web applications.',
    image: '/certificate.png'
  },
  {
    id: 3,
    title: "Web Development",
    issuer: "InternElite",
    date: "February 2024",
    description: "Completed an internship in Web Development demonstrating commendable dedication, hard work, and exceptional intelligence while making significant contributions to the program.",
    image: '/intern.jpg'
  },
  {
    id: 4,
    title: "Cloud Computing",
    issuer: "NPTEL Online Certification (IIT Kharagpur)",
    date: "October 2024",
    description: "Successfully completed a 12-week course on Cloud Computing with a consolidated score of 53%, including online assignments (22.81/25) and proctored exam (30.47/75).",
    image: "/cloud.png"
  },
  {
    id: 5,
    title: "Build-a-thon 2.0 Hackathon",
    issuer: "Lovely Professional University & Board Infinity",
    date: "April 2025",
    description: "Participated in the Build-a-thon 2.0 Hackathon demonstrating innovation, team spirit, and commitment to solving real-world challenges through AI and Technology.",
    image: "/lovable-uploads/a2cd0106-008d-4346-8a5b-4b630c6150f0.png"
  },
 
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
        <h2 className="section-heading reveal">Certifications & Achievements</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <div 
              key={cert.id} 
              className="glass-card card-hover reveal animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Certificate Image */}
              {cert.image && (
                <div className="w-full h-70 overflow-hidden rounded-t-lg reveal animate-scale-in animate-delay-300">
                  <img 
                    src={cert.image} 
                    alt={`${cert.title} Certificate`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      if (e.currentTarget.parentElement) {
                        e.currentTarget.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-portfolio-darkblue/60');
                        const fallbackEl = document.createElement('div');
                        fallbackEl.className = 'flex items-center justify-center';
                        fallbackEl.innerHTML = `<Award size={36} className="text-portfolio-purple" />`;
                        e.currentTarget.parentElement.appendChild(fallbackEl);
                      }
                    }}
                  />
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center mb-4 reveal animate-fade-in-left animate-delay-500">
                  <div className="bg-portfolio-purple/20 p-2 rounded-lg mr-4 animate-bounce-in animate-delay-700">
                    <Award size={24} className="text-portfolio-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold reveal animate-fade-in-up animate-delay-500">{cert.title}</h3>
                    <p className="text-gray-400 reveal animate-fade-in-up animate-delay-700">{cert.issuer}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 reveal animate-fade-in-up animate-delay-900">{cert.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400 reveal animate-fade-in-right animate-delay-300">{cert.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
