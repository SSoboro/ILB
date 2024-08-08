import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function BabyBody() {
    return (
        <>
            <div className='flex justify-between gap-6'>
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
        </>
    );
}
