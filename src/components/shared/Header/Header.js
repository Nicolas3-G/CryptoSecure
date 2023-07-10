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
                <a href="/" onClick={() => setCurrentPage("home")} className={classNames(styles["nav-link"], currentPage == "home" && styles["nav-selected"])}>Home</a>
                <a href="/invest" onClick={() => setCurrentPage("invest")} className={classNames(styles["nav-link"], currentPage == "invest" && styles["nav-selected"])}>Invest</a>
                <a href="/crypto" onClick={() => setCurrentPage("crypto")} className={classNames(styles["nav-link"], currentPage == "crypto" && styles["nav-selected"])}>Crypto</a>
                <a href="/checking" onClick={() => setCurrentPage("checking")} className={classNames(styles["nav-link"], currentPage == "checking" && styles["nav-selected"])}>Checking</a>
                <a href="/saving" onClick={() => setCurrentPage("saving")} className={classNames(styles["nav-link"], currentPage == "saving" && styles["nav-selected"])}>Saving</a>
                <a href="/loan" onClick={() => setCurrentPage("loan")} className={classNames(styles["nav-link"], currentPage == "loan" && styles["nav-selected"])}>Loans</a>
            </nav>
            <button className={styles["sign-in-button"]}>Open Account</button>

        </div>
    )
}

export default Header;