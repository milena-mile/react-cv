import {useState, useEffect, ReactElement} from "react";
import AsideItem from "../AsideItem/AsideItem.js";
import CVServices from "../../services/CVServices.js";
import {State} from "../../types/types.tsx";

import "./aside.scss";

const Aside = (props: {dataLink: string}): ReactElement => {
    const [state, setState] = useState<State>({data: null, error: false, loaded: false});

    useEffect(() => {
        CVServices(props.dataLink, "asideInfo", setState);
    }, [props.dataLink]);

    return (
        <section className={"b-info"}>
            <section className={"b-info_about"}>
                <div className={"b-info_avatar-wrapper"}>
                    <img src={"images/avatar.jpg"} alt={"Elena Bakumenko"}/>
                </div>
                <h1 className={"b-info_name"}>Elena Bakumenko</h1>
                <p className={"b-info_text"}>I'm Frontend and WordPress developer, created 30+ sites including shops on WooCommerce. Able to work independently or as part of a team to complete development tasks while meeting delivery deadlines. Accountable, critical thinker, communicative, not afraid of challenges and ready to solve complex problems.</p>
            </section>
            {state.loaded && state.data ?
                Object.entries(state.data).map(([key, value]) => {
                    return (
                        <section className={`b-info_contacts ${key.toLowerCase()}`} key={key}>
                            <h2 className={"b-info_title"}>{key}</h2>
                            <AsideItem data={value}/>
                        </section>
                    )
                })
                : "loading..."}
            <section className={"b-info_contacts languages"}>
                <h2 className={"b-info_title"}>Languages</h2>
                <div className={"b-info_contacts-item"}>
                    <div className={"b-info_icon-wrapper"}>
                        <img src="images/russian.svg" className={"b-info_icon"} alt={"Russian language"}/>
                    </div>
                    <h3 className={"b-info_title--big"}>Russian</h3>
                    <p className={"b-info_language-level"}>Native</p>
                </div>
                <div className={"b-info_contacts-item"}>
                    <div className={"b-info_icon-wrapper"}>
                        <img src="images/english.svg" className={"b-info_icon"} alt={"English language"}/>
                    </div>
                    <h3 className={"b-info_title--big"}>English</h3>
                    <p className={"b-info_language-level"}>Intermediate</p>
                </div>
            </section>
            <section className={"b-info_contacts hobbies"}>
                <h2 className={"b-info_title"}>Hobbies & Interests</h2>
                <div className={"b-info_contacts-item"}>
                    <div className={"b-info_icon-wrapper"}>
                        <img src="images/travelling.svg" className={"b-info_icon"} alt={"Travelling"}/>
                    </div>
                    <h3 className={"b-info_title--big"}>Travelling</h3>
                </div>
                <div className={"b-info_contacts-item"}>
                    <div className={"b-info_icon-wrapper"}>
                        <img src="images/needlework.svg" className={"b-info_icon"} alt={"Needlework"}/>
                    </div>
                    <h3 className={"b-info_title--big"}>Needlework</h3>
                </div>
                <div className={"b-info_contacts-item"}>
                    <div className={"b-info_icon-wrapper"}>
                        <img src="images/drawing.svg" className={"b-info_icon"} alt={"Drawing"}/>
                    </div>
                    <h3 className={"b-info_title--big"}>Drawing</h3>
                </div>
            </section>
        </section>
    )
}

export default Aside;