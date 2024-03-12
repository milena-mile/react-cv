import "./projects.scss";
import {ReactElement} from "react";

const Projects = (): ReactElement => {
    return (
        <section className="b-projects p-section">
            <h2 className="p-section_title">Latest Projects</h2>
            <div className="b-projects_list">
                <div className="b-projects_item">
                    <div className="b-projects_icon-wrapper">
                        <img src="images/sacred.svg" className="b-projects_icon" alt=""/>
                    </div>
                    <h2 className="b-projects_title">Sacred Essentials</h2>
                    <span className="b-projects_description">WooCommerce shop</span>
                    <a href="https://www.getsacred.com/" className="b-projects_link"
                       target="_blank">https://www.getsacred.com/</a>
                </div>
                <div className="b-projects_item">
                    <div className="b-projects_icon-wrapper">
                        <img src="images/stellox.svg" className="b-projects_icon" alt=""/>
                    </div>
                    <h2 className="b-projects_title">Stellox</h2>
                    <span className="b-projects_description">Multilingual corporate website</span>
                    <a href="https://stellox.com/" className="b-projects_link" target="_blank">https://stellox.com/</a>
                </div>
            </div>
        </section>
    )
}

export default Projects;