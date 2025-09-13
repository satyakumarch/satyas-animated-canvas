
import { useEffect } from 'react';

const AboutSection = () => {
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
    <section id="about" className="relative">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-16 reveal">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="lg:order-1 order-2">
            <div className="relative reveal animate-fade-in-left">
              <div className="absolute inset-0 bg-gradient-to-r from-portfolio-blue to-portfolio-purple rounded-lg transform -translate-x-2 translate-y-2 -z-10"></div>
              <div className="glass-card p-8">
                <p className="text-xl font-medium mb-4 gradient-text reveal animate-fade-in-up animate-delay-300">
                  Who am I?
                </p>
                <p className="text-gray-300 mb-6 reveal animate-fade-in-up animate-delay-500">
                  I'm a Computer Science and Engineering student from Lovely Professional University in Punjab, India, with a passion for web development and problem solving. My journey in tech began with curiosity and has evolved into a deep love for creating innovative web solutions.
                </p>
                <p className="text-gray-300 mb-6 reveal animate-fade-in-up animate-delay-700">
                  With expertise in the MERN stack (MongoDB, Express, React, Node.js), I enjoy building full-stack applications that solve real-world problems. I'm constantly learning and exploring new technologies to enhance my skills.
                </p>
                <p className="text-gray-300 reveal animate-fade-in-up animate-delay-900">
                  When I'm not coding, you can find me exploring new tech trends, contributing to open-source projects, or enhancing my problem-solving skills through competitive programming.
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:order-2 order-1">
            <div className="grid grid-cols-2 gap-4 reveal animate-fade-in-right">
              <div className="glass-card p-6 text-center card-hover reveal animate-scale-in animate-delay-300">
                <h3 className="text-3xl font-bold gradient-text mb-2">2+</h3>
                <p className="text-gray-300">Years of Experience</p>
              </div>
              <div className="glass-card p-6 text-center card-hover reveal animate-scale-in animate-delay-500">
                <h3 className="text-3xl font-bold gradient-text mb-2">10+</h3>
                <p className="text-gray-300">Projects Completed</p>
              </div>
              <div className="glass-card p-6 text-center card-hover reveal animate-scale-in animate-delay-700">
                <h3 className="text-3xl font-bold gradient-text mb-2">5+</h3>
                <p className="text-gray-300">Technologies</p>
              </div>
              <div className="glass-card p-6 text-center card-hover reveal animate-scale-in animate-delay-900">
                <h3 className="text-3xl font-bold gradient-text mb-2">2+</h3>
                <p className="text-gray-300">Internships</p>
              </div>
            </div>
            
            <div className="mt-8 flex justify-center lg:justify-start reveal animate-bounce-in animate-delay-300">
              <a 
                href="#contact" 
                className="btn-primary"
              >
                Let's Connect
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
