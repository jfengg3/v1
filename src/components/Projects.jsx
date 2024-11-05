import { PROJECTS } from "../constants"

import {motion} from "framer-motion"

import { useWindowSize } from "../lib/windowSize";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Projects = () => {
    
    const { width } = useWindowSize();
    const isLargeScreen = width >= 1024;

  return (
    <section id="projects">
    <div className=" pb-4 lg:pb-20 ">
        <div className="lg:m-4">
            <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}}
            transition={{duration: 1.5}} viewport={{once: true}} className="mt-20 font-medium text-2xl lg:hidden">Projects</motion.h2>
            
            {isLargeScreen ? (
                PROJECTS.map((project, index) => (
                    <a href={project.link} rel="noopener noreferrer" target="_blank">
                        <div key={index} className="lg:rounded-xl lg:transition lg:duration-100 lg:-m-4 lg:p-4 lg:hover:bg-slate-500 lg:hover:bg-opacity-5 lg:mt-10 mt-5 mb-8 flex lg:flex-nowrap lg:justify-center group">
                            <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}}
                            transition={{duration: 1}} viewport={{once: true}} className="lg:w-1/4 mb-4 lg:mb-0 lg:mr-3 mr-3">
                                <img src={project.image}
                                width={250} height={250} alt={project.title}
                                className="mb-6 rounded group-hover:shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                            </motion.div>
                            <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}}
                            transition={{duration: 1}} viewport={{once: true}} className="w-full max-w-xl lg:w-3/4">
                                <h3 className="mb-2 font-semibold text-lg group-hover:text-indigo-300">{project.title}</h3>
                                <p className="mb-4 text-stone-400 text-base">{project.description}</p>
                                <div className="flex flex-wrap gap-y-2">
                                    {project.technologies.map((tech, index) => 
                                        <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300" key={index}>
                                            {tech}
                                        </span>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    </a>
                 ))
            ):(
                PROJECTS.map((project, index) => (
                    <div key={index} className=" mt-5 mb-8 flex">
                        <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}}
                        transition={{duration: 1}} viewport={{once: true}} className="lg:w-1/4 mb-4 lg:mb-0 lg:mr-3 mr-3">
                            <img src={project.image}
                            width={250} height={250} alt={project.title}
                            className="mb-6 rounded" />
                        </motion.div>
                        <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}}
                        transition={{duration: 1}} viewport={{once: true}} className="w-full max-w-xl lg:w-3/4">
                            <a href={project.link}><h3 className="mb-2 font-semibold text-lg hover:text-indigo-300">{project.title}</h3></a>
                            <p className="mb-4 text-stone-400 text-base">{project.description}</p>
                            <div className="flex flex-wrap gap-y-2">
                                {project.technologies.map((tech, index) => 
                                    <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300" key={index}>
                                        {tech}
                                    </span>
                                )}
                            </div>
                        </motion.div>
                    </div>
                 ))
            )}

            <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}}
                transition={{duration: 1}} viewport={{once: true}} className="w-full max-w-xl lg:w-3/4 mt-10">
                    <Link to="/archive" rel="noopener noreferrer" className="hover:text-indigo-300 inline-flex items-center group">
                        <h3 className="mb-2 font-semibold text-base">View Project Archives</h3>
                        <FaLongArrowAltRight className="ml-2 mb-1 transform group-hover:translate-x-2 transition duration-200"/>
                    </Link>
            </motion.div>

        </div>
    </div>
    </section>
  )
}

export default Projects