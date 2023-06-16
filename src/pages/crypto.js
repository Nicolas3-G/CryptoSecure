import CryptoIntro from "./components/CryptoIntro/CryptoIntro";
import CryptoSplitScreen from "./components/CryptoSplitScreen/CryptoSplitScreen";
import Header from "./components/shared/Header/Header";

const Crypto = () => {
    return (
        <>
            <Header page="crypto"/>
            <CryptoIntro />
            <hr style={{color: "rgba(180, 180, 180, 0.17)", marginTop: "110px", marginBottom: "70px"}}></hr>
            <CryptoSplitScreen />
        </>
    )
}

export default Crypto;