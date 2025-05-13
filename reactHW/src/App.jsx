import styles from './App.module.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import services from './data/services';
import ServicesGrid from './components/ServicesGrid';
import FeatureTitle from './components/FeatureTitle';
import DualCardsSection from './components/DualCardsSection';
import PartnerLogos from './components/PartnerLogos';
import Footer from './components/Footer';
import features from './data/features';
import FeatureList from './components/FeatureList';

function App() {
    return (
        <div className={styles.appContainer}>
            <Header/>
            <HeroSection />
            <ServicesGrid services={services}/>
            <FeatureTitle />
            <FeatureList features={features} />
            <DualCardsSection/>
            <PartnerLogos/>
            <Footer/>
        </div>
    )
}

export default App
