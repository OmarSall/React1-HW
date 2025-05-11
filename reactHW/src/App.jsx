import styles from './App.module.css';

import Header from './components/Header';
// import HeroSection from './components/HeroSection';
// import ServicesGrid from './components/ServicesGrid';
// import IntroText from './components/IntroText';
import FeatureTitle from './components/FeatureTitle';
import FeatureSection from './components/FeatureSection';
import DualCardsSection from './components/DualCardsSection';
import PartnerLogos from './components/PartnerLogos';
import Footer from './components/Footer';

const features = [
    {
        id: '0',
        title: 'Custom Web Solutions',
        description: 'We have skilled team dedicated to providing custom web solutions. We design and develop innovative websites and web applications tailored to your business objectives, ensuring seamless functionality and exceptional user experience across all devices.',
        image: '/feature1.svg',
    },
    {
        id: '1',
        title: 'Innovative Digital Solutions',
        description: 'We offer cutting-edge digital solutions, combining advanced technology and creative design to build mobile apps, websites, and web applications that help businesses thrive in the digital world.',
        image: '/feature2.svg',
    },
    {
        id: '2',
        title: 'Transformative VR Experiences',
        description: 'We creates immersive virtual reality experiences that push the boundaries of innovation, offering interactive solutions designed to engage users and revolutionize industries.',
        image: '/feature3.svg',
    },
]

function App() {
    return (
        <div className={styles.appContainer}>
            <Header/>
            {/*<HeroSection />*/}
            {/*<ServicesGrid />*/}
            {/*<IntroText />*/}
            <FeatureTitle/>
            {features.map(feature => (
                <FeatureSection
                    key={feature.id}
                    feature={feature}
                    reverse={feature.id % 2 !== 0}
                    isThird={feature.id === '2'}
                />
            ))}
            <DualCardsSection/>
            <PartnerLogos/>
            <Footer/>
        </div>
    )
}

export default App
