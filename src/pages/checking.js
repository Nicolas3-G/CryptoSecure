import CardOptions from "../components/shared/CardOptions/CardOptions";
import Header from "../components/shared/Header/Header";
import PlansSection from "../components/shared/PlansSection/PlansSection";
import styles from '@/styles/Home.module.css'


const Checking = () => {
    return (
        <>
            <Header page="checking"/>
            <CardOptions mainTitle="Checking" />
            <hr className={styles["checking-line"]}></hr>
            <PlansSection />
        </>
    )
}

export default Checking;