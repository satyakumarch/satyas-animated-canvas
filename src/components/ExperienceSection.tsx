
import { Briefcase } from 'lucide-react';
import { useEffect } from 'react';

const experiences = [
  {
    title: 'Web Development Intern',
    company: 'Intern Elite',
    period: 'Dec 2023 - Feb 2024',
    description: [
      'Developed responsive web applications using the MERN stack',
      'Collaborated with senior developers to implement new features',
      'Optimized application performance and fixed UI/UX issues',
      'Participated in code reviews and team meetings'
    ]
  },
  {
    title: 'On-the-job Training (OJT) Intern',
    company: 'Nepal Telecom',
    period: 'Sept 2021 - Mar 2022',
    description: [
      'Assisted in the maintenance of telecommunication network systems',
      'Learned about network protocols and infrastructure',
      'Helped with technical documentation and reporting',
      'Gained hands-on experience with telecom equipment'
    ]
  }
];

const ExperienceSection = () => {
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
    <section id="experience" className="bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="section-heading reveal">Experience & Internships</h2>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`timeline-item reveal ${index % 2 === 0 ? 'animate-fade-in-left' : 'animate-fade-in-right'}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="timeline-dot flex items-center justify-center">
                <Briefcase size={12} className="text-white" />
              </div>
              
              <div className="glass-card p-6 mb-8 ml-4 card-hover">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <h3 className="text-xl font-bold gradient-text">{exp.title}</h3>
                  <span className="text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                
                <h4 className="text-gray-200 font-semibold mb-4">{exp.company}</h4>
                
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="pl-2">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
