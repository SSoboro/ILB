import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function BabyName() {
    return (
        <>
            <h1 className='text-lg text-center font-medium'>
                가입을 축하드려요!
            </h1>
            <p className='text-lg text-center font-medium mt-5 mb-24'>
                아이의 닉네임을 입력해주세요
            </p>
            <Label
                htmlFor='babyNickname'
                className='text-base text-txt-foreground'>
                아이 닉네임
            </Label>
            <Input
                id='babyNickname'
                className='border-0 border-b-[1px] rounded-none p-[5px] text-xl border-txt-foreground mr-28 mt-6 mb-60'
                type='text'
                placeholder='닉네임을 입력해주세요'
            />
        </>
    );
}
