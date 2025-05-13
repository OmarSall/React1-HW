import styles from './FeatureTitle.module.css'

export default function FeatureTitle() {
    return (
            <div className={styles.featureSectionIntro}>
                <div className={styles.title}>
                    <h2>Your Partner for Cutting-Edge App Development.</h2>
                </div>
                <div className={styles.description}>
                    <p>We deliver innovative, high-quality mobile and web applications tailored to your vision.</p>
                </div>
            </div>
    );
}