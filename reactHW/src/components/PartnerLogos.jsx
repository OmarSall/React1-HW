import styles from './PartnerLogos.module.css';
import beneoshop from '../assets/beneoshop.svg';
import caspio from '../assets/caspio.svg';
import hyperGrid from '../assets/hyperGrid.svg';
import leoTrippi from '../assets/leoTrippi.svg';

export default function PartnerLogos() {
    return (
        <div className={styles.logosContainer}>
            <p>You will be in good company</p>
            <div className={styles.logosSectionImages}>
                <img src={beneoshop} alt="beneoshop" />
                <img src={caspio} alt="caspio" />
                <img src={hyperGrid} alt="hyperGrid" />
                <img src={leoTrippi} alt="leoTrippi" />
            </div>
        </div>
    )
}