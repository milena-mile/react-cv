import "./education.scss";
import {ReactElement} from "react";

const Education = (): ReactElement => {
    return (
        <section className="b-education p-section">
            <h2 className="p-section_title">Education</h2>
            <div className="b-education_list">
                <div className="b-education_item">
                    <div className="b-education_icon-wrapper">
                        <img src="images/polessu.svg" className="b-education_icon" alt=""/>
                    </div>
                    <span className="b-education_title">PolesSU</span>
                    <span className="b-education_major">Banking and Finance</span>
                    <span className="b-education_years">2009-2013</span>
                </div>
                <div className="b-education_item">
                    <div className="b-education_icon-wrapper">
                        <img src="images/kobezza.svg" className="b-education_icon" alt=""/>
                    </div>
                    <span className="b-education_title">Kobezza.lab</span>
                    <span className="b-education_major">Computer Science in Frontend</span>
                    <span className="b-education_years">2023</span>
                </div>
            </div>
        </section>
    )
}

export default Education;