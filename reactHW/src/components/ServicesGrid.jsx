import styles from './ServicesGrid.module.css'

const services = [
    {
        id: '0',
        title: 'Mobile Apps',
        description: 'Reliable & Responsive',
        image: '/webApps.svg',
    },
    {
        id: '1',
        title: 'SEO',
        description: 'Optimized Visibility',
        image: '/SEO.svg',
    },
    {
        id: '2',
        title: 'AR/VR Solutions',
        description: 'Immersive Experiences',
        image: '/VR.svg',
    },
    {
        id: '3',
        title: 'Mobile Applications',
        description: 'Smart Solutions',
        image: '/MobileApps.svg',
    }
]

export default function ServiceGrid() {
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