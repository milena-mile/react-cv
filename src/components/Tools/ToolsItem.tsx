import {ReactElement} from "react";
import {ToolsI} from "../../types/types.ts";

const ToolsItem = (props: { data: ToolsI, title: string }): ReactElement => {
    const data = props.data;

    return (
        <div className="b-tools_item">
            <div className="b-tools_icon-wrapper">
                <img src={`images/${data.icon}`} className="b-tools_icon" alt={props.title}/>
            </div>
            <h3 className="b-tools_title">{props.title}</h3>
            <span className="b-tools_description">{data.description}</span>
        </div>
    )
}

export default ToolsItem;
