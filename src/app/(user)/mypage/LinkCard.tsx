import Link from 'next/link';
import { GoChevronRight } from 'react-icons/go';

export default function LinkCard({ title }: { title: string }) {
    return (
        <div className='flex justify-between items-center py-[27px] px-4 mb-4 w-full bg-card rounded-2xl'>
            <span className='text-base leading-[23px] text-[#4c4646]'>
                {title}
            </span>
            <Link href={''}>
                <GoChevronRight className='w-6 h-6 text-[#4C4646]' />
            </Link>
        </div>
    );
}
