import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/Carousel';
import BannerItem from './BannerItem';

export default function Banner() {
    return (
        <article>
            <Carousel>
                <CarouselContent>
                    {Array.from({ length: 3 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <BannerItem />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </article>
    );
}
