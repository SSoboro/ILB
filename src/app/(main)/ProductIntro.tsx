import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../../components/ui/button';

export default function ProductIntro() {
    return (
        <article className='py-[62px] px-5 flex flex-col items-center gap-[60px]'>
            <h2 className='self-start text-2xl'>
                <span className='text-3xl font-bold'>우리 아이를 위한</span>
                <br />
                맞춤형 성장 패키지
            </h2>
            <Image
                className='mx-auto'
                src={'/mobileMockup.svg'}
                width={190}
                height={384}
                alt='moble sample image'
            />
            <Link href={'/list'}>
                <Button
                    variant={'default'}
                    size={'lg'}
                    radius={'lg'}
                    fontSize={'lg'}>
                    상품 보러가기
                </Button>
            </Link>
        </article>
    );
}
