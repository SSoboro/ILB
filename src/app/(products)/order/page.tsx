import { Button } from '@/components/ui/button';

export default function OrderPage() {
    return (
        <section>
            <h1 className='mt-7 font-bold text-[28px]'>
                우리 아이의 개월수에 맞는
                <br />
                물품을 보내드릴까요?
            </h1>
            <div className='mt-[150px] flex justify-between'>
                <Button
                    variant={'outline'}
                    size={'md'}
                    fontSize={'sm'}
                    fontWeight={'sm'}
                    radius={'md'}>
                    네, 보내주세요
                </Button>
                <Button
                    variant={'outline'}
                    size={'md'}
                    fontWeight={'sm'}
                    fontSize={'sm'}
                    radius={'md'}>
                    다른 개월수의 물품을
                    <br /> 받고 싶어요.
                </Button>
            </div>
            <Button className='mt-60 font-notoSansKr' variant={'default'}>
                다음
            </Button>
        </section>
    );
}
