import CardOptions from "../components/shared/CardOptions/CardOptions";
import Header from "../components/shared/Header/Header";
import PlansSection from "../components/shared/PlansSection/PlansSection";
import styles from '@/styles/Home.module.css'
import Head from 'next/head';

const Saving = () => {
    return (
        <>
            <Head>
                <title>CryptoSecure Financial | Savings Page</title>
                <link rel="icon" href="main-logo.png" />
            </Head>
            <Header page="saving" />
            <CardOptions mainTitle="Savings" />
            <hr className={styles["checking-line"]}></hr>
            <PlansSection />
        </>
    )
}

export default Saving;