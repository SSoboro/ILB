'use server';

import { UserForm } from '@/types';

const SERVER = process.env.NEXT_PUBLIC_API_SERVER;

type LoginForm = {
    email: string;
    password: string;
};

export async function signup(formData: UserForm) {
    // 회원 가입
    const res = await fetch(`${SERVER}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'client-id': '05-ILB',
        },
        body: JSON.stringify(formData),
    });

    const resData = await res.json();

    return resData;
}
