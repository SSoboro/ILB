import Banner from '@/components/main/banner/Banner';
import Footer from '@/components/main/Footer';
import ProductBannerIntro from '@/components/main/ProductBannerIntro';
import ProductCertification from '@/components/main/ProductCertification';
import ProductIntro from '@/components/main/ProductIntro';
import ProductTutorial from '@/components/main/ProductTutorial';
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
