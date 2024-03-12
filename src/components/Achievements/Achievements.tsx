import "./achievements.scss";

const Achievements = () => {
    return (
        <section className="b-achievements p-section">
            <h2 className="p-section_title">Achievements</h2>
            <div className="b-achievements_list">
                <div className="b-achievements_item">
                    <div className="b-achievements_info">
                        <div className="b-achievements_dates">
                            <span className="b-achievements_present">Present</span> - Jan 2020
                            <span className="b-achievements_place">Online</span>
                        </div>
                        <div className="b-achievements_icon-wrapper">
                            <img src="images/elevatecg.svg" className="b-achievements_icon" alt=""/>
                        </div>
                        <div className="b-achievements_position">Front-end developer</div>
                        <div className="b-achievements_company">Elevate Creative Group</div>
                    </div>
                    <div className="b-achievements_description">
                        <ul className="b-achievements_description-list">
                            <li className="b-achievements_description-item">Developed custom WordPress themes from
                                scratch using HTML, CSS, JavaScript, and PHP, ensuring cross-browser compatibility and
                                adherence to web standards.
                            </li>
                            <li className="b-achievements_description-item">Implemented e-commerce functionality using
                                WooCommerce, including product listings, shopping cart customization (dynamic pricing,
                                discount coupons, and product bundling), and payment gateway integration.
                            </li>
                            <li className="b-achievements_description-item">Customized and extended WordPress
                                functionality through custom post types, taxonomies, and hooks to meet specific project
                                requirements.
                            </li>
                            <li className="b-achievements_description-item">Implemented multilingual websites using
                                WordPress Multilingual Plugin (WPML) to cater to international audiences and expand
                                client reach.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Achievements;