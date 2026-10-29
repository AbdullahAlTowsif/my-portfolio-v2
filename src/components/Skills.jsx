import SectionTitle from './SectionTitle';
import { skills } from '../data/portfolioData.jsx';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const skillCategoryVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { staggerChildren: 0.1, duration: 0.5 },
  },
};

const skillItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const SkillCard = ({ name, icon }) => (
  <motion.div
    variants={skillItemVariants}
    className="flex flex-col items-center text-center p-4 bg-secondary-bg rounded-lg shadow-md hover:shadow-accent-1/10 transition-shadow duration-300"
    whileHover={{ y: -5 }}
  >
    <div className="text-accent-1 text-3xl mb-2">{icon}</div>
    <span className="text-text-primary text-sm font-mono">{name}</span>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-primary-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle id="skills-title">My Tech Arsenal</SectionTitle>

        <div className="space-y-12">
          {skills.map((category) => (
            <motion.div
              key={category.title}
              variants={skillCategoryVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-accent-2 mb-6 font-mono text-center sm:text-left">
                {category.title}
              </h3>

              {category.type === 'chips' ? (
                <div className="flex flex-wrap justify-center sm:justify-start gap-3">
                  {category.items.map((item) => (
                    <motion.span
                      key={item}
                      variants={skillItemVariants}
                      className="bg-secondary-bg text-text-secondary py-2 px-4 rounded-full text-sm font-mono shadow-sm"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {category.items.map((skill) => (
                    <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
