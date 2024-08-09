// 서버 액션 정의
'use server';

import { signIn } from '@/auth';
import { redirect } from 'next/navigation';

// email/password 로그인
export async function signInWithCredentials(formData: FormData) {
    try {
        const result = await signIn('credentials', {
            email: formData.get('email') || '',
            password: formData.get('password') || '',
            redirect: false,
        });
        console.log('result', result);
        // redirect('')
    } catch (error) {
        console.error(error);
    }
    redirect('/');
}

export async function signInWithGithub(formData: FormData) {
    await signIn('github', { redirectTo: '/' });
}

export async function signInWithGoogle(formData: FormData) {
    await signIn('google', { redirectTo: '/' });
}

export async function signInWithNaver(formData: FormData) {
    await signIn('naver', { redirectTo: '/' });
}

export async function signInWithKakao(formData: FormData) {
    await signIn('kakao', { redirectTo: '/' });
}
