import { useState } from "react";
import styles from "./Header.module.css";
import classNames from "classnames";

const Header = ({page}) => {
    const [currentPage, setCurrentPage] = useState(page);
    // have a state that saves the index of a page
    // We have a conditional state that checks if "currentPage == "whatever"

    return(
        <div className={styles["header-div"]}>
            <a href="/" className={styles["title-logo-holder"]}>
                <img className={styles.logo} src="main-logo.png" />
                <h1 className={styles.title}>CryptoSecure Financial</h1>
            </a>
            <nav className={styles.navbar}>
                <a href="/" onClick={() => setCurrentPage("about")} className={classNames(styles["nav-link"], currentPage == "about" && styles["nav-selected"])}>About</a>
                <a href="/checking" onClick={() => setCurrentPage("checking")} className={classNames(styles["nav-link"], currentPage == "checking" && styles["nav-selected"])}>Checking</a>
                <a href="/saving" onClick={() => setCurrentPage("saving")} className={classNames(styles["nav-link"], currentPage == "saving" && styles["nav-selected"])}>Saving</a>
                <a href="/loan" onClick={() => setCurrentPage("loan")} className={classNames(styles["nav-link"], currentPage == "loan" && styles["nav-selected"])}>Loan</a>
                <span className={styles["nav-link"]}>Invest</span>
                <span className={styles["nav-link"]}>Crypto</span>
            </nav>
            <button className={styles["sign-in-button"]}>Open Account</button>

        </div>
    )
}

export default Header;