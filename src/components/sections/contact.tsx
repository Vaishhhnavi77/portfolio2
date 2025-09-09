import { motion } from 'framer-motion';
import { Mail, Phone, Github, MapPin, Send, MessageCircle } from 'lucide-react';
import { Button } from '../ui/button';

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 99753 65478",
    href: "tel:+919975365478",
    color: "text-green-400"
  },
  {
    icon: Mail,
    label: "Email",
    value: "vaishnavinakhate.here@gmail.com",
    href: "mailto:vaishnavinakhate.here@gmail.com",
    color: "text-blue-400"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Vaishhhnavi77",
    href: "https://github.com/Vaishhhnavi77",
    color: "text-purple-400"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India",
    href: "#",
    color: "text-red-400"
  }
];

export const ContactSection = () => {
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
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about web development. Let's connect!
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">Let's Talk</h3>
              <p className="text-muted-foreground leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. I'm currently available for freelance projects and 
                full-time opportunities.
              </p>
            </motion.div>

            {contactInfo.map((contact, index) => (
              <motion.div
                key={contact.label}
                variants={itemVariants}
                className="flex items-center space-x-4 p-4 card-gradient rounded-lg glow-effect group hover:scale-105 transition-transform duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                    <contact.icon size={24} className={`${contact.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                </div>
                <div className="flex-grow">
                  <h4 className="text-sm font-medium text-muted-foreground">{contact.label}</h4>
                  {contact.href !== "#" ? (
                    <a
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-foreground hover:text-primary transition-colors duration-300 text-sm md:text-base break-all"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <span className="text-foreground text-sm md:text-base">{contact.value}</span>
                  )}
                </div>
              </motion.div>
            ))}

            <motion.div variants={itemVariants} className="pt-6">
              <h4 className="text-lg font-semibold mb-4">Preferred Contact</h4>
              <p className="text-sm text-muted-foreground mb-4">
                For quick responses, email is usually the best way to reach me. 
                I typically respond within 24 hours during weekdays.
              </p>
              <div className="flex space-x-3">
                <Button
                  className="glow-effect"
                  onClick={() => window.open('mailto:vaishnavinakhate.here@gmail.com')}
                >
                  <Mail size={16} className="mr-2" />
                  Send Email
                </Button>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open('https://github.com/Vaishhhnavi77', '_blank')}
                >
                  <Github size={16} className="mr-2" />
                  GitHub
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Quick Message Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="card-gradient p-8 rounded-lg relative overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <MessageCircle size={28} className="mr-3 text-primary" />
                Quick Message
              </h3>
              
              <div className="space-y-6">
                <p className="text-muted-foreground">
                  Want to start a conversation? Choose one of these quick options:
                </p>

                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start border-primary/50 hover:border-primary hover:bg-primary/10"
                    onClick={() => window.open('mailto:vaishnavinakhate.here@gmail.com?subject=Project Collaboration Inquiry')}
                  >
                    <Send size={16} className="mr-3" />
                    Discuss a Project
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="w-full justify-start border-accent/50 hover:border-accent hover:bg-accent/10"
                    onClick={() => window.open('mailto:vaishnavinakhate.here@gmail.com?subject=Job Opportunity')}
                  >
                    <Send size={16} className="mr-3" />
                    Job Opportunity
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="w-full justify-start border-secondary hover:border-secondary hover:bg-secondary/10"
                    onClick={() => window.open('mailto:vaishnavinakhate.here@gmail.com?subject=General Inquiry')}
                  >
                    <Send size={16} className="mr-3" />
                    General Question
                  </Button>
                </div>

                <div className="pt-6 border-t border-border">
                  <h4 className="font-semibold mb-3">Available For:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      Freelance Projects
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      Full-time Opportunities
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      Open Source Collaboration
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                      Mentorship & Guidance
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};