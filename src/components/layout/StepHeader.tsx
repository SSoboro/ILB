import Link from 'next/link';
import { GoChevronRight, GoArrowLeft } from 'react-icons/go';

interface PaymentStatus {
    label: string;
    isActive: boolean;
    component: React.ReactNode;
}

const PaymentStatuses: PaymentStatus[] = [
    {
        label: '입금/결제',
        isActive: false,
        component: <p>아이정보</p>,
    },
    {
        label: '배송준비중',
        isActive: true,
        component: <p>배송정보</p>,
    },
    {
        label: '배송중',
        isActive: false,
        component: <p>결제수단</p>,
    },
];

export default function StepHeader() {
    return (
        <header className='fixed py-2.5 px-5 w-[375px] top-0 bg-transparent z-10'>
            <nav className='flex items-center'>
                <Link href={'/'}>
                    <GoArrowLeft className='w-6 h-6 ' />
                </Link>
                <div className='ml-2 flex items-center gap-2.5'>
                    {PaymentStatuses.map((status, i) => (
                        <>
                            <div
                                key={i}
                                className={`${status.isActive ? '' : 'text-txt-foreground'}`}>
                                {status.component}
                            </div>
                            {i < PaymentStatuses.length - 1 && (
                                <GoChevronRight className='text-txt-foreground' />
                            )}
                        </>
                    ))}
                </div>
            </nav>
        </header>
    );
}
