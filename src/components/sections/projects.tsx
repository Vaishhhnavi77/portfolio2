import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '../ui/button';
import { Description } from '@radix-ui/react-toast';

const projects = [
  {
    title: "Atharva Computer Institution Website",
    description: "A professional website for Atharva Computer Institute with real tuition users. Built with modern web technologies for optimal user experience.",
    tech: ["React.js", "Tailwind CSS", "JavaScript", "Responsive Design"],
    liveUrl: "https://atharvacomputerinstituteofficial.netlify.app/",
    githubUrl: "https://github.com/Vaishhhnavi77/atharva-web",
    featured: true,
    category: "Freelance"
  },
  {
    title: "Resume Builder",
    description: "An intuitive resume builder application that helps users create professional resumes with modern templates and easy customization.",
    tech: ["React.js", "CSS3", "JavaScript", "Local Storage"],
    liveUrl: "https://resube.netlify.app",
    githubUrl: "https://github.com/Vaishhhnavi77/resume-builder",
    featured: true,
    category: "Web App"
  },
  {
    title: "FitLoop - Gym Website",
    description: "A modern fitness website showcasing gym services, trainers, and membership plans with responsive design and smooth animations.",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    liveUrl: "https://fitloops.netlify.app",
    githubUrl: "https://github.com/Vaishhhnavi77/FitLoop",
    featured: false,
    category: "Landing Page"
  },
  {
    title: "Reservoir - Life Management App",
    description: "A comprehensive life management application to help users organize tasks, set goals, and track personal growth efficiently.",
    tech: ["React.js", "Tailwind CSS", "JavaScript", "State Management"],
    liveUrl: "https://reservoire.netlify.app",
    githubUrl: "https://github.com/Vaishhhnavi77/reservoir_1",
    featured: true,
    category: "Web App"
  },
  {
    title: "Legal Lense-Professional Legal Document Analysis",
    description:"Sophisticated AI-powered analysis for contracts, agreements, and legal documents with institutional-grade insights.",
    tech:["React.js", "Tailwind CSS", "JavaScript", "State Management"],
    liveUrl: "https://legallense.netlify.app/",
    githubUrl :"https://github.com/Mind-Matrix-007/legal_lense?tab=readme-ov-file",
    featured : true ,
    category : "Web App"
  }
];

export const ProjectsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            My Recent <span className="gradient-text">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Here are a few projects I've worked on recently. Each project represents 
            my commitment to creating meaningful digital experiences.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className={`card-gradient rounded-lg overflow-hidden glow-effect group ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="p-6 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-xs font-semibold text-primary bg-primary/20 px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="ml-2 text-xs font-semibold text-accent bg-accent/20 px-2 py-1 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github size={16} />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink size={16} />
                    </Button>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-4 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-3 border-primary text-primary hover:bg-primary hover:text-primary-foreground glow-effect"
            onClick={() => window.open('https://github.com/Vaishhhnavi77', '_blank')}
          >
            <Github size={20} className="mr-2" />
            View More on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );

};

