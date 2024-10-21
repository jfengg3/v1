import { useState, useEffect } from "react";

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

const Sidebar = () => {
    const [activeSection, setActiveSection] = useState("about");

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0, // Trigger as soon as any part of the section is in view
                rootMargin: "-20% 0px -80% 0px", // Change when section is 80% of the way up
            }
        );

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);

    return (
        <motion.ul initial="hidden" animate="visible" variants={containerVariants} className=" space-y-4 lg:m-4 pt-10 text-sm font-extrabold uppercase tracking-wide">
    <li className={`relative ${activeSection === "about" ? "text-indigo-300 opacity-100" : "opacity-40"}`}>
        <a href="#about" className={`relative transition-all duration-300 ${activeSection === "about" ? "pl-16" : "pl-12"}`}>
            <span className={`absolute left-0 top-1/2 transform -translate-y-1/2 h-0.5 transition-all duration-300 ${activeSection === "about" ? "w-12 bg-indigo-300" : "w-8 bg-stone-400"}`}></span>
            About
        </a>
    </li>
    <li className={`relative ${activeSection === "technologies" ? "text-indigo-300 opacity-100" : "opacity-40"}`}>
        <a href="#technologies" className={`relative transition-all duration-300 ${activeSection === "technologies" ? "pl-16" : "pl-12"}`}>
            <span className={`absolute left-0 top-1/2 transform -translate-y-1/2 h-0.5 transition-all duration-300 ${activeSection === "technologies" ? "w-12 bg-indigo-300" : "w-8 bg-stone-400"}`}></span>
            Technologies
        </a>
    </li>
    <li className={`relative ${activeSection === "projects" ? "text-indigo-300 opacity-100" : "opacity-40"}`}>
        <a href="#projects" className={`relative transition-all duration-300 ${activeSection === "projects" ? "pl-16" : "pl-12"}`}>
            <span className={`absolute left-0 top-1/2 transform -translate-y-1/2 h-0.5 transition-all duration-300 ${activeSection === "projects" ? "w-12 bg-indigo-300" : "w-8 bg-stone-400"}`}></span>
            Projects
        </a>
    </li>
    <li className={`relative ${activeSection === "work" ? "text-indigo-300 opacity-100" : "opacity-40"}`}>
        <a href="#work" className={`relative transition-all duration-300 ${activeSection === "work" ? "pl-16" : "pl-12"}`}>
            <span className={`absolute left-0 top-1/2 transform -translate-y-1/2 h-0.5 transition-all duration-300 ${activeSection === "work" ? "w-12 bg-indigo-300" : "w-8 bg-stone-400"}`}></span>
            Experience
        </a>
    </li>
</motion.ul>


    );
};

export default Sidebar;
