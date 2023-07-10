import CardOptions from "../components/shared/CardOptions/CardOptions";
import Header from "../components/shared/Header/Header";
import PlansSection from "../components/shared/PlansSection/PlansSection";
import styles from '@/styles/Home.module.css'

const Saving = () => {
    return (
        <>
            <Header page="saving" />
            <CardOptions mainTitle="Savings"/>
            <hr className={styles["checking-line"]}></hr>
            <PlansSection />
        </>
    )
}

export default Saving;