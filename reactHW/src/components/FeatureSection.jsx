import styles from './FeatureSection.module.css'

export default function FeatureSection({ feature, reverse, isThird }) {
    const [firstWord, ...rest] = feature.title.split(' ');
    const restOfTitle = rest.join(' ');
    return (
        <div className={`${styles.featureSection} ${reverse ? styles.reverse : ''} ${isThird ? styles.wideText : ''}`}>
            <div className={styles.featureText}>
                <h2>
                    <span className={styles.firstWord}>{firstWord}</span> {restOfTitle}
                </h2>
                <p>{feature.description}</p>
            </div>
            <div className={`${styles.featureImage} ${isThird ? styles.smallImage : ''}`}>
                <img src={feature.image} alt={feature.title} />
            </div>
        </div>
    );
}