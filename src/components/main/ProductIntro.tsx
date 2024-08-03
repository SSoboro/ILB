import Image from 'next/image';
import bannerImg from '@/assets/banner_2.jpg';
import mobileImg from '@/assets/mobileMockup.svg';
import { Button } from '../ui/button';

export default function ProductIntro() {
    return (
        <>
            <div className='relative'>
                <h1 className='absolute top-[70px] left-[30px] text-2xl font-bold'>
                    우리 아이에게만
                </h1>
                <p className='absolute top-[110px] left-[30px] text-xl'>
                    집중할 수 있도록
                </p>
                <Image src={bannerImg} alt='intro image' />
            </div>
            <div className='py-[62px] px-[20px] flex flex-col items-center gap-[60px]'>
                <div className='w-full'>
                    <p className='text-2xl font-bold'>우리 아이를 위한</p>
                    <p className='text-xl'>맞춤형 성장 패키지</p>
                </div>
                <Image className='mx-auto' src={mobileImg} alt='' />
                <Button
                    variant={'default'}
                    size={'lg'}
                    radius={'lg'}
                    fontSize={'lg'}>
                    상품 보러가기
                </Button>
            </div>
        </>
    );
}
