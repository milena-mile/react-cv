import {ReactElement} from "react";
import info from "../../info.json";
import ProjectsItem from "./ProjectsItem.tsx";
import "./projects.scss";

const Projects = (): ReactElement => {
    const data = info.projects;

    return (
        <section className="b-projects p-section">
            <h2 className="p-section_title">Latest Projects</h2>
            <div className="b-projects_list">
                {Object.entries(data).map(([key, value]) => {
                    return (
                        <ProjectsItem data={value} title={key} key={key}/>
                    )
                })}
            </div>
        </section>
    )
}

export default Projects;