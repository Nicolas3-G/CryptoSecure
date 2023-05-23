import styles from "./IntroSection.module.css";

const IntroSection = () => {
    return(
        <div className={styles.section}>
            <div className={styles["left-side"]}>
                <h1 className={styles.title}>Effortless Crypto Banking Experience</h1>
                <p className={styles["desc-text"]}>At CryptoSecure Financial, we believe in the power of cryptocurrency to transform the financial industry. Our mission is to provide a secure, easy-to-use platform that empowers individuals and businesses to manage their digital assets with confidence.</p>
                <button className={styles["button-1"]}>Learn More</button>
                <button className={styles["button-2"]}>Create Account</button>
            </div>
            <div className={styles["right-side"]}>
                <img className={styles.image} src="intro-image.png"/>
            </div>
        </div>
    )
}

export default IntroSection;