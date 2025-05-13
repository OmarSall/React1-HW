import FeatureSection from './FeatureSection';

export default function FeatureList({ features }) {
    return (
        <>
            {features.map((feature) => (
                <FeatureSection
                    key={feature.id}
                    feature={feature}
                    reverse={feature.id % 2 !== 0}
                    isThird={feature.id === '2'}
                />
            ))}
        </>
    );
}
