import styles from './ServicesGrid.module.css'

export default function ServiceGrid( {services}) {
    return (
        <div className={styles.servicesGrid}>
            {services.map(({ id, title, description, image}) => (
                <div key={id} className={styles.service}>
                    <div className={styles.iconContainer}>
                        <img src={image} alt={title} className={styles.icon} />
                    </div>
                    <div className={styles.textContainer}>
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}