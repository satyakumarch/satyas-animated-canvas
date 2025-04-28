
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary/70 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a
              href="#home"
              className="text-xl font-bold gradient-text"
            >
              Satya<span className="text-portfolio-purple">.</span>
            </a>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <a 
              href="mailto:satyakumarchaudhary7@gmail.com" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              satyakumarchaudhary603@gmail.com
            </a>
            <a 
              href="tel:+9779801234567" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              +91 8934856824
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Satya Kumar Chaudhary. All rights reserved.
          </p>
          
          <p className="text-gray-400 text-sm mt-3 md:mt-0 flex items-center">
            Made with <Heart size={14} className="mx-1 text-portfolio-purple" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
