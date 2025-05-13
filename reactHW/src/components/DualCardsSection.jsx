import styles from './DualCardsSection.module.css'

export default function DualCardsSection() {
    return (
        <div className={styles.dualCardSection}>
            <div className={`${styles.box} ${styles.light}`}>
                <h2>Innovative Mobile and Web Development, Delivered.</h2>
                <p>We are a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. </p>
            </div>
            <div className={`${styles.box} ${styles.dark}`}>
                <h2>Crafting Exceptional Mobile and Web Solutions</h2>
                <p>We are a dynamic team of seasoned professionals specializing in crafting cutting-edge mobile apps, web applications, and responsive websites. With a portfolio spanning dozens of successful projects, we deliver tailored solutions for clients worldwide. </p>
            </div>
        </div>
    );
}