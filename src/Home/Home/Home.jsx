
import MapSection from '../../components/MapSection/MapSection';
import PriceCard from '../../components/PriceCard/PriceCard';

import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Categories></Categories>
            <PriceCard></PriceCard>
            <MapSection></MapSection>

        </div>
    );
};

export default Home;