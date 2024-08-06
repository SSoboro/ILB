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

export default function Signup() {
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
                <Image
                    src={'/logo_M.svg'}
                    alt='ILB'
                    width={60}
                    height={60}
                    className='mb-2 mx-auto'
                />
                <h1 className='text-center mb-[34px] font-bold'>
                    내 정보 수정
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
                                        이름
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
                                        이메일
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
                            name='password'
                            render={({ field }) => (
                                <FormItem className='mb-8'>
                                    <FormLabel className='text-txt-foreground'>
                                        비밀번호
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            className='border-0 border-b-[1px] rounded-none p-[5px] text-[12px] border-txt-foreground'
                                            type='password'
                                            placeholder='비밀번호를 입력해주세요'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='passwordCheck'
                            render={({ field }) => (
                                <FormItem className='mb-8'>
                                    <FormLabel className='text-txt-foreground'>
                                        비밀번호 확인
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            className='border-0 border-b-[1px] rounded-none p-[5px] text-[12px] border-txt-foreground'
                                            type='password'
                                            placeholder='비밀번호를 한번 더 입력해주세요'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='passwordCheck'
                            render={({ field }) => (
                                <FormItem className='mb-8'>
                                    <FormLabel className='text-txt-foreground'>
                                        휴대폰 번호
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            className='border-0 border-b-[1px] rounded-none p-[5px] text-[12px] border-txt-foreground'
                                            type='text'
                                            placeholder='휴대폰 번호를 입력해주세요'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button
                            type='submit'
                            className='font-notoSansKr mt-[60px] box-border'
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
