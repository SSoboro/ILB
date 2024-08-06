import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Image from 'next/image';

export default function BabyBody() {
    return (
        <section>
            <Image
                src={'/logo_M.svg'}
                alt='ILB'
                width={60}
                height={60}
                className='mb-[18px] mx-auto'
            />
            <h1 className='text-lg text-center font-medium mb-40'>
                아이의 체중과 몸무게를 알려주세요!
            </h1>
            <div className='flex justify-between gap-6'>
                <article className='flex items-end'>
                    <Input
                        className='border-0 border-b-[1px] rounded-none p-[5px] text-xl border-txt-foreground font-light placeholder:text-lg'
                        type='text'
                        placeholder='키'
                    />
                    <Label className='text-xl'>cm</Label>
                </article>
                <article className='flex items-end'>
                    <Input
                        className='border-0 border-b-[1px] rounded-none text-xl p-[5px] border-txt-foreground font-light placeholder:text-lg'
                        type='text'
                        placeholder='몸무게'
                    />
                    <Label className='text-xl'>kg</Label>
                </article>
            </div>
            <Button
                type='button'
                className='font-notoSansKr fixed my-[60px] box-border bottom-0 active:scale-95 transition-transform duration-150'
                variant={'default'}>
                다음
            </Button>
        </section>
    );
}