import "./tools.scss";
import {ReactElement, useEffect, useState} from "react";
import {State} from "../../types/types.tsx";
import CVServices from "../../services/CVServices.tsx";

const Tools = (props: {dataLink: string}): ReactElement => {
    const [state, setState] = useState<State>({data: null, error: false, loaded: false});

    useEffect(() => {
        CVServices(props.dataLink, "tools/skills", setState);
    }, [props.dataLink]);


    return (
        <section className="b-tools p-section">
            <h2 className="p-section_title">Tools/Skills</h2>
            <div className="b-tools_list">
                {state.loaded && state.data ?
                    Object.entries(state.data).map(([key, value]) => {
                        return (
                            <div className="b-tools_item" key={key}>
                                <div className="b-tools_icon-wrapper">
                                    <img src={`images/${value.image}`} className="b-tools_icon" alt=""/>
                                </div>
                                <h3 className="b-tools_title">{key}</h3>
                                <span className="b-tools_description">{value.description}</span>
                            </div>
                        )
                    })
                    : "loading..."}
            </div>
        </section>
    )
}

export default Tools;