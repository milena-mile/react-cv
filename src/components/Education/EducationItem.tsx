import {ReactElement} from "react";
import {EducationI} from "../../types/types.ts";

const EducationItem = (props: { data: EducationI, title: string }): ReactElement => {
    const data = props.data;

    return (
        <div className="b-education_item">
            <div className="b-education_icon-wrapper">
                <img src={`images/${data.icon}`} className="b-education_icon" alt={props.title}/>
            </div>
            <span className="b-education_title">{props.title}</span>
            <span className="b-education_major">{data.major}</span>
            <span className="b-education_years">{data.years}</span>
        </div>
    )
}

export default EducationItem;