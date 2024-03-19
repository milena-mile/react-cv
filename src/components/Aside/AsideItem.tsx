import {ReactElement} from "react";
import {AsideItemI} from "../../types/types.ts";

const AsideItem = (props: { data: { [key: string]: AsideItemI }, category: string }): ReactElement => {
    const data = props.data;
    const category = props.category;

    function link(title: string, item: AsideItemI): string {
        let link = '';
        switch (title) {
            case "Email":
                link = `mailto:${item.title}`;
                break;
            case "Phone":
                link = `tel:${item.title}`;
                break;
            default:
                link ? item.title : '';
        }
        return link;
    }

    return (
        <>
            {Object.entries(data).map(([key, value]: [string, AsideItemI]): ReactElement => {

                return (
                    (category === "Contacts" || category === "Social") ?
                        <div className="b-info_contacts-item" key={key}>
                            <div className="b-info_icon-wrapper">
                                <img src={`images/${value.icon}`} className="b-info_icon"
                                     alt={`${key}: ${value.title}`}/>
                            </div>
                            <h3 className={"b-info_title"}>{key}</h3>
                            <a href={value.link ? value.link : link(key, value)} className="b-info_link"
                               target="_blank">{value.title}</a>
                        </div>
                        :
                        <div className="b-info_contacts-item" key={key}>
                            <div className="b-info_icon-wrapper">
                                <img src={`images/${value.icon}`} className="b-info_icon"
                                     alt={`${key}: ${value.title}`}/>
                            </div>
                            <h3 className={"b-info_title--big"}>{key}</h3>
                            {value.title ? <p className="b-info_language-level">{value.title}</p> : null}
                        </div>
                )

            })}
        </>
    )
}

export default AsideItem;