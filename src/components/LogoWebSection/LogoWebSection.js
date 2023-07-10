import styles from "./LogoWebSection.module.css";

const LogoWebSection = () => {
    return(
        <div className={styles.section}>
            <h2 className={styles.title}>Widely Integrated</h2>
            <p className={styles.desc}>CryptoSecure's global payment platform is widely integrated and accepted at over 15,000 mercents. Rest easy knowing you money is good anywhere on the globe and online.</p>
            <div className={styles.web}>
                <div className={styles["row-1"]}>
                    <img alt="" className={styles["web-image"]} src="web-images/bank-logo-1.png" />
                    <img alt="" className={styles["web-image"]} src="web-images/adobe-logo.png" />
                    <img alt="" className={styles["web-image"]} src="web-images/robinhood-logo.png" />
                    <img alt="" className={styles["web-image"]} src="web-images/apple-logo.png" />
                    <img alt="" className={styles["web-image"]} src="web-images/chase-logo.png" />
                    <img alt="" className={styles["web-image"]} src="web-images/airbnb-logo.png" />
                </div>
                <div className={styles["row-2"]}>
                    <img alt="" className={styles["web-image"]} src="web-images/netflix-logo.png" />
                    <img alt="" className={styles["web-image"]} src="web-images/paypal-logo.png" />
                    <img alt="" className={styles["web-image"]} src="web-images/coinbase-logo.png" />
                    <img alt="" className={styles["web-image"]} src="web-images/uber-logo.png" />
                    <img alt="" className={styles["web-image"]} src="web-images/spotify-logo.png" />
                </div>
                <div className={styles["row-3"]}>
                    <img alt="" className={styles["web-image"]} src="web-images/zillow-logo.png" />
                    <img alt="" className={styles["web-image"]} src="web-images/citi-logo.png" />
                    <img alt="" className={styles["web-image"]} src="web-images/expedia-logo.png" />
                    <img alt="" className={styles["web-image"]} src="web-images/linked-logo.png" />
                </div>
            </div>
        </div>
    )
}

export default LogoWebSection;