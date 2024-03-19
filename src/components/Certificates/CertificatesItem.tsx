import {ReactElement} from "react";
import {CertificatesI} from "../../types/types.ts";

const CertificatesItem = (props: { data: CertificatesI, title: string }): ReactElement => {
    const data = props.data;

    return (
        <div className="b-certificates_item">
            <div className="b-certificates_icon-wrapper">
                <img src={`images/${data.icon}`} className="b-certificates_icon" alt={props.title}/>
            </div>
            <h2 className="b-certificates_company">{props.title}</h2>
            <span className="b-certificates_description">{data.description}</span>
            <span className="b-certificates_dates">{data.dates}</span>
        </div>
    )
}

export default CertificatesItem;