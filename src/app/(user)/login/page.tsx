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

//& 수정 필요 (zod)
const FormSchema = z.object({
    email: z.string().min(2, {
        message: '올바른 이메일 형식이 아닙니다.',
    }),
    password: z.string().min(2, {
        message: '비밀번호 제대로 가자',
    }),
});

export default function Login() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    //& 수정 필요 (toast)
    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
            title: `로그인 성공!
					반갑습니다 000님`,
            description: (
                <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
                    <code className='text-white'>
                        {JSON.stringify(data, null, 2)}
                    </code>
                </pre>
            ),
        });
    }

    return (
        <div>
            <Image
                src='/vercel.svg'
                alt='카카오톡 로그인'
                width={40}
                height={40}
            />
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className='w-full space-y-6 p-4'>
                    <FormField
                        control={form.control}
                        name='email'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>이메일</FormLabel>
                                <FormControl>
                                    <Input
                                        className='border-0 border-b-[1px] rounded-none p-1'
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
                        name='password'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>비밀번호</FormLabel>
                                <FormControl>
                                    <Input
                                        className='border-0 border-b-[1px] rounded-none p-1 w-[350px]'
                                        type='password'
                                        placeholder='비밀번호를 입력해주세요'
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type='submit'>로그인</Button>
                </form>
            </Form>
            <hr />
            <p className=''>소셜 로그인</p>
            <div className='flex justify-between px-10'>
                <Image
                    src='/vercel.svg'
                    alt='카카오톡 로그인'
                    width={40}
                    height={40}
                />
                <Image
                    src='/vercel.svg'
                    alt='네이버 로그인'
                    width={40}
                    height={40}
                />
                <Image
                    src='/vercel.svg'
                    alt='구글 로그인'
                    width={40}
                    height={40}
                />
            </div>
            <Toaster />
        </div>
    );
}
