import { Heart, Mail, Phone, Linkedin, Github, Twitter } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
  return (
    <footer className="bg-secondary/70 py-12 border-t border-white/10 reveal animate-fade-in-up">
      <div className="container mx-auto px-4">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4 reveal animate-fade-in-left">
            <a href="#home" className="text-2xl font-bold gradient-text animate-bounce-in animate-delay-300">
              Satya<span className="text-portfolio-purple">.</span>
            </a>
            <p className="text-gray-300 mt-2 reveal animate-fade-in-up animate-delay-500">
              Passionate web developer creating exceptional digital experiences with modern technologies.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://www.linkedin.com/in/satyakumar12/" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-portfolio-purple/20 transition-colors reveal animate-scale-in animate-delay-700"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="text-gray-300" />
              </a>
              <a 
                href="https://github.com/satyakumarch" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-portfolio-purple/20 transition-colors reveal animate-scale-in animate-delay-900"
                aria-label="GitHub"
              >
                <Github size={18} className="text-gray-300" />
              </a>
              <a 
                href="mailto:satyakumarchaudhary603@gmail.com"
                className="bg-white/10 p-2 rounded-full hover:bg-portfolio-purple/20 transition-colors reveal animate-scale-in"
                style={{ animationDelay: '1100ms' }}
                aria-label="Email"
              >
                <Mail size={18} className="text-gray-300" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4 reveal animate-fade-in-up animate-delay-300">
            <h3 className="text-lg font-semibold reveal animate-fade-in-down animate-delay-500">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About', href: '#about' },
                { name: 'Experience', href: '#experience' },
                { name: 'Projects', href: '#projects' },
                { name: 'Skills', href: '#skills' }
              ].map((link, index) => (
                <li key={link.name} className="reveal animate-fade-in-right" style={{ animationDelay: `${700 + (index * 100)}ms` }}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-4 reveal animate-fade-in-right animate-delay-500">
            <h3 className="text-lg font-semibold reveal animate-fade-in-down animate-delay-700">Contact Information</h3>
            <div className="space-y-3">
              <a 
                href="mailto:satyakumarchaudhary603@gmail.com" 
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors reveal animate-fade-in-left animate-delay-900"
              >
                <Mail size={16} />
                <span>satyakumarchaudhary603@gmail.com</span>
              </a>
              <a 
                href="tel:+918934856824" 
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors reveal animate-fade-in-left"
                style={{ animationDelay: '1100ms' }}
              >
                <Phone size={16} />
                <span>+91 8934856824</span>
              </a>
              <div className="pt-2 reveal animate-bounce-in" style={{ animationDelay: '1300ms' }}>
                <Button variant="outline" className="border-portfolio-purple hover:bg-portfolio-purple/20">
                  <a href="#contact">Get In Touch</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom Section */}
        <div className="border-t border-white/10 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center reveal animate-fade-in animate-delay-500">
          <p className="text-gray-400 text-sm reveal animate-fade-in-left animate-delay-700">
            &copy; {new Date().getFullYear()} Satya Kumar Chaudhary. All rights reserved.
          </p>
          
          <p className="text-gray-400 text-sm mt-3 md:mt-0 flex items-center reveal animate-fade-in-right animate-delay-900">
            Made with <Heart size={14} className="mx-1 text-portfolio-purple animate-pulse" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
