import {ReactElement} from "react";
import info from "../../info.json";
import ToolsItem from "./ToolsItem.tsx";
import "./tools.scss";

const Tools = (): ReactElement => {
    const data = info["tools/skills"];

    return (
        <section className="b-tools p-section">
            <h2 className="p-section_title">Tools/Skills</h2>
            <div className="b-tools_list">
                {Object.entries(data).map(([key, value]) => {
                    return (
                        <ToolsItem data={value} title={key} key={key}/>
                    )
                })}
            </div>
        </section>
    )
}

export default Tools;