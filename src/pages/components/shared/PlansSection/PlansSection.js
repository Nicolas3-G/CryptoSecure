import styles from "./PlansSections.module.css";
import classNames from "classnames";

const PlansSection = () => {
    const cardArray = [
        { title: "Basic", highlighted: false, price: "$0", priceText:"Free forever", desc: "Basic account with the essentials" },
        { title: "Advance", highlighted: false, price: "$49", priceText:"Per Month, Per Account", desc: "For users that want access to more features" },
        { title: "TurboTime", highlighted: true, price: "$99", priceText:"Per Month, Per Account", desc: "Premium account with maximum security" },
    ]

    const cards = cardArray.map((card) => {
        return (
            <div className={classNames(styles.card, card.highlighted && styles["highlighted-card"])}>
                <div className={styles["card-title-holder"]}>
                    <h3 className={styles["card-title"]}>{card.title}</h3>
                    {card.highlighted && <div className={styles["popular-badge"]}>Popular</div>}
                </div>
                <p>{card.desc}</p>
                <div className={styles["price-holder"]}>
                    <span className={styles.price}>{card.price}</span>
                    <span className={styles["month-text"]}>/ mo</span>
                </div>
                <p>{card.priceText}</p>
                <hr style={{ color: "rgba(227, 226, 226, 0.28)", margin: "30px 0 10px 0" }}></hr>
                <div className={styles["feature-holder"]}>
                    <img src="check-icon-2.png" className={styles["feature-icon"]} />
                    <p>Pay anywhere with 50+ cryptos</p>
                </div>
                <div className={styles["feature-holder"]}>
                    <img src="check-icon-2.png" className={styles["feature-icon"]} />
                    <p>Buy and sell coins with no fees</p>
                </div>
                <div className={styles["feature-holder"]}>
                    <img src="check-icon-2.png" className={styles["feature-icon"]} />
                    <p>24/7 live phone assistance</p>
                </div>
                {card.highlighted &&
                    <div className={styles["feature-holder"]}>
                        <img src="check-icon-2.png" className={styles["feature-icon"]} />
                        <p>Free Monthly Security Audit</p>
                    </div>}
                <button className={classNames(styles.button, card.highlighted && styles["highlighted-button"])}>Choose Plan</button>
            </div>
        )
    })

    return (
        <div className={styles.section}>
            <h2 className={styles.title}>Choose Your Plan</h2>
            <p className={styles.desc}>CryptoSecure's global payment platform is widely integrated and accepted at over 15,000 mercents. Rest easy knowing you money is good anywhere on the globe and online.</p>
            <div className={styles["card-holder"]}>
                {cards}
            </div>
        </div>
    )
}

export default PlansSection;

