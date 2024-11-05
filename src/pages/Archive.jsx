import GlowCursor from "../components/GlowCursor"

import { projects } from "../constants/archivedata.js"

import { Link } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";

const Archive = () => {

  return (
    <div className="text-stone-300 antialiased">
      <GlowCursor />
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      
      <div className="flex justify-center items-center min-h-screen text-base p-4">
            <div className="w-full max-w-6xl mt-30">
                <div className="w-full max-w-xl lg:w-3/4 mt-10">
                    <Link to="/" rel="noopener noreferrer" className="text-indigo-300 inline-flex items-center group">
                        <FaLongArrowAltLeft className="mr-2 mb-1 transform group-hover:-translate-x-2 transition duration-200"/>
                        <h3 className="mb-2 font-semibold text-base">Jing Jie Feng</h3>
                    </Link>
                </div>
                <h1 className="text-4xl font-bold mb-8">All Projects</h1>
                <table className="w-full border-collapse">
                    <thead className="sticky top-0 z-10 border-b px-6 py-5 backdrop-blur">
                        <tr className="text-left border-b border-gray-700">
                            <th className="py-3 px-4">Year</th>
                            <th className="py-3 px-4">Project</th>
                            <th className="py-3 px-4 hidden lg:table-cell">Made at</th>
                            <th className="py-3 px-4 hidden lg:table-cell">Built with</th>
                            <th className="py-3 px-4 hidden sm:table-cell">Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((project, index) => (
                            <tr
                                key={index}
                                className="border-b border-gray-800 hover:bg-gray-800 transition duration-200"
                            >
                                <td className="py-3 px-4 text-stone-400">{project.year}</td>
                                <td className="py-3 px-4 font-semibold">
                                    <span className="hidden sm:inline">{project.project}</span>
                                    <a 
                                        href={`https://${project.link}`} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="inline-flex sm:hidden items-center space-x-1 group hover:text-indigo-300"
                                    >
                                        {project.project}
                                        <span className="transform group-hover:translate-x-1 transition duration-200 ml-1">→</span>
                                    </a>
                                </td>
                                <td className="py-3 px-4 hidden lg:table-cell text-stone-400">{project.madeAt}</td>
                                <td className="py-3 px-4 hidden lg:table-cell">
                                    <div className="flex flex-wrap gap-2">
                                        {project.builtWith.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="bg-stone-900 text-xs font-medium px-2 py-1 rounded"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </td>
                                <td className="py-3 px-4 hidden sm:table-cell text-stone-400">
                                    <a
                                        href={`https://${project.link}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center space-x-1 group"
                                    >
                                        <span>{project.linkTitle}</span>
                                        {project.link && (
                                            <span className="transform group-hover:translate-x-1 transition duration-200">→</span>
                                        )}
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    </div>

  )
}

export default Archive
