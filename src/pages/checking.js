import CardOptions from "../components/shared/CardOptions/CardOptions";
import Header from "../components/shared/Header/Header";
import PlansSection from "../components/shared/PlansSection/PlansSection";
import styles from '@/styles/Home.module.css'
import Head from 'next/head';


const Checking = () => {
    return (
        <>
            <Head>
                <title>CryptoSecure Financial | Checking Page</title>
                <link rel="icon" href="main-logo.png" />
            </Head>
            <Header page="checking" />
            <CardOptions mainTitle="Checking" />
            <hr className={styles["checking-line"]}></hr>
            <PlansSection />
        </>
    )
}

export default Checking;