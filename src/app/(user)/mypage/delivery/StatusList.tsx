import StatusItem from './StatusItem';

export interface StatusInfo {
    date: string;
    time: string;
    status: string;
    location: string;
    isActive: boolean;
}

//@ 배송 상태 더미 데이터
const statusInfo: StatusInfo[] = [
    {
        date: '2024-08-06',
        time: '13:43:21',
        status: '배송완료',
        location: '서울 강남구',
        isActive: true,
    },
    {
        date: '2024-08-06',
        time: '10:57:55',
        status: '배송 출발',
        location: '강남 Unit',
        isActive: false,
    },
    {
        date: '2024-08-06',
        time: '07:07:17',
        status: '배송 진행중',
        location: '강남 Unit',
        isActive: false,
    },
    {
        date: '2024-08-05',
        time: '18:30:56',
        status: '배송 진행중',
        location: '성수 Bub',
        isActive: false,
    },
    {
        date: '2024-08-05',
        time: '11:11:11',
        status: '집하',
        location: '성수 Bub',
        isActive: false,
    },
];

export default function StatusList() {
    return (
        <div className='mt-10'>
            {statusInfo.map((data, i) => (
                <StatusItem data={data} key={i} />
            ))}
        </div>
    );
}
