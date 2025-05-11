import styles from './FeatureSection.module.css'

export default function FeatureSection({ feature, reverse }) {
    return (
        <div className={`styles.featureSection ${reverse ? 'reverse' : ''}`}>
            <div className={styles.featureText}>
                <h2>{feature.title}</h2>
                <p>{feature.description}</p>
            </div>
            <div className={styles.featureImage}>
                <img src={feature.image} alt={feature.title} />
            </div>
        </div>
    );
}