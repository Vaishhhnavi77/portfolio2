import { motion } from 'framer-motion';

const skills = [
  {
    name: "HTML5",
    level: 95,
    category: "Frontend"
  },
  {
    name: "CSS3",
    level: 90,
    category: "Frontend"
  },
  {
    name: "JavaScript",
    level: 85,
    category: "Programming"
  },
  {
    name: "React.js",
    level: 88,
    category: "Framework"
  },
  {
    name: "Tailwind CSS",
    level: 92,
    category: "Styling"
  },
  {
    name: "Git",
    level: 80,
    category: "Version Control"
  },
  {
    name: "GitHub",
    level: 85,
    category: "Platform"
  },
  {
    name: "Netlify",
    level: 75,
    category: "Deployment"
  },
  {
    name: "Vercel",
    level: 78,
    category: "Deployment"
  }
];

const categories = [
  { name: "Frontend", color: "hsl(262 83% 58%)" },
  { name: "Programming", color: "hsl(310 100% 69%)" },
  { name: "Framework", color: "hsl(280 100% 70%)" },
  { name: "Styling", color: "hsl(240 100% 70%)" },
  { name: "Version Control", color: "hsl(200 100% 70%)" },
  { name: "Platform", color: "hsl(160 100% 60%)" },
  { name: "Deployment", color: "hsl(120 100% 60%)" }
];

export const SkillsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  const getColorForCategory = (category: string) => {
    const categoryColor = categories.find(c => c.name === category);
    return categoryColor?.color || "hsl(262 83% 58%)";
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Skillset</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skills List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-8">Technical Skills</h3>
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-foreground">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <motion.div
                    className="h-2 rounded-full relative overflow-hidden"
                    style={{ backgroundColor: getColorForCategory(skill.category) }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20"></div>
                  </motion.div>
                </div>
                <span className="text-xs text-muted-foreground">{skill.category}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Categories Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-8">Skill Categories</h3>
            <div className="grid grid-cols-2 gap-4">
              {categories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card-gradient p-4 rounded-lg text-center glow-effect group hover:scale-105 transition-transform duration-300"
                >
                  <div
                    className="w-8 h-8 rounded-full mx-auto mb-3"
                    style={{ backgroundColor: category.color }}
                  ></div>
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {category.name}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    {skills.filter(s => s.category === category.name).length} skills
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="card-gradient p-6 rounded-lg mt-8"
            >
              <h4 className="text-lg font-semibold mb-3 text-foreground">Always Learning</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I'm constantly expanding my skillset and staying up-to-date with the latest 
                technologies in web development. Currently exploring advanced React patterns, 
                TypeScript, and modern deployment strategies.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};