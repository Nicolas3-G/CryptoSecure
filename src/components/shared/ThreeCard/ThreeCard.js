import styles from "./ThreeCard.module.css";

const ThreeCard = () => {
    return (
        <div className={styles.holder}>
            <div className={styles.card}>
                <img className={styles.image} src="lock-icon.png" />
                <h2>Secure</h2>
                <p className={styles["card-desc"]}>Protecting your assets is our top priority at CryptoSecure Financial. With advanced security measures.</p>
            </div>
            <div className={styles.card}>
                <img className={styles.image} src="money-icon.png" />
                <h2>Low Fees</h2>
                <p className={styles["card-desc"]}>Protecting your assets is our top priority at CryptoSecure Financial. With advanced security measures.</p>
            </div>
            <div className={styles.card}>
                <img className={styles.image} src="support-icon.png" />
                <h2>24/7 Support</h2>
                <p className={styles["card-desc"]}>Protecting your assets is our top priority at CryptoSecure Financial. With advanced security measures.</p>
            </div>

        </div>

    )
}

export default ThreeCard;