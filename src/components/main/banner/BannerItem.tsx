import Image from 'next/image';
import bannerImg from '@/assets/banner_1.jpg';

export default function BannerItem() {
    return (
        <div className='relative'>
            <h2 className='absolute px-10 top-[100px] text-3xl font-bold'>
                첫 구독 할인
            </h2>
            <p className='absolute px-10 top-[135px] text-2xl'>
                오픈기념 특별할인
            </p>
            <Image src={bannerImg} alt='banner image' />
        </div>
    );
}
