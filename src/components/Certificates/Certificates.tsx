import {ReactElement} from "react";
import "./certificates.scss";

const Certificates = (): ReactElement => {
    return (
        <section className="b-certificates p-section">
            <h2 className="p-section_title">Certificates & Awards</h2>
            <div className="b-certificates_list">
                <div className="b-certificates_item">
                    <div className="b-certificates_icon-wrapper">
                        <img src="images/kobezza.svg" className="b-certificates_icon" alt=""/>
                    </div>
                    <h2 className="b-certificates_company">Kobezza.lab</h2>
                    <span className="b-certificates_description">Computer Science in Frontend</span>
                    <span className="b-certificates_dates">Apr 2023 - Oct 2023</span>
                </div>
            </div>
        </section>
    )
}

export default Certificates;