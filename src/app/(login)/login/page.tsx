'use client';
import HoonieLogo from '../../components/icon/HoonieLogo';
import Link from 'next/link';
import { login } from '@/src/utils/supabase/serverActions';
import { useRouter } from 'next/navigation';
import { FormEvent, useState, ChangeEvent } from 'react';
import { isValidEmail } from '@/src/lib/api';

export default function LoginPage() {
	const router = useRouter();
	const [error, setError] = useState<string | null>(null);
	const [emailError, setEmailError] = useState<string | null>(null);
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [isEmailInvalid, setIsEmailInvalid] = useState<boolean>(false);
	const [isLoginFailed, setIsLoginFailed] = useState<boolean>(false);

	const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
		setEmailError(null);
		setIsEmailInvalid(false);
		setIsLoginFailed(false);
	};

	const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
		setIsLoginFailed(false);
	};

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (!isValidEmail(email)) {
			setEmailError('이메일 형식을 확인해 주세요');
			setIsEmailInvalid(true);
			return;
		}

		if (!password) {
			setError('비밀번호를 입력해주세요.');
			return;
		}

		setEmailError(null);
		setError(null);
		setIsEmailInvalid(false);
		setIsLoginFailed(false);

		const formData = new FormData();
		formData.append('email', email);
		formData.append('password', password);

		const result = await login(formData);
		if (result.success) {
			router.push('/dashboard');
		} else {
			setError('로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.');
			setIsLoginFailed(true);
		}
	};

	const getInputClassName = (isError: boolean) =>
		`block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ${
			isError ? 'ring-red-500' : 'ring-gray-300'
		} placeholder:text-gray-400 focus:ring-2 focus:ring-inset ${
			isError ? 'focus:ring-red-500' : 'focus:ring-gray-600'
		} focus-visible:outline-none dark:text-white sm:text-sm sm:leading-6`;

	return (
		<div className='flex h-dvh flex-col items-center justify-center px-6 lg:px-8'>
			<div className='flex flex-col items-center gap-2 sm:mx-auto sm:w-full sm:max-w-sm'>
				<HoonieLogo />
				<h2 className='text-center text-2xl font-semibold tracking-tight text-gray-900 dark:text-white'>
					Sign in for Administrator
				</h2>
			</div>

			<div className='mt-5 sm:mx-auto sm:w-full sm:max-w-sm'>
				<form className='space-y-6' onSubmit={handleSubmit} noValidate>
					<div>
						<label
							htmlFor='email'
							className='block text-sm font-medium leading-6 text-gray-900 dark:text-white'
						>
							Email
						</label>
						<div className='mt-2'>
							<input
								id='email'
								name='email'
								type='email'
								value={email}
								onChange={handleEmailChange}
								className={getInputClassName(isEmailInvalid || isLoginFailed)}
							/>
						</div>
						<div className='mt-2 h-2'>
							{emailError && (
								<p className='text-sm text-red-600' role='alert'>
									{emailError}
								</p>
							)}
						</div>
					</div>

					<div>
						<div className='flex items-center justify-between'>
							<label
								htmlFor='password'
								className='block text-sm font-medium leading-6 text-gray-900 dark:text-white'
							>
								Password
							</label>
						</div>
						<div className='mt-2'>
							<input
								id='password'
								name='password'
								type='password'
								value={password}
								onChange={handlePasswordChange}
								className={getInputClassName(isLoginFailed)}
							/>
						</div>
					</div>

					<div>
						<button
							type='submit'
							className='flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600'
						>
							Sign in
						</button>
					</div>
				</form>
				<div className='mt-3 h-2'>
					{error && <p className='text-center text-sm text-red-600'>{error}</p>}
				</div>
				<div className='mt-3 flex justify-center'>
					<Link
						href='/'
						className='hover: border-b-2 border-b-white  text-center font-semibold hover:border-b-gray-600 hover:text-gray-600'
					>
						← Back to blog
					</Link>
				</div>
			</div>
		</div>
	);
}
