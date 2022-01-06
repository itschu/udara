import {FeatureCard, FeaturesWrapper} from './styles';
import {features} from '../../resources/data';

const Features = () => {
    return (
        <FeaturesWrapper>
            {
                features.map((el, indx)=>(
                    <FeatureCard key={indx}>
                        
                    </FeatureCard>
                ))
            }
        </FeaturesWrapper>
    )
}

export default Features;
