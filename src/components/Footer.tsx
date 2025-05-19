
import { Heart, Mail, Phone, Linkedin, GitHub, Twitter } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
  return (
    <footer className="bg-secondary/70 py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <a href="#home" className="text-2xl font-bold gradient-text">
              Satya<span className="text-portfolio-purple">.</span>
            </a>
            <p className="text-gray-300 mt-2">
              Passionate web developer creating exceptional digital experiences with modern technologies.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://linkedin.com" 
                className="bg-white/10 p-2 rounded-full hover:bg-portfolio-purple/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="text-gray-300" />
              </a>
              <a 
                href="https://github.com" 
                className="bg-white/10 p-2 rounded-full hover:bg-portfolio-purple/20 transition-colors"
                aria-label="GitHub"
              >
                <GitHub size={18} className="text-gray-300" />
              </a>
              <a 
                href="https://twitter.com" 
                className="bg-white/10 p-2 rounded-full hover:bg-portfolio-purple/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} className="text-gray-300" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#experience" className="text-gray-300 hover:text-white transition-colors">Experience</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Information</h3>
            <div className="space-y-3">
              <a 
                href="mailto:satyakumarchaudhary603@gmail.com" 
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Mail size={16} />
                <span>satyakumarchaudhary603@gmail.com</span>
              </a>
              <a 
                href="tel:+918934856824" 
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Phone size={16} />
                <span>+91 8934856824</span>
              </a>
              <div className="pt-2">
                <Button variant="outline" className="border-portfolio-purple hover:bg-portfolio-purple/20">
                  <a href="#contact">Get In Touch</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom Section */}
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
