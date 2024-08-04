import Banner from '@/components/main/banner/Banner';
import Footer from '@/components/main/Footer';
import ProductCertification from '@/components/main/ProductCertification';
import ProductIntro from '@/components/main/ProductIntro';
import Tutorial from '@/components/main/Tutorial';
export default function Home() {
    return (
        <>
            <main>
                <Banner />
                <ProductIntro />
                <Tutorial />
                <ProductCertification />
            </main>
            <Footer />
        </>
    );
}
