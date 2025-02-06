import { motion } from "framer-motion";
import { PROJECTS } from "../constants";

const Projects = () => {
  const projectVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -40,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        bounce: 0.4,
      },
    },
  };

  return (
    <section className="px-6 py-10" id="work">
      <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
        Work
      </h1>
      <div className="h-1 w-20 mb-8 bg-white" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={`project-${index}`}
            className="relative rounded-lg overflow-hidden h-[500px] transition transform"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={projectVariants}
          >
            <img
              src={project.image}
              alt={project.name}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-black/50 flex items-end p-6">
              <div className="relative z-20 bg-black/60 p-4 rounded-lg text-white w-full">
                <h2 className="text-2xl font-semibold mb-2">{project.name}</h2>
                <p className="text-lg mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-stone-900 rounded-full py-2 px-4 w-32 text-sm hover:bg-gray-100 text-center block"
                >
                  View Project
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
