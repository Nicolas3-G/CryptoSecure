import styles from "./InvestIntro.module.css";

const InvestIntro = () => {
    const OptionCard = ({ title, img }) => {
        return (
            <div className={styles["option-card"]}>
                <h2>{title}</h2>
                <img src={img} className={styles["option-image"]} />
                <p className={styles["option-desc"]}>An investment plan that puts the needs of your household first.</p>
                <ul className={styles["option-bullet-holder"]}>
                    <li className={styles["bullet"]}>Investments in verified assets</li>
                    <li className={styles["bullet"]}>Covered by FDIC deposit insurance</li>
                    <li className={styles["bullet"]}>Guarenteed minimun 5% yearly return</li>
                </ul>
                <button className={styles.button}>Select</button>
            </div>
        )
    }


    return (
        <>
            <div className={styles["title-holder"]}>
                <h1 className={styles.title}>Choose an Investment Option that Fits You</h1>
                <p className={styles.desc}>With over 40 options, your sure to find a strategy that works with you.</p>
            </div>
            <div className={styles["card-holder"]}>
                <OptionCard img="home-icon.png" title="Personal" />
                <OptionCard img="business-icon.png" title="Business" />
                <OptionCard img="risk-icon.png" title="Risk Tolerant" />
            </div>

            <button className={styles["see-more-button"]}>See More</button>


        </>
    )
}

export default InvestIntro;