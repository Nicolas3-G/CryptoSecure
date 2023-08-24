import InvestIntro from "../components/InvestIntro/InvestIntro";
import Header from "../components/shared/Header/Header";
import Head from 'next/head';

const Invest = () => {
    return (
        <>
            <Head>
                <title>CryptoSecure Financial | Invest Page</title>
                <link rel="icon" href="main-logo.png" />
            </Head>
            <Header page="invest" />
            <InvestIntro />
        </>
    )
}

export default Invest