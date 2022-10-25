import './Projects.css'
import projects from "../../projects.json"
import Navbar from '../Navbar/Navbar'
import { useState } from 'react'

export default function Projects() {
    const [isOpen, setIsOpen] = useState(0)
    const [activeProject, setActiveProject] = useState("")

    const toggleMenu = () => {
        isOpen === 1 ? setIsOpen(0) : setIsOpen(1)
    }

    const allProjects = projects[0].projects

    const handleClickOnTitle = (id, title) => {
        setActiveProject(allProjects[id])
        const titles = document.querySelectorAll(".projects-titles")
        titles.forEach((item) => item.classList.remove("active"))
        const activeTitle = document.querySelector(`.projects-titles[data-id='${id}']`) 
        // console.log(activeTitle)
        activeTitle.classList.add("active")

    }

    return (

        <div className="content-wrap">

            <div className="background">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className='Projects-container'>
                {isOpen === 1 && <Navbar />}
                <label htmlFor="check" className='navbar-menu' >
                    <input type="checkbox" id="check" onClick={() => toggleMenu()} />
                    <span></span>
                    <span></span>
                    <span></span>
                </label>


                <div className="project-title-container">
                    {allProjects.map((project) => {
                        return (
                            <div className="project-container" key={project.id}>
                                <h3 className='projects-titles' onClick={() => handleClickOnTitle(project.id, project.title)} data-id={project.id}>
                                    <span data-content={project.title} aria-hidden="true"></span>
                                    {project.title}
                                </h3>
                            </div>
                        )
                    })}
                </div>

                {activeProject !== "" &&

                    <div className="display-container">

                        <div className="display-introSection">
                            <h1 className="display-project-title"> {activeProject.title} </h1>
                            <p className="display-project-shortDesc"><em>' {activeProject.shortDescription} '</em></p>
                            <h2 className="display-project-status"><span>Status:</span>{activeProject.status} </h2>
                            <h2 className="display-project-publish"><span>Published:</span> {activeProject.published} </h2>
                        </div>

                        <div className="display-technologies">
                            <h2 className="display-tech-title">Used Languages and technologies:</h2>
                            {activeProject.technologies.map((tec) => {
                                return (<h3 className="display-technology" key={Math.floor(Math.random() * 9999100) + 999}>➱ {tec}</h3>)
                            })}
                        </div>

                        <div className="display-futherDes-container">

                            <details>
                                <summary>What was my inspiration?</summary>
                                <p className="display-project-inspiration">- {activeProject.inspiration}. </p>

                            </details>
                            <details>
                                <summary>What did I learn while building it?</summary>
                                <p className="display-project-learnedDuring">- {activeProject.learnedDuring}. </p>

                            </details>
                            <details>
                                <summary>What were my challenges?</summary>
                                <p className="display-project-challenges">- {activeProject.challenges}. </p>

                            </details>
                        </div>

                        {/* <div className="display-images-container">
                            <img src={require("../../img/"+activeProject.mainImage)} alt="Image from active project" className='display-image'/>
                        </div> */}

                        <div className="display-page-links">
                            <a href={activeProject.pageLink} target="_blank" rel="noopener noreferrer">Visit Website</a>
                            <a href={activeProject.github} target="_blank" rel="noopener noreferrer">Visit Github repository</a>
                            {activeProject?.backEnd && <a href={activeProject.backEnd} target="_blank" rel="noopener noreferrer">Visit Heroku repository</a>}
                        </div>

                    </div>
                }
            </div>
        </div>
    )
}