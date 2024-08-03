import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/Carousel';
import BannerItem from './BannerItem';

export default function Banner() {
    return (
        <Carousel>
            <CarouselContent>
                {Array.from({ length: 3 }).map((_, index) => (
                    <CarouselItem key={index} className='pl-0'>
                        <BannerItem />
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
}
