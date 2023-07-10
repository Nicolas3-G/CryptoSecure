import styles from "./LoanSection.module.css";
import { useEffect, useState } from "react";

const LoanSection = () => {
    const [loanAmount, setLoanAmount] = useState(0);
    const [loanTerm, setLoanTerm] = useState(0);
    const [loanTotal, setLoanTotal] = useState(0);
    const [displayOptions, setDisplayOptions] = useState(false);
    const [currentCurrency, setCurrentCurrency] = useState('BTC');

    useEffect(() => {
        const loanTotal = loanAmount / loanTerm;
        if (loanTerm) {
            setLoanTotal(loanTotal.toFixed(2));
        }

    }, [loanAmount, loanTerm])

    const handleInputChange = (event) => {
        const value = event.target.value;

        const numberRegex = /\d+(\.\d{0,2})?/;
        const extractedNumber = value.match(numberRegex)?.[0] || '';

        setLoanAmount(extractedNumber);
    };

    const handleCurrencySelectorClick = () => {
        setDisplayOptions(!displayOptions);
    }

    const handleSelectOption = (e) => {
        setDisplayOptions(false);
        console.log("CLICKED: ", e.target.value);
        setCurrentCurrency(e.target.value);
    }

    return (
        <div className={styles.section}>
            <div className={styles["left-side"]}>
                <h1 className={styles.title}>Crypto Backed Loans Made Easy</h1>
                <p className={styles["desc-text"]}>Get the funds you need without selling your crypto assets. Our Crypto Backed Loans offer a secure and easy way to borrow money using your digital assets as collateral. With our platform, you can get the funds you need quickly and securely without having to worry about the safety of your crypto holdings</p>
                <button className={styles.button}>Apply Now</button>
            </div>
            <div className={styles["right-side"]}>
                <div className={styles["calc-holder"]}>
                    <div className={styles["calc-title-holder"]}>
                        <img src="calculator-icon.png" className={styles["calc-icon"]} alt="calculator-icon" />
                        <h2 className={styles["calc-title"]}>Loan Calculator</h2>
                    </div>

                    <div className={styles["input-list"]}>
                        <div className={styles["input-element"]}>
                            <label className={styles["input-label"]}>Loan Amount</label>
                            <input className={styles["input-value"]} onChange={(e) => handleInputChange(e)} type="text" placeholder="$0.00" />
                        </div>
                        <hr className={styles["line"]} />
                        <div className={styles["input-element"]}>
                            <label className={styles["input-label"]}>Loan Term (in months)</label>
                            <input className={styles["input-value"]} onChange={(e) => setLoanTerm(e.target.value)} type="number" placeholder="0" />
                        </div>
                        <hr className={styles["line"]} />
                        <div className={styles["input-element"]}>
                            <label className={styles["input-label"]}>Loan Currency</label>
                            <div onClick={handleCurrencySelectorClick} className={styles["currency-selector"]}>
                                <div className={`${styles["currency-option"]} ${styles["selected"]}`}><img className={styles["currency-icon"]} src={`${currentCurrency}-icon.png`} />{currentCurrency && currentCurrency.toUpperCase()}</div>

                                {displayOptions && <div className={styles["option-modal"]}>
                                    <button onClick={(e) => handleSelectOption(e)} className={styles["currency-option"]} value="eth"><img className={styles["currency-icon"]} src="eth-icon.png" />ETH</button>
                                    <button onClick={(e) => handleSelectOption(e)} className={styles["currency-option"]} value="btc"><img className={styles["currency-icon"]} src="btc-icon.png" />BTC</button>
                                    <button onClick={(e) => handleSelectOption(e)} className={styles["currency-option"]} value="bnb"><img className={styles["currency-icon"]} src="bnb-icon.png" />BNB</button>
                                </div>}
                            </div>

                        </div>
                    </div>
                    <div className={styles["total-holder"]}>
                        <p className={styles["total-title"]}>Loan Payment:</p>
                        <p className={styles["total-value"]}>${!loanTotal ? 0 : loanTotal} /month</p>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default LoanSection;