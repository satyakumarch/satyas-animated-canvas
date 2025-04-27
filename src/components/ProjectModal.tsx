
import { X } from 'lucide-react';

export type ProjectType = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  githubLink?: string;
  liveLink?: string;
};

type ProjectModalProps = {
  project: ProjectType | null;
  onClose: () => void;
};

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="relative bg-card rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto animate-scale-in">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>
        
        <div className="p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-4">{project.title}</h2>
          
          <div className="w-full h-56 md:h-72 bg-gray-700 rounded-lg mb-6 overflow-hidden">
            <div className="w-full h-full flex items-center justify-center bg-portfolio-darkblue/60">
              <span className="gradient-text text-xl font-bold">{project.title}</span>
            </div>
          </div>
          
          <p className="text-gray-300 mb-6">{project.description}</p>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Key Features</h3>
            <ul className="list-disc list-inside text-gray-300">
              {project.features.map((feature, index) => (
                <li key={index} className="mb-2">{feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="bg-portfolio-purple/20 text-portfolio-lightblue px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            {project.githubLink && (
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-secondary flex-1 text-center"
              >
                View Code
              </a>
            )}
            {project.liveLink && (
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary flex-1 text-center"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
