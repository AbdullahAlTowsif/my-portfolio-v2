import { useState } from 'react';
import SectionTitle from './SectionTitle';
import ProjectModal from './ProjectModal';
import { projects } from '../data/portfolioData.jsx';
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
};

const MAX_TECH_ON_CARD = 6;

const ProjectCard = ({ project, index, onOpen }) => {
  const { links = {} } = project;
  const extra = project.tech.length - MAX_TECH_ON_CARD;
  const iconLink =
    'text-text-secondary hover:text-accent-1 transition-colors flex items-center';

  return (
    <motion.div
      className="bg-secondary-bg rounded-lg shadow-xl overflow-hidden flex flex-col group transform hover:-translate-y-2 transition-all duration-300"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      custom={index}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl sm:text-2xl font-semibold text-accent-1 font-mono">{project.title}</h3>
          {project.icon && <div className="text-accent-1">{project.icon}</div>}
        </div>
        {project.subtitle && <p className="text-sm text-text-primary mb-1">{project.subtitle}</p>}
        <p className="text-xs text-text-secondary font-mono mb-3">
          {[project.date, project.category].filter(Boolean).join(' | ')}
        </p>
        <p className="text-sm text-text-secondary mb-4 flex-grow leading-relaxed">{project.summary}</p>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-text-primary mb-1 font-mono">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, MAX_TECH_ON_CARD).map((tech, i) => (
              <span key={i} className="text-xs bg-primary-bg text-accent-1 px-2 py-1 rounded-full font-mono">
                {tech}
              </span>
            ))}
            {extra > 0 && (
              <span className="text-xs text-text-secondary px-2 py-1 font-mono">+{extra} more</span>
            )}
          </div>
        </div>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-5 border-t border-primary-bg">
          <button
            onClick={() => onOpen(project)}
            className="flex items-center px-3 py-1.5 rounded border-2 border-accent-1 text-accent-1 font-mono text-sm hover:bg-accent-1 hover:text-primary-bg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-1"
            aria-label={`See details of ${project.title}`}
          >
            <FaInfoCircle className="mr-2" /> See Details
          </button>
          <div className="flex items-center gap-4">
            {links.client && (
              <a href={links.client} target="_blank" rel="noopener noreferrer" className={iconLink} aria-label={`GitHub repository for ${project.title}`}>
                <FaGithub size={20} className="mr-1" /> <span className="font-mono text-sm">Code</span>
              </a>
            )}
            {links.live && (
              <a href={links.live} target="_blank" rel="noopener noreferrer" className={iconLink} aria-label={`Live demo of ${project.title}`}>
                <FaExternalLinkAlt size={18} className="mr-1" /> <span className="font-mono text-sm">Live</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="py-20 bg-primary-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle id="projects-title">My Creations</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} onOpen={setSelected} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
