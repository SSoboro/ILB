import Image from 'next/image';
import { Button } from '../../components/ui/button';

export default function ProductIntro() {
    return (
        <article className='py-[62px] px-5 flex flex-col items-center gap-[60px]'>
            <div className='w-full'>
                <p className='text-3xl font-bold'>우리 아이를 위한</p>
                <p className='text-2xl'>맞춤형 성장 패키지</p>
            </div>
            <Image
                className='mx-auto'
                src={'/mobileMockup.svg'}
                width={190}
                height={384}
                alt=''
            />
            <Button
                variant={'default'}
                size={'lg'}
                radius={'lg'}
                fontSize={'lg'}>
                상품 보러가기
            </Button>
        </article>
    );
}
