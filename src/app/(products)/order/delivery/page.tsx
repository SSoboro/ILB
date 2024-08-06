'use client';

import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/components/ui/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

//& 수정 필요 (zod) : destructive 글로벌 css 넣어주면 됨
const FormSchema = z.object({
    name: z.string().min(2, {
        message: '올바른 이메일 형식이 아닙니다.',
    }),
    email: z.string().min(2, {
        message: '비밀번호 제대로 가자',
    }),
    password: z.string().min(2, {
        message: '비밀번호 제대로 가자',
    }),
    passwordCheck: z.string().min(2, {
        message: '비밀번호 제대로 가자',
    }),
    phone: z.string().min(2, {
        message: '비밀번호 제대로 가자',
    }),
    certificationCode: z.string().min(2, {
        message: '비밀번호 제대로 가자',
    }),
});

export default function DeliveryInfo() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
            passwordCheck: '',
            phone: '',
            certificationCode: '',
        },
    });

    //& 수정 필요 (toast)
    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
            //   title: `로그인 성공!
            // 반갑습니다 000님`,
            description: (
                <pre className='mt-2 w-[340px] rounded-md bg-primary p-4'>
                    반갑다능
                </pre>
            ),
        });
    }

    return (
        <div>
            <section>
                <h1 className='text-center mb-10 font-bold text-[28px]'>
                    배송정보를 입력하세요
                </h1>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className='w-full'>
                        <FormField
                            control={form.control}
                            name='name'
                            render={({ field }) => (
                                <FormItem className='mb-8'>
                                    <FormLabel className='text-txt-foreground'>
                                        받는 사람
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            className='border-0 border-b-[1px] rounded-none p-[5px] text-[12px] border-txt-foreground'
                                            type='email'
                                            placeholder='이름을 입력해주세요'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage className='--destructive' />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='email'
                            render={({ field }) => (
                                <FormItem className='mb-8'>
                                    <FormLabel className='text-txt-foreground'>
                                        연락처
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            className='border-0 border-b-[1px] rounded-none p-[5px] text-[12px] border-txt-foreground'
                                            type='email'
                                            placeholder='이메일을 입력해주세요'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage className='--destructive' />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='phone'
                            render={({ field }) => (
                                <FormItem className='mb-6'>
                                    <FormLabel className='text-txt-foreground'>
                                        주소
                                    </FormLabel>
                                    <FormControl className='flex'>
                                        <div className='relative'>
                                            <Input
                                                className='border-0 border-b-[1px] rounded-none p-[5px] text-[12px] border-txt-foreground mr-28'
                                                type='password'
                                                {...field}
                                            />
                                            <Button
                                                type='submit'
                                                className='font-notoSansKr absolute right-0 bottom-[0.0625rem]'
                                                size={'sm'}
                                                fontSize={'sm'}
                                                fontWeight={'sm'}>
                                                검색
                                            </Button>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='certificationCode'
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            className='border-0 border-b-[1px] rounded-none p-[5px] text-[12px] border-txt-foreground'
                                            type='password'
                                            placeholder='상세 주소를 입력해주세요'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button
                            type='submit'
                            className='font-notoSansKr mt-[133px]'
                            variant={'default'}>
                            수정하기
                        </Button>
                    </form>
                </Form>
                <Toaster />
            </section>
        </div>
    );
}
