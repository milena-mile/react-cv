import {ReactElement} from "react";
import {AchievementsI} from "../../types/types.ts";

const AchievementsItem = (props: { data: AchievementsI, company: string }): ReactElement => {
    const data = props.data;

    return (
        <div className="b-achievements_item">
            <div className="b-achievements_info">
                <div className="b-achievements_dates">
                    <span className="b-achievements_date">{data.date}</span>
                    <span className="b-achievements_place">{data.place}</span>
                </div>
                <div className="b-achievements_icon-wrapper">
                    <img src={`images/${data.icon}`} className="b-achievements_icon" alt={props.company}/>
                </div>
                <div className="b-achievements_position">{data.position}</div>
                <div className="b-achievements_company">{props.company}</div>
            </div>
            <div className="b-achievements_description">{data.description}</div>
        </div>
    )
}

export default AchievementsItem;
