import BannerItem from './BannerItem';
import MultiCarousel from './Carousel';

export default function Banner() {
    return (
        <article>
            <MultiCarousel>
                <BannerItem />
                <BannerItem />
                <BannerItem />
                <BannerItem />
            </MultiCarousel>
        </article>
    );
}
