import {HERO_CONTENT} from "../constants/index.js"
import {motion} from "framer-motion"
import '../App.css';

const containerVariants = {
    hidden: {opacity: 0, x: 100},
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
    hidden: {opacity: 0, y: -100},
    visible: {opacity: 1, x: 0, transition: {duration: 0.5}}
}

const About = () => {
    return (
        <section id="about">
            <div className="pb-4 lg:pb-20">
                <div className="flex flex-wrap">
                    <div className="w-full lg:m-4">
                        <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}}
                        transition={{duration: 1.5}} viewport={{once: true}}
                        className="mt-20 text-2xl font-medium lg:hidden">About</motion.h2>
                        <motion.div initial="hidden" animate="visible" variants={containerVariants}
                            className="flex flex-col items-center lg:items-start lg:mt-10 mt-5">
                            <motion.p className="text-stone-400 text-lg leading-relaxed tracking-tighter">
                            I first knew scripting back in 2010 when I was playing Half-Life. 
                            I set-up my own server and ran AMX Mod X 
                            (allows you to write modifications for Half-Life with Small scripting language). 
                            It was cool as I can write scripts and do configurations to the game.
                            </motion.p>
                        </ motion.div>
                        <motion.div initial="hidden" animate="visible" variants={containerVariants}
                            className="flex flex-col items-center lg:items-start lg:mt-10 mt-5">
                            <motion.p className="text-stone-400 text-lg leading-relaxed tracking-tighter">
                            Fast-forward today, I graduated from SIT/UofG with a bachelor’s 
                            degree in computing science, and had the privilege to of doing web 
                            development for an <a href="#" className="tooltip text-lg font-semibold text-stone-300 hover:text-indigo-300">SME<span class="tooltiptext">Ceased</span></a>, 
                            developing and testing tools for a <a href="https://www.dbs.com/" rel="noopener noreferrer" target="_blank" className="text-lg font-semibold text-stone-300 hover:text-indigo-300">huge financial corporation</a>.
                            My interest these days is building cool stuff that comes into my mind. 
                            I most enjoy building things where out-of-the-box ideas meet engineering - 
                            things that are unusually innovative, but built well to be useful. 
                            </motion.p>
                        </ motion.div>
                        <motion.div initial="hidden" animate="visible" variants={containerVariants}
                            className="flex flex-col items-center lg:items-start lg:mt-10 mt-5">
                            <motion.p className="text-stone-400 text-lg leading-relaxed tracking-tighter">
                            When I am not on my computer, I will be spending time with my cats, 
                            playing badminton, or treating myself into a nice meal.
                            </motion.p>
                        </ motion.div>
                        
                    </div>
                </div>
            </div>
        </section>

      )
}

export default About