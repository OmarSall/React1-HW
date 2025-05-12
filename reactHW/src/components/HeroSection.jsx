import styles from './HeroSection.module.css'

export default function HeroSection() {
    return (
        <div className={styles.heroSection}>
        <div className={styles.text}>
            <h2>Experienced
                <span className={styles.blueText}> mobile and web</span> applications and website builders.</h2>
            <p>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders with dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS.</p>
        </div>
        <div className={styles.imageSection}>
            <img src='/sittingBill.svg' alt='heroBill' />
        </div>
        </div>
    );
}