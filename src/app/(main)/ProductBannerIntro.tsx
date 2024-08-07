import Image from 'next/image';

export default function ProductBannerIntro() {
    return (
        <article className='relative'>
            <h2 className='absolute px-5 top-[70px] text-2xl'>
                <span className='text-3xl font-bold'>우리 아이에게만</span>
                <br />
                집중할 수 있도록
            </h2>
            <Image
                src={'/banner_2.jpg'}
                width={375}
                height={753}
                alt='intro image'
            />
        </article>
    );
}
