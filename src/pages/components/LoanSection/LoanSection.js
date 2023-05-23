import styles from "./LoanSection.module.css";

const LoanSection = () => {
    return (
        <div className={styles.section}>
            <div className={styles["left-side"]}>
                <h1 className={styles.title}>Crypto Backed Loans Made Easy</h1>
                <p className={styles["desc-text"]}>Get the funds you need without selling your crypto assets. Our Crypto Backed Loans offer a secure and easy way to borrow money using your digital assets as collateral. With our platform, you can get the funds you need quickly and securely without having to worry about the safety of your crypto holdings</p>
                <button className={styles.button}>Apply Now</button>
            </div>
            <div>
                <div className={styles["calc-holder"]}>
                    <h3 className={styles["input-title"]}>Loan Amount:</h3>
                    <div className={styles["input-holder"]}>
                        <input type="text" placeholder="Enter Loan Amount" className={styles["calc-input"]} />
                    </div>
                    <h3 className={styles["input-title"]}>Loan Term (in years):</h3>
                    <div className={styles["input-holder"]}>
                        <input type="text" placeholder="Enter Loan Term" className={styles["calc-input"]} />
                    </div>
                    <h3 className={styles["input-title"]}>Interest Rate:</h3>
                    <div className={styles["input-holder"]}>
                        <input type="text" placeholder="Enter Interest Rate" className={styles["calc-input"]} />
                    </div>
                    <button className={styles["color-button"]}>Calculate Loan Payment</button>
                </div>
            </div>
        </div>
    )
}

export default LoanSection;