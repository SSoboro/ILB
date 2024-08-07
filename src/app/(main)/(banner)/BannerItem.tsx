import Image from 'next/image';

export default function BannerItem() {
    return (
        <div className='relative w-[375px] h-[753px]'>
            <h2 className='absolute px-5 top-[100px] text-2xl'>
                <span className='text-3xl font-bold'>첫 구독 할인</span>
                <br />
                오픈기념 특별할인
            </h2>
            <Image
                src={'/banner_1.jpg'}
                width={375}
                height={753}
                alt='banner image'
            />
        </div>
    );
}
