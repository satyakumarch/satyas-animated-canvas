
import { useEffect } from 'react';

const skills = [
  {
    category: 'Languages',
    items: ['JavaScript', 'C++', 'Java', 'SQL']
  },
  {
    category: 'Frameworks',
    items: ['NodeJS', 'Express', 'ReactJS', 'Tailwind']
  },
  {
    category: 'Databases',
    items: ['MongoDB', 'MySQL']
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'VS Code']
  },
  {
    category: 'CS Fundamentals',
    items: ['CN', 'DBMS', 'OS', 'DSA', 'OOPS']
  },
  {
    category: 'Soft Skills',
    items: ['Communication', 'Teamwork', 'Problem-solving']
  }
];

const SkillsSection = () => {
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
    <section id="skills" className="bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-heading reveal">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skillGroup, index) => (
            <div 
              key={index} 
              className="skill-card reveal animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h3 className="text-xl font-bold mb-4 gradient-text reveal animate-fade-in-down animate-delay-300">{skillGroup.category}</h3>
              
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, i) => (
                  <span 
                    key={i} 
                    className="bg-white/5 text-gray-200 px-3 py-1.5 rounded-full text-sm transition-all hover:bg-white/10 hover:-translate-y-1 reveal animate-scale-in"
                    style={{ animationDelay: `${(index * 150) + (i * 100)}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
