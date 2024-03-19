import {ReactElement} from "react";
import info from "../../info.json";
import AsideItem from "./AsideItem.tsx";
import "./aside.scss";

const Aside = (): ReactElement => {
    const data = info.asideInfo;

    return (
        <section className="b-info">
            <section className="b-info_about">
                <div className="b-info_avatar-wrapper">
                    <img src="public/images/avatar.jpg" alt={"Elena Bakumenko"}/>
                </div>
                <h1 className="b-info_name">Elena Bakumenko</h1>
                <p className="b-info_text">I'm Frontend and WordPress developer, created 30+ sites including shops on
                    WooCommerce. Able to work independently or as part of a team to complete development tasks while
                    meeting delivery deadlines. Accountable, critical thinker, communicative, not afraid of challenges
                    and ready to solve complex problems.</p>
            </section>
            {Object.entries(data).map(([key, value]) => {
                return (
                    <section className={`b-info_contacts ${key.toLowerCase()}`} key={key}>
                        <h2 className="b-info_title">{key}</h2>
                        <AsideItem data={value} category={key}/>
                    </section>
                )
            })
            }
        </section>
    )
}

export default Aside;