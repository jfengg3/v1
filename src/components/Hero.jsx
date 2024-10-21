import {HERO_CONTENT, ABOUT_TEXT} from "../constants/index.js"
import {motion} from "framer-motion"
import { useWindowSize } from "../lib/windowSize";
import Sidebar from "./Sidebar.jsx"

const containerVariants = {
    hidden: {opacity: 0, x: -100},
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.5,
        }
    }
}

const childVariants = {
    hidden: {opacity: 0, x: -100},
    visible: {opacity: 1, x: 0, transition: {duration: 0.5}}
}

const Hero = () => {

    const { width } = useWindowSize();
    const isLargeScreen = width >= 1024;

  return (
    <div className="pb-4">
        <div className="flex flex-wrap lg:flex-row mt-1">
            <div className="lg:m-4">
                <motion.div initial="hidden" animate="visible" variants={containerVariants}
                    className="lg:items-start mt-10">
                    <motion.a href="/" aria-label="Home" variants={childVariants} className="pb-2 text-5xl tracking-tighter lg:text-5xl font-semibold">Jing Jie Feng</motion.a>
                    <motion.p className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-2xl tracking-tight text-transparent mt-2 font-medium">CS Graduate</motion.p>
                    <motion.p className="mt-2 max-w-60 text-lg text-stone-400 leading-relaxed tracking-tighter">
                        {ABOUT_TEXT}
                    </motion.p>
                </ motion.div>
            </div>
        </div>
        {isLargeScreen && <Sidebar />}
    </div>
    
  )
}

export default Hero