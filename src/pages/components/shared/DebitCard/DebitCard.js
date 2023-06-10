import classNames from "classnames";
import styles from "./DebitCard.module.css";

const DebitCard = ({ cardNumber }) => {
    return (
        <div className={classNames(styles.card, styles[`card-${cardNumber}`])}>
            <div className={styles["card-top"]}>
                <div className={styles["card-top-left-side"]}>
                    <div className={styles["company-logo-section"]}>
                        <img className={styles["company-logo"]} src="main-logo.png" />
                        <h1 className={styles["company-name"]}>CryptoSecure Financial</h1>
                    </div>
                    <img className={styles["card-background"]} src="main-logo.png" />
                </div>
                <div className={styles["card-top-right-side"]}>
                    <img className={styles["emv-chip"]} src="emv-chip.png" />
                    <p className={styles["card-number"]}>•••• •••• •••• 4372</p>
                </div>
            </div>
            <div className={styles["card-bottom"]}>
                <div className={styles["bottom-line-1"]}>
                    <p>Terry Jones</p>
                    <p>03/26</p>
                </div>
                <div className={styles["bottom-line-2"]}>
                    <p className={styles["card-type"]}>Business Card</p>
                    <img className={styles["card-logo"]} src="visa-logo.png" alt="visa" />
                </div>

            </div>
        </div>
    );
}

export default DebitCard;