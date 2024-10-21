import { EXPERIENCES } from "../constants"

import {motion} from "framer-motion"
import { useWindowSize } from "../lib/windowSize";

const Work = () => {

    const { width } = useWindowSize();
    const isLargeScreen = width >= 1024;

  return (
    <section id="work">
    <div className="pb-4 lg:pb-20">
        <div className="lg:m-4">
            <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}}
            transition={{duration: 1.5}} viewport={{once: true}} className="mt-20 font-medium text-2xl lg:hidden">Experience</motion.h2>
            
            {isLargeScreen ? (
                EXPERIENCES.map((work, index) => (
                    <a href={work.link} rel="noopener noreferrer" target="_blank">
                        <div key={index} className="lg:rounded-xl lg:transition lg:duration-100 lg:-m-4 lg:p-4 lg:hover:bg-slate-500 lg:hover:bg-opacity-5 lg:mt-10 mt-5 mb-8 flex flex-wrap lg:justify-center group">
                            <motion.div whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}}
                            transition={{duration: 1}} viewport={{once: true}} className="w-full lg:w-1/4">
                                <p className="mb-2 text-sm text-stone-400">
                                    {work.year}
                                </p>
                            </motion.div>
                            <motion.div whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}}
                            transition={{duration: 1}} viewport={{once: true}} className="w-full max-w-xl lg:w-3/4">
                                <h3 className="text-lg font-semibold group-hover:text-indigo-300">
                                    {work.role} -{" "} 
                                    <span className="text-sm text-stone-500">
                                        {work.company}
                                    </span>
                                </h3>
                                <p className="mb-4 text-stone-400 text-base">
                                    {work.description}
                                </p>
                                <div className="flex flex-wrap gap-y-2">
                                    {work.technologies.map((tech, index) => 
                                        <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300" key={index}>
                                            {tech}
                                        </span>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    </a>
                ))
            ) : (
                EXPERIENCES.map((work, index) => (
                    <div key={index} className="mt-5 mb-8 flex flex-wrap">
                        <motion.div whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}}
                        transition={{duration: 1}} viewport={{once: true}} className="w-full lg:w-1/4">
                            <p className="mb-2 text-sm text-stone-400">
                                {work.year}
                            </p>
                        </motion.div>
                        <motion.div whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}}
                        transition={{duration: 1}} viewport={{once: true}} className="w-full max-w-xl lg:w-3/4">
                            <a href={work.link}><h3 className="text-lg font-semibold hover:text-indigo-300">
                                {work.role} -{" "} 
                                <span className="text-sm text-stone-500">
                                    {work.company}
                                </span>
                            </h3>
                            </a>
                            <p className="mb-4 text-stone-400 text-base">
                                {work.description}
                            </p>
                            <div className="flex flex-wrap gap-y-2">
                                {work.technologies.map((tech, index) => 
                                    <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300" key={index}>
                                        {tech}
                                    </span>
                                )}
                            </div>
                        </motion.div>
                    </div>
                ))
            )}
        </div>
    </div>
    </section>
  )
}

export default Work