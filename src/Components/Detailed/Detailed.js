import './Detailed.css'
import projects from "../../projects.json"

export default function Detailed() {
    const allProjects = projects[0].projects


    return (
        <div className="Detailed-container">
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