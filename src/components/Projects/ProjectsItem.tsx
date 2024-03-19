import {ReactElement} from "react";
import {ProjectsI} from "../../types/types.ts";

const ProjectsItem = (props: { data: ProjectsI, title: string }): ReactElement => {
    const data = props.data;

    return (
        <div className="b-projects_item">
            <div className="b-projects_icon-wrapper">
                <img src={`images/${data.icon}`} className="b-projects_icon" alt={props.title}/>
            </div>
            <h2 className="b-projects_title">{props.title}</h2>
            <span className="b-projects_description">{data.description}</span>
            <a href={data.link} className="b-projects_link"
               target="_blank">{data.link}</a>
        </div>
    )
}

export default ProjectsItem;