import SectionTitle from './SectionTitle';
import { personalInfo, education, coursework } from '../data/portfolioData.jsx';
import { FaUniversity, FaSchool, FaExternalLinkAlt } from 'react-icons/fa';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle id="about-title">About Me</SectionTitle>

        <motion.div
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-text-secondary leading-relaxed">
            Hello! I'm Towsif. {personalInfo.bio}
          </p>
        </motion.div>

        <h3 className="text-2xl font-semibold text-center text-accent-1 mb-8 font-mono">Education</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              className="bg-primary-bg p-6 rounded-lg shadow-xl hover:shadow-accent-1/20 transition-shadow duration-300"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={index}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="flex items-center mb-3">
                {edu.isUniversity ? (
                  <FaUniversity className="text-accent-1 mr-3 text-2xl shrink-0" />
                ) : (
                  <FaSchool className="text-accent-1 mr-3 text-2xl shrink-0" />
                )}
                <h4 className="text-xl font-semibold text-text-primary">{edu.institution}</h4>
              </div>
              {edu.affiliation && (
                <p className="text-sm text-text-secondary font-mono mb-1">
                  {edu.affiliation}{edu.location ? ` · ${edu.location}` : ''}
                </p>
              )}
              <p className="text-text-secondary font-medium">{edu.degree}</p>
              <p className="text-sm text-text-secondary font-mono">{edu.duration}</p>
              <p className="text-sm text-accent-1 font-mono mt-1">{edu.score}</p>
            </motion.div>
          ))}
        </div>

        <h3 className="text-2xl font-semibold text-center text-accent-1 mt-16 mb-8 font-mono">
          Courses & Activities
        </h3>
        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4">
          {coursework.map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-primary-bg p-4 rounded-lg shadow-md flex items-start justify-between gap-3"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={index}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div>
                <p className="text-text-primary text-sm font-semibold">{item.title}</p>
                <p className="text-xs text-text-secondary font-mono mt-1">{item.provider}</p>
              </div>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent-1 transition-colors mt-1"
                  aria-label={`View certificate: ${item.title}`}
                >
                  <FaExternalLinkAlt size={14} />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
