import { useEffect, useRef } from 'react';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const ProjectModal = ({ project, onClose }) => {
    const closeRef = useRef(null);

    useEffect(() => {
        const onKey = (e) => e.key === 'Escape' && onClose();
        document.addEventListener('keydown', onKey);
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden'; // lock page scroll while open
        closeRef.current?.focus();
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = previousOverflow;
        };
    }, [onClose]);

    const { links = {} } = project;
    const linkClass =
        'inline-flex items-center gap-2 px-4 py-2 rounded-md border-2 border-accent-1 text-accent-1 font-mono text-sm hover:bg-accent-1 hover:text-primary-bg transition-colors';

    return (
        <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                role="dialog"
                aria-modal="true"
                aria-labelledby="project-modal-title"
                className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto bg-secondary-bg rounded-lg shadow-2xl border border-accent-1/20"
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.97 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    ref={closeRef}
                    onClick={onClose}
                    aria-label="Close project details"
                    className="absolute top-4 right-4 p-2 text-text-secondary hover:text-accent-1 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-1 rounded"
                >
                    <FaTimes size={20} />
                </button>

                <div className="p-6 sm:p-8">
                    <div className="flex items-start gap-3 pr-10">
                        {project.icon && <div className="mt-1">{project.icon}</div>}
                        <div>
                            <h3 id="project-modal-title" className="text-2xl sm:text-3xl font-bold text-accent-1 font-mono">
                                {project.title}
                            </h3>
                            {project.subtitle && <p className="text-text-primary mt-1">{project.subtitle}</p>}
                            <p className="text-xs text-text-secondary font-mono mt-2">
                                {[project.date, project.category].filter(Boolean).join(' | ')}
                            </p>
                        </div>
                    </div>

                    <p className="text-text-secondary leading-relaxed mt-6">{project.overview}</p>

                    <h4 className="text-lg font-semibold text-accent-2 font-mono mt-8 mb-3">What I built</h4>
                    <ul className="space-y-2">
                        {project.highlights.map((point, i) => (
                            <li key={i} className="flex gap-3 text-text-secondary leading-relaxed">
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-1" aria-hidden="true" />
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>

                    <h4 className="text-lg font-semibold text-accent-2 font-mono mt-8 mb-3">Tech stack</h4>
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((t, i) => (
                            <span key={i} className="text-xs bg-primary-bg text-accent-1 px-3 py-1 rounded-full font-mono">
                                {t}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-3 mt-8 pt-6 border-t border-primary-bg">
                        {links.live && (
                            <a href={links.live} target="_blank" rel="noopener noreferrer" className={linkClass}>
                                <FaExternalLinkAlt size={14} /> Live demo
                            </a>
                        )}
                        {links.client && (
                            <a href={links.client} target="_blank" rel="noopener noreferrer" className={linkClass}>
                                <FaGithub size={16} /> {links.server ? 'Client code' : 'Code'}
                            </a>
                        )}
                        {links.server && (
                            <a href={links.server} target="_blank" rel="noopener noreferrer" className={linkClass}>
                                <FaGithub size={16} /> Server code
                            </a>
                        )}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ProjectModal;
