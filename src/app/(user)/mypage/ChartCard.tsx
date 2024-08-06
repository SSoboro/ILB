'use client';

import Link from 'next/link';
import { Bar, BarChart, LabelList, XAxis } from 'recharts';
import {
    type ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from '@/components/ui/chart';

interface ChartData {
    date: string;
    height: number;
    weight: number;
}

const chartData: ChartData[] = [
    { date: '1/08', height: 49.1, weight: 3.2 },
    { date: '2/11', height: 53.7, weight: 4.21 },
    { date: '3/06', height: 57.2, weight: 5.1 },
    { date: '4/07', height: 59.8, weight: 5.8 },
    { date: '5/23', height: 62.1, weight: 6.4 },
    { date: '6/17', height: 64, weight: 6.9 },
];

// height, weight 차이값 비율 조정 스케일링
const convertedChartData = chartData.map(data => ({
    date: data.date,
    heightValue: data.height,
    weightValue: data.weight,
    height: Math.log(data.height + 1) * 100,
    weight: Math.log(data.weight + 1) * 100,
}));

const chartConfig = {
    height: {
        label: '키',
        color: '#9BD9A8',
    },
    weight: {
        label: '몸무게',
        color: '#FF8087',
    },
} satisfies ChartConfig;

export default function ChartCard() {
    return (
        <>
            <div className='flex justify-between items-end mb-4 text-sm'>
                <span className='font-bold'>우리 아이 성장 그래프</span>
                <Link
                    className='text-10 font-medium text-txt-foreground leading-3'
                    href={''}>
                    아이 정보 수정하기
                </Link>
            </div>
            <ChartContainer
                config={chartConfig}
                className='mb-5 p-4 h-[230px] w-full bg-card rounded-2xl'>
                <BarChart data={convertedChartData}>
                    <XAxis
                        className='text-xs'
                        dataKey='date'
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <ChartLegend content={<ChartLegendContent />} />
                    <Bar dataKey='height' fill='var(--color-height)' radius={4}>
                        <LabelList dataKey='heightValue' position='top' />
                    </Bar>
                    <Bar dataKey='weight' fill='var(--color-weight)' radius={4}>
                        <LabelList dataKey='weightValue' position='top' />
                    </Bar>
                </BarChart>
            </ChartContainer>
        </>
    );
}
