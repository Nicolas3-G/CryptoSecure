import CardOptions from "./components/shared/CardOptions/CardOptions";
import Header from "./components/shared/Header/Header";
import PlansSection from "./components/shared/PlansSection/PlansSection";

const Saving = () => {
    return (
        <>
            <Header page="saving" />
            <CardOptions mainTitle="Savings"/>
            <hr style={{color: "rgba(180, 180, 180, 0.17)", marginTop: "110px", marginBottom: "90px"}}></hr>
            <PlansSection />
        </>
    )
}

export default Saving;