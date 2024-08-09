import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export default function UpdateBodyInfo() {
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
                아이의 몸무게와 키를 알려주세요!
            </h1>
            <div className='flex justify-between gap-6 mb-60'>
                <article className='flex items-end'>
                    <Input
                        id='babyHeight'
                        className='border-0 border-b-[1px] rounded-none p-[5px] text-xl border-txt-foreground font-light placeholder:text-lg'
                        type='text'
                        placeholder='키'
                    />
                    <Label htmlFor='babyHeight' className='text-xl'>
                        cm
                    </Label>
                </article>
                <article className='flex items-end'>
                    <Input
                        id='babyWeight'
                        className='border-0 border-b-[1px] rounded-none text-xl p-[5px] border-txt-foreground font-light placeholder:text-lg'
                        type='text'
                        placeholder='몸무게'
                    />
                    <Label htmlFor='babyWeight' className='text-xl'>
                        kg
                    </Label>
                </article>
            </div>
            <Button
                type='button'
                className='font-notoSansKr my-[60px] box-border bottom-0'
                variant={'default'}>
                저장하기
            </Button>
        </section>
    );
}
