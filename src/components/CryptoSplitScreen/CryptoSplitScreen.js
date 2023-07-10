import DebitCard from "../shared/DebitCard/DebitCard";
import styles from "./CryptoSplitScreen.module.css";

const CryptoSplitScreen = () => {

    return (
        <div className={styles.section}>
            <div className={styles["title-holder"]}>
                <h2 className={styles.title}>Earn rewards paying with Crypto</h2>
                <div className={styles["card-holder"]}>
                    <DebitCard cardNumber="4" />
                    <DebitCard cardNumber="5" />
                    <DebitCard cardNumber="6" />
                </div>

            </div>
            <div>
                <p className={styles.desc}>Experience the future of banking with Cryptosecure Financial. Our innovative platform allows you to seamlessly make payments. Experience the future of banking with Cryptosecure Financial. Our innovative platform allows you to seamlessly make payments.</p>
                <div className={styles["list-element"]}>
                    <img className={styles["element-icon"]} src="support-icon.png" alt="arrow" />
                    <h3 className={styles["element-title"]}>Sign up</h3>
                    <p className={styles["element-desc"]}>Experience the future of banking with Cryptosecure Financial.</p>
                </div>
                <hr style={{ color: "rgba(180, 180, 180, 0.17)", marginTop: "10px", marginBottom: "20px" }}></hr>
                <div className={styles["list-element"]}>
                    <img className={styles["element-icon"]} src="lock-icon.png" alt="arrow" />
                    <h3 className={styles["element-title"]}>Verify</h3>
                    <p className={styles["element-desc"]}>Experience the future of banking with Cryptosecure Financial.</p>
                </div>
                <hr style={{ color: "rgba(180, 180, 180, 0.17)", marginTop: "10px", marginBottom: "20px" }}></hr>
                <div className={styles["list-element"]}>
                    <img className={styles["element-icon"]} src="connect-icon-2.png" alt="arrow" />
                    <h3 className={styles["element-title"]}>Connect Wallet</h3>
                    <p className={styles["element-desc"]}>Experience the future of banking with Cryptosecure Financial.</p>
                </div>
                <hr style={{ color: "rgba(180, 180, 180, 0.17)", marginTop: "10px", marginBottom: "20px" }}></hr>
                <div className={styles["list-element"]}>
                    <img className={styles["element-icon"]} src="money-icon.png" alt="arrow" />
                    <h3 className={styles["element-title"]}>Start Earning</h3>
                    <p className={styles["element-desc"]}>Experience the future of banking with Cryptosecure Financial.</p>
                </div>
                <hr style={{ color: "rgba(180, 180, 180, 0.17)", marginTop: "10px", marginBottom: "20px" }}></hr>
            </div>
        </div>
    );
}

export default CryptoSplitScreen;