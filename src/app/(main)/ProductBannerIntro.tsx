import Image from 'next/image';

export default function ProductBannerIntro() {
    return (
        <article className='relative'>
            <h2 className='absolute top-[70px] px-5 text-3xl font-bold'>
                우리 아이에게만
            </h2>
            <p className='absolute top-[110px] px-5 text-2xl'>
                집중할 수 있도록
            </p>
            <Image
                src={'/banner_2.jpg'}
                width={375}
                height={753}
                alt='intro image'
            />
        </article>
    );
}
