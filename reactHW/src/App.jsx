import styles from './App.module.css';
import Header from './components/Header';
// import HeroSection from './components/HeroSection';
// import ServicesGrid from './components/ServicesGrid';
// import IntroText from './components/IntroText';
// import FeatureSection from './components/FeatureSection';
// import DualCardsSection from './components/DualCardsSection';
// import PartnerLogos from './components/PartnerLogos';
import Footer from './components/Footer';


function App() {

  return (
    <div className={styles.container}>
      <Header />
      {/*<HeroSection />*/}
      {/*<ServicesGrid />*/}
      {/*<IntroText />*/}
      {/*<FeatureSection />*/}
      {/*<DualCardsSection />*/}
      {/*<PartnerLogos />*/}
      <Footer />
    </div>
  )
}

export default App
