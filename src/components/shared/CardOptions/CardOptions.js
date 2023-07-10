import styles from './CardOptions.module.css';

const CardOptions = ({ mainTitle }) => {
    
    const OptionCard = ({ title, imageId, desc }) => {
        let dynamicDelay = `${imageId * .5}s`
        return (
            <div className={styles.card} style={{animationDelay: dynamicDelay}}>
                <img src={`card-images/card-image-${imageId}.jpg`} />
                <h2>{title}</h2>
                <p>{desc}</p>
            </div>
        )
    }


    return (
        <div className={styles.holder}>
            <div className={styles["text-section-holder"]}>
                <h1 className={styles.title}>{mainTitle}</h1>
                <p className={styles.desc}>Discover seamless and secure checking services designed to meet your financial needs with our comprehensive suite of banking solutions.</p>
                <button className={styles.button}>Open Account</button>
            </div>
            <div className={styles["card-holder"]}>
                <OptionCard title="Pay with Crypto" imageId="1" desc="Pay with over 50 cryptocurrencies anywhere in the world."/>
                <OptionCard title="SecureSave® Bonus" imageId="2" desc="Save as you go with SecureSave® and earn bonus cashback." />
                <OptionCard title="Top Rated Safety" imageId="3" desc="World class security and transperency ensures our user never get rugged." />
            </div>
        </div>
    )
}


export default CardOptions;