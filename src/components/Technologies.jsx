
import { BiLogoTypescript } from "react-icons/bi"
import { DiMongodb, DiOpenshift } from "react-icons/di"
import { FaGitAlt, FaNodeJs, FaPython } from "react-icons/fa"
import { RiJavaFill, RiJavascriptFill, RiNextjsLine, RiReactjsLine } from "react-icons/ri"
import { SiExpress, SiSelenium } from "react-icons/si"

import {motion} from "framer-motion"

const iconVariants = (duration) => ({
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    }
  }
})

const Technologies = () => {
  return (
    <section id="technologies">
      <div className="pb-4 lg:pb-20">
      <div className="lg:m-4">
        <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}}
        transition={{duration: 1.5}} viewport={{once: true}}
        className="mt-20 text-2xl font-medium lg:hidden">Technologies</motion.h2>
        <motion.div whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}}
        transition={{duration: 1.5}} viewport={{once: true}}
        className="flex flex-wrap items-center justify-center gap-4 lg:mt-10 mt-5">
          <motion.div initial="initial" animate="animate"
          variants={iconVariants(5)} className="pb-4">
            <RiReactjsLine className="text-7xl text-cyan-400"/>
          </motion.div>
          <motion.div initial="initial" animate="animate"
          variants={iconVariants(4)} className="pb-4">
            <FaNodeJs className="text-7xl text-green-500"/>
          </motion.div>
          <motion.div initial="initial" animate="animate"
          variants={iconVariants(3)} className="pb-4">
            <DiMongodb className="text-7xl text-green-500"/>
          </motion.div>
          <motion.div initial="initial" animate="animate"
          variants={iconVariants(3.5)} className="pb-4">
            <SiExpress className="text-7xl text-stone-400"/>
          </motion.div>
          <motion.div initial="initial" animate="animate"
          variants={iconVariants(4)} className="pb-4">
            <RiNextjsLine className="text-7xl"/>
          </motion.div>
          <motion.div initial="initial" animate="animate"
          variants={iconVariants(5)} className="pb-4">
            <BiLogoTypescript className="text-7xl text-blue-500"/>
          </motion.div>
          <motion.div initial="initial" animate="animate"
          variants={iconVariants(3.5)} className="pb-4">
            <RiJavascriptFill className="text-7xl text-yellow-400"/>
          </motion.div>
          <motion.div initial="initial" animate="animate"
          variants={iconVariants(3)} className="pb-4">
            <DiOpenshift className="text-7xl text-red-500"/>
          </motion.div>
          <motion.div initial="initial" animate="animate"
          variants={iconVariants(5)} className="pb-4">
            <FaGitAlt className="text-7xl text-orange-500"/>
          </motion.div>
          <motion.div initial="initial" animate="animate"
          variants={iconVariants(3.5)} className="pb-4">
            <FaPython className="text-7xl text-yellow-600"/>
          </motion.div>
          <motion.div initial="initial" animate="animate"
          variants={iconVariants(4.5)} className="pb-4">
            <RiJavaFill className="text-7xl text-red-600"/>
          </motion.div>
          <motion.div initial="initial" animate="animate"
          variants={iconVariants(5)} className="pb-4">
            <SiSelenium className="text-7xl text-green-500"/>
          </motion.div>
        </motion.div>
      </div>
    </div>
    </section>
    
  )
}

export default Technologies