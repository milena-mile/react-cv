import {ReactElement} from "react";
import info from "../../info.json";
import AchievementsItem from "./AchievementsItem.tsx";
import "./achievements.scss";

const Achievements = (): ReactElement => {
    const data = info.achievements;

    return (
        <section className="b-achievements p-section">
            <h2 className="p-section_title">Achievements</h2>
            <div className="b-achievements_list">
                {Object.entries(data).map(([key, value]) => {
                    return (
                        <AchievementsItem data={value} company={key} key={key}/>
                    )
                })}
            </div>
        </section>
    )
}

export default Achievements;