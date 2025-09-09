import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '../ui/button';

export const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/Vaishhhnavi77',
      label: 'GitHub'
    },
    { 
      icon: Linkedin, 
      href: 'https://linkedin.com/in/vaishnavi-nakhate',
      label: 'LinkedIn'
    },
    { 
      icon: Mail, 
      href: 'mailto:vaishnavinakhate.here@gmail.com',
      label: 'Email'
    }
  ];

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen hero-bg flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="text-lg md:text-xl text-muted-foreground mb-4 block">
              Hi There! 👋 I'm
            </span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="gradient-text">VAISHNAVI NAKHATE</span>
          </motion.h1>

          <motion.h2 
            variants={itemVariants}
            className="text-2xl md:text-4xl font-semibold mb-8"
          >
            <span className="text-foreground">Frontend</span>{' '}
            <span className="gradient-text">Developer</span>
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Self-taught developer passionate about building real-world products. 
            I craft beautiful, responsive web experiences that make a difference.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button 
              size="lg"
              className="glow-effect px-8 py-6 text-lg font-semibold"
              onClick={scrollToProjects}
            >
              View My Work
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-6 text-lg font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => window.open('mailto:vaishnavinakhate.here@gmail.com')}
            >
              Get In Touch
            </Button>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex justify-center space-x-6 mb-16"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-primary transition-all duration-300 glow-effect group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <social.icon 
                  size={24} 
                  className="text-muted-foreground group-hover:text-primary transition-colors duration-300" 
                />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="animate-float"
          >
            <button
              onClick={scrollToProjects}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <ArrowDown size={32} className="mx-auto" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </section>
  );
};