import {ReactElement} from "react";
import info from "../../info.json";
import EducationItem from "./EducationItem.tsx";
import "./education.scss";

const Education = (): ReactElement => {
    const data = info.education;

    return (
        <section className="b-education p-section">
            <h2 className="p-section_title">Education</h2>
            <div className="b-education_list">
                {Object.entries(data).map(([key, value]) => {
                    return (
                        <EducationItem data={value} title={key} key={key}/>
                    )
                })}
            </div>
        </section>
    )
}

export default Education;