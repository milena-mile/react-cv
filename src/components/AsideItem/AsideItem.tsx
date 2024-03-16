import {ReactElement} from "react";
import {AsideItemI} from "../../types/types.ts";

const AsideItem = (props: { [key: string]: AsideItemI }): ReactElement => {
    const {data} = props;

    function link(title: string, item: AsideItemI): string {
        let link;
        switch (title) {
            case "Email":
                link = `mailto:${item.title}`;
                break;
            case "Phone":
                link = `tel:${item.title}`;
                break;
            default:
                link = item.title;
        }
        return link;
    }

    return (
        <>
            {Object.entries(data).map(([key, value]: [string, AsideItemI]): ReactElement => {
                return (
                    <div className={"b-info_contacts-item"} key={key}>
                        <div className={"b-info_icon-wrapper"}>
                            <img src={`images/${value.icon}`} className={"b-info_icon"}
                                 alt={`${key}: ${value.title}`}/>
                        </div>
                        <h3 className={"b-info_title"}>{key}</h3>
                        <a href={value.link ? value.link : link(key, value)} className={"b-info_link"} target={"_blank"}>{value.title}</a>
                    </div>
                )

            })}
        </>
    )
}

export default AsideItem;