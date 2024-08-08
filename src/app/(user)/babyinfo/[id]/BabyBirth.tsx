import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function BabyBirth() {
    return (
        <>
            <Label htmlFor='babyBirthday' className='text-base'>
                생년월일
            </Label>
            <Input
                id='babyBirthday'
                className='text-xl border-0 border-b-[1px] rounded-none p-[5px] sborder-txt-foreground mr-28 mt-6'
                type='text'
                placeholder='20240407'
            />
        </>
    );
}
