
import { useState, useEffect } from 'react';
import ProjectModal, { ProjectType } from './ProjectModal';

const projects: ProjectType[] = [
  {
    id: 1,
    title: 'Food Hub Website',
    description: 'A comprehensive homestay booking platform that allows users to browse, book, and review homestay options in various locations.',
    image: 'food-hub.jpg',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    features: [
      'User authentication and profile management',
      'Advanced search and filtering options',
      'Secure payment processing',
      'Review and rating system',
      'Host dashboard for property management'
    ],
    githubLink: 'https://github.com/satyakumarchaudhary/food-hub',
    liveLink: 'https://food-hub.example.com'
  },
  {
    id: 2,
    title: 'E-Commerce Website',
    description: 'A feature-rich online shopping platform offering a seamless browsing and purchasing experience for users across various product categories.',
    image: 'e-commerce.jpg',
    technologies: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
    features: [
      'Responsive product catalog with filtering',
      'Shopping cart and wishlist functionality',
      'Secure checkout process',
      'Order tracking and history',
      'Admin dashboard for inventory management'
    ],
    githubLink: 'https://github.com/satyakumarchaudhary/e-commerce',
    liveLink: 'https://e-commerce.example.com'
  }
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

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

  const openModal = (project: ProjectType) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects">
      <div className="container mx-auto px-4">
        <h2 className="section-heading reveal">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="glass-card card-hover reveal"
              style={{ animationDelay: `${index * 200}ms` }}
              onClick={() => openModal(project)}
            >
              <div className="w-full h-48 bg-portfolio-darkblue rounded-t-xl flex items-center justify-center cursor-pointer">
                <span className="gradient-text text-xl font-bold">{project.title}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span 
                      key={i} 
                      className="bg-portfolio-blue/10 text-portfolio-lightblue px-2.5 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="bg-portfolio-purple/10 text-portfolio-lightblue px-2.5 py-1 rounded-full text-xs">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal(project);
                  }}
                  className="btn-primary w-full"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
};

export default ProjectsSection;
