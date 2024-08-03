import Image from 'next/image';
import bannerImg from '@/assets/banner_1.jpg';

export default function BannerItem() {
    return (
        <div className='relative'>
            <h1 className='absolute top-[100px] left-[40px] text-2xl font-bold'>
                첫 구독 할인
            </h1>
            <p className='absolute top-[135px] left-[40px] text-xl'>
                오픈기념 할인행사
            </p>
            <Image src={bannerImg} alt='banner image' />
        </div>
    );
}
