import {ReactElement} from "react";
import info from "../../info.json";
import CertificatesItem from "./CertificatesItem.tsx";
import "./certificates.scss";

const Certificates = (): ReactElement => {
    const data = info.certificates;

    return (
        <section className="b-certificates p-section">
            <h2 className="p-section_title">Certificates & Awards</h2>
            <div className="b-certificates_list">
                {Object.entries(data).map(([key, value]) => {
                    return (
                        <CertificatesItem data={value} title={key} key={key}/>
                    )
                })}
            </div>
        </section>
    )
}

export default Certificates;