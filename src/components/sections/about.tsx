import { motion } from 'framer-motion';
import { Code, Heart, Rocket } from 'lucide-react';

export const AboutSection = () => {
  const features = [
    {
      icon: Code,
      title: "Self-Taught",
      description: "Passionate about learning and mastering modern web technologies through hands-on projects."
    },
    {
      icon: Heart,
      title: "Problem Solver",
      description: "I love turning complex problems into simple, beautiful solutions that users enjoy."
    },
    {
      icon: Rocket,
      title: "Growth Minded",
      description: "Continuously improving skills through open-source contributions and real-world projects."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let Me <span className="gradient-text">Introduce</span> Myself
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I fell in love with programming and I have at least learnt something, 
              I think... 🤷‍♀️
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am fluent in classics like{' '}
              <span className="text-primary font-semibold">HTML, CSS, JavaScript</span>{' '}
              and have expertise in modern frameworks like{' '}
              <span className="text-primary font-semibold">React.js</span> and{' '}
              <span className="text-primary font-semibold">Tailwind CSS</span>.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              As a self-driven frontend developer, I'm passionate about creating 
              real-world products that solve actual problems. Currently working on 
              open-source projects and freelancing to expand my expertise.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Whenever possible, I also apply my passion for developing products with{' '}
              <span className="text-primary font-semibold">Modern JavaScript Libraries</span>{' '}
              and frameworks like{' '}
              <span className="text-primary font-semibold">React.js</span>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-gradient p-6 rounded-lg glow-effect"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <feature.icon size={24} className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};