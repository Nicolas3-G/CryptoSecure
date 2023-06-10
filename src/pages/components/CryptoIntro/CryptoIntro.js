import DebitCard from "../shared/DebitCard/DebitCard";
import styles from "./CryptoIntro.module.css"

const CryptoIntro = () => {
    return( 
        <div className={styles.grid}>
            <div className={styles["column-1"]}>
                <h4 className={styles["tag-line"]}>Payment Solutions</h4>
                <h1 className={styles["column-1-title"]}>Pay with crypto anywhere</h1>
                <p className={styles["column-1-desc"]}>Experience the future of banking with Cryptosecure Financial. Our innovative platform allows you to seamlessly make payments.</p>
                <button className={styles.button}>Get Started</button>
            </div>
            <div className={styles["column-2"]}>
                <DebitCard cardNumber="1"/>
                <DebitCard cardNumber="2"/>
                <DebitCard cardNumber="3"/>
            </div>
            <div>
                <h2 className={styles["currency-count"]}>50+</h2>
                <p className={styles["column-3-desc"]}>Payments with over 50 cryptocurrices are supported worldwide.</p>
                <div className={styles["logo-bar"]}>
                    <img className={styles["bar-image"]} style={{left: "125px"}} src="web-images/chase-logo.png" />
                    <img className={styles["bar-image"]} style={{left: "100px"}} src="web-images/apple-logo.png" />
                    <img className={styles["bar-image"]} style={{left: "75px"}} src="web-images/coinbase-logo.png" />
                    <img className={styles["bar-image"]} style={{left: "50px"}} src="web-images/netflix-logo.png" />
                    <img className={styles["bar-image"]} style={{left: "25px"}} src="web-images/spotify-logo.png" />
                    <img className={styles["bar-image"]} src="web-images/uber-logo.png" />
                </div>
            </div>

        </div>
    )
}

export default CryptoIntro;