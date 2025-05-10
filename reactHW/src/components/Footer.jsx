import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.topSectionWrapper}>
                <div className={styles.topSection}>
                    <div className={styles.leftBlock}>
                        <div className={styles.logo}>LOGO</div>
                        <p>Experienced mobile and web application developers.</p>
                    </div>
                    <div className={styles.rightBlock}>
                        <h4>Contact Us</h4>
                        <p>Email: hello@example.com</p>
                        <p>Phone: +1 234 567 890</p>
                    </div>
                </div>
            </div>
            <p className={styles.copyright}>© 2025 Agency. All rights reserved.</p>
        </footer>
    )
}