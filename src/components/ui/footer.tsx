import { motion } from 'framer-motion';
import { Heart, Github, Mail, ArrowUp } from 'lucide-react';
import { Button } from './button';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-2">VN.</h3>
            <p className="text-sm text-muted-foreground">
              Frontend Developer passionate about creating beautiful web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex justify-center space-x-6">
              <a
                href="mailto:vaishnavinakhate.here@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://github.com/Vaishhhnavi77"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Back to Top */}
          <div className="text-center md:text-right">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="glow-effect"
            >
              <ArrowUp size={20} />
            </Button>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center">
            Made with <Heart size={16} className="text-red-400 mx-2 animate-pulse" /> by{' '}
            <span className="gradient-text font-semibold ml-1">Vaishnavi Nakhate</span>
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};