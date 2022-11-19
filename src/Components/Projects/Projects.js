import './Projects.css'
import projects from "../../projects.json"
import Navbar from '../Navbar/Navbar'
import { useEffect, useState } from 'react'

export default function Projects(props) {
    const [activeProject, setActiveProject] = useState("")
    const allProjects = projects[0].projects



    useEffect(() => {
        document.title = "Dan's Portfolio - PROJECTS"
        setActiveProject(allProjects[5])
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleClickOnTitle = (id, title, e) => {
        setActiveProject(allProjects[id])
        const titles = document.querySelectorAll(".projects-titles")
        titles.forEach((item) => item.classList.remove("active"))
        const activeTitle = document.querySelector(`.projects-titles[data-id='${id}']`)
        activeTitle.classList.add("active")
        handleOpenDetails(e)
    }

    const handleOpenDetails = (e) => {
        const detailsElements = document.querySelectorAll("details")
        const clickedElement = e.target.parentElement

        if (clickedElement.tagName.toLowerCase() === "details" && !clickedElement.hasAttribute("open")) {
            detailsElements.forEach((i) => i.removeAttribute("open"))
            return
        }

        if (clickedElement.tagName.toLowerCase() === "details" && clickedElement.hasAttribute("open")) {
            clickedElement.open = "false"
            return
        }
        else {
            detailsElements.forEach((i) => i.removeAttribute("open"))
        }
    }

    return (
        <div className='Projects-container'>
            <Navbar isOpen={props.isOpen} setIsOpen={props.setIsOpen} toggleMenu={props.toggleMenu} />


            <div className="project-title-container">
                {allProjects.map((project) => {
                    return (
                        <div className="project-container" key={project.id}>
                            <h3 className='projects-titles' onClick={(e) => handleClickOnTitle(project.id, project.title, e)} data-id={project.id}>
                                <span data-content={project.title} aria-hidden="true"></span>
                                {project.title}
                            </h3>
                        </div>
                    )
                })}
            </div>


            <div className={activeProject !== "" ? "display-container" : "display-container empty"}>

                {activeProject !== "" &&
                    <div className="display-wrap">

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

                            <details onClick={(e) => handleOpenDetails(e)} open={false}>
                                <summary>What was my inspiration?</summary>
                                <p className="display-project-inspiration">- {activeProject.inspiration}. </p>

                            </details>
                            <details onClick={(e) => handleOpenDetails(e)} open={false}>
                                <summary>What I learned while building it?</summary>
                                <p className="display-project-learnedDuring">- {activeProject.learnedDuring}. </p>

                            </details>
                            <details onClick={(e) => handleOpenDetails(e)} open={false}>
                                <summary>What were my challenges?</summary>
                                <p className="display-project-challenges">- {activeProject.challenges}. </p>

                            </details>
                        </div>

                        <div className="display-page-links">
                            <a href={activeProject.pageLink} target="_blank" rel="noopener noreferrer" className='display-page-links-a'>Visit Website</a>
                            <a href={activeProject.github} target="_blank" rel="noopener noreferrer" className='display-page-links-a'>Visit Github repository</a>
                            {activeProject?.backEnd &&
                                <a href={activeProject.backEnd} target="_blank" rel="noopener noreferrer" className='display-page-links-a'>Visit Heroku repository</a>}
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}