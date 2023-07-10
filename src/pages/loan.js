import Header from "../components/shared/Header/Header";
import LoanSection from "../components/LoanSection/LoanSection";
import ThreeCard from "../components/shared/ThreeCard/ThreeCard";
import LogoWebSection from "../components/LogoWebSection/LogoWebSection";

const Loan = () => {
    return(
        <>
            <Header page="loan" />
            <LoanSection />
            <ThreeCard />
            <hr style={{color: "rgba(180, 180, 180, 0.17)", marginTop: "60px", marginBottom: "50px"}}></hr>
            <LogoWebSection />
        </>
    )
};

export default Loan;
