import styles from "./Header.module.css";

const Header = () => {
    return(
        <div className={styles["header-div"]}>
            <a href="/" className={styles["title-logo-holder"]}>
                <img className={styles.logo} src="main-logo.png" />
                <h1 className={styles.title}>CryptoSecure Financial</h1>
            </a>
            <nav className={styles.navbar}>
                <a href="/" className={styles["nav-selected"]}>About</a>
                <a href="/checking" className={styles["nav-link"]}>Checking</a>
                <a href="/saving" className={styles["nav-link"]}>Saving</a>
                <a href="/loan" className={styles["nav-link"]}>Loan</a>
                <span className={styles["nav-link"]}>Invest</span>
                <span className={styles["nav-link"]}>Crypto</span>
            </nav>
            <button className={styles["sign-in-button"]}>Open Account</button>

        </div>
    )
}

export default Header;