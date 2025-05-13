import styles from './Footer.module.css';
import FacebookIcon from '../assets/facebook.svg';
import InstagramIcon from '../assets/instagram.svg';
import TwitterIcon from '../assets/twitter.svg';
import LinkedInIcon from '../assets/linkedin.svg';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.topSectionWrapper}>
                <div className={styles.topSection}>
                    <div className={styles.leftBlock}>
                        <div className={styles.logo}>LOGO</div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <p>@Lorem</p>
                    </div>
                    <div className={styles.rightBlock}>
                        <h4>Contact Us</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        <p>+908 89097 890</p>
                    </div>
                    <div className={styles.socialIcons}>
                        <img src={FacebookIcon} alt='Facebook' />
                        <img src={InstagramIcon} alt='Instagram' />
                        <img src={TwitterIcon} alt='Twitter' />
                        <img src={LinkedInIcon} alt='LinkedIn' />
                    </div>
                </div>
            </div>
            <p className={styles.copyright}>© 2025 Agency. All rights reserved.</p>
        </footer>
    )
}