import { FOOTER } from "../constants"

import {motion} from "framer-motion"


const Contact = () => {
  return (
    <div className="border-t border-stone-900 text-stone-400 text-sm pb-20">
        <div className="lg:m-4 tracking-tighter">
            <motion.p whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}}
        transition={{duration: 1}} viewport={{once: true}} className="my-4 pt-10 max-w-lg">
                Coded in <a href="https://code.visualstudio.com/"  rel="noopener noreferrer" target="_blank" className="font-semibold text-stone-300 hover:text-indigo-300">Visual Studio Code</a>.
                Built with <a href="https://react.dev/"  rel="noopener noreferrer" target="_blank" className="font-semibold text-stone-300 hover:text-indigo-300">React.js</a>, 
                <a href="https://tailwindcss.com/"  rel="noopener noreferrer" target="_blank" className="font-semibold text-stone-300 hover:text-indigo-300">Tailwind CSS</a>, 
                and <a href="https://www.framer.com/motion/"  rel="noopener noreferrer" target="_blank" className="font-semibold text-stone-300 hover:text-indigo-300">Framer Motion</a> for transitions, 
                deployed with <a href="https://vercel.com/"  rel="noopener noreferrer" target="_blank" className="font-semibold text-stone-300 hover:text-indigo-300">Vercel</a>. 
                Font is set to <a href="https://fonts.google.com/specimen/Inter"  rel="noopener noreferrer" target="_blank" className="font-semibold text-stone-300 hover:text-indigo-300">Inter</a> typeface.
            </motion.p>
        </div>
    </div>
  )
}

export default Contact