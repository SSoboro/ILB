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

//# 비밀번호 조건 정규표현식
const passwordRegex =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$&*?!%])[A-Za-z\d!@$%&*?]{8,15}$/;

//& 수정 필요 (zod) : destructive 글로벌 css 넣어주면 됨
const FormSchema = z
    .object({
        name: z
            .string()
            .min(2, { message: '2글자 이상 입력해 주세요.' })
            .max(10, { message: '10글자 이하 입력해 주세요.' }),

        email: z
            .string()
            .email({ message: '이메일을 올바르게 입력해 주세요.' }),

        password: z
            .string()
            .min(8, { message: '8자리 이상 입력해 주세요.' })
            .max(15, { message: '15자리 이하 입력해 주세요.' })
            .regex(passwordRegex, {
                message:
                    '영문, 숫자, 특수문자(~!@#$%^&*)를 모두 조합해 주세요.',
            }),

        passwordCheck: z
            .string()
            .nonempty({ message: '비밀번호를 재입력해 주세요.' }),

        phone: z
            .string()
            .length(11, { message: '핸드폰 번호는 11자리여야 합니다.' })
            .regex(/^010/, {
                message: "핸드폰 번호는 '010'으로 시작해야 합니다.",
            })
            .refine(value => !isNaN(Number(value)), {
                message: '핸드폰 번호는 숫자 형식이어야 합니다.',
            }),

        certificationCode: z.string().min(2, {
            message: '아직 구현되지 않았습니다.',
        }),
    })

    .refine(data => data.password === data.passwordCheck, {
        path: ['passwordCheck'],
        message: '비밀번호가 일치하지 않습니다.',
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
                <h1 className='text-center mb-[34px] font-bold'>회원가입</h1>
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
                                            className='border-0 border-b-[1px] rounded-none p-[5px] border-txt-foreground'
                                            type='email'
                                            placeholder='이름을 입력해주세요'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
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
                                            className='border-0 border-b-[1px] rounded-none p-[5px] border-txt-foreground'
                                            type='email'
                                            placeholder='이메일을 입력해주세요'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
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
                                            className='border-0 border-b-[1px] rounded-none p-[5px] border-txt-foreground'
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
                                            className='border-0 border-b-[1px] rounded-none p-[5px] border-txt-foreground'
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
                            name='phone'
                            render={({ field }) => (
                                <FormItem className='mb-6'>
                                    <FormLabel
                                        htmlFor='phone'
                                        className='text-txt-foreground'>
                                        휴대폰 번호
                                    </FormLabel>
                                    <FormControl className='flex'>
                                        <div className='relative'>
                                            <Input
                                                id='phone'
                                                className='border-0 border-b-[1px] rounded-none p-[5px] border-txt-foreground mr-28'
                                                type='text'
                                                placeholder='휴대폰 번호를 입력해주세요'
                                                {...field}
                                            />
                                            <Button
                                                type='submit'
                                                className='font-notoSansKr absolute right-0 bottom-[0.0625rem]'
                                                size={'sm'}
                                                fontSize={'sm'}
                                                fontWeight={'sm'}>
                                                인증번호 요청
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
                                    <FormLabel className='sr-only'>
                                        휴대폰 인증 번호
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            className='border-0 border-b-[1px] rounded-none p-[5px] border-txt-foreground'
                                            type='password'
                                            placeholder='인증번호를 입력해주세요'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button
                            type='submit'
                            className='font-notoSansKr my-[60px] box-border'
                            variant={'default'}>
                            다음
                        </Button>
                    </form>
                </Form>
                <Toaster />
            </section>
        </div>
    );
}
