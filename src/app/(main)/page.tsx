import Footer from '@/components/layout/Footer';
import Banner from './(banner)/Banner';
import ProductBannerIntro from './ProductBannerIntro';
import ProductCertification from './ProductCertification';
import ProductIntro from './ProductIntro';
import ProductTutorial from './ProductTutorial';

export default function Home() {
    return (
        <>
            <main>
                <Banner />
                <ProductBannerIntro />
                <ProductIntro />
                <ProductTutorial />
                <ProductCertification />
            </main>
            <Footer />
        </>
    );
}
