import './Projects.css'
import projects from "../../projects.json"

export default function Projects() {

    const allProjects = projects[0].projects
    
    return (
        <div className="Projects-container">




            {allProjects.map((project) => {
                return (
                    <div className="project-container">

                        <h3> {project.title} </h3>
                    </div>
                )
            })


            }
        </div>
    )
}