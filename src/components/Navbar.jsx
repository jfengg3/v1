import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'; // Ensure you import the icons

import {motion} from "framer-motion"

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

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-10 mb-10">
      <motion.div  initial="hidden" animate="visible" variants={containerVariants} className="lg:m-4 flex items-center justify-center gap-4 text-2xl">
        <a 
          href="https://www.linkedin.com/in/jfengg/" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="LinkedIn" 
          className="text-stone-400 transition-transform duration-300 hover:text-stone-300 hover:scale-110"
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://github.com/jfengg3/" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="GitHub" 
          className="text-stone-400 transition-transform duration-300 hover:text-stone-300 hover:scale-110"
        >
          <FaGithub />
        </a>
        <a 
          href="https://instagram.com/jayeuxles/" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Instagram" 
          className="text-stone-400 transition-transform duration-300 hover:text-stone-300 hover:scale-110"
        >
          <FaInstagram />
        </a>
      </motion.div>
    </nav>
  );
};

export default Navbar;
