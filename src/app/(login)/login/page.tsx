import HoonieLogo from '../../components/icon/HoonieLogo';
import Link from 'next/link';
import { login } from '@/src/utils/supabase/serverActions';

export default async function LoginPage() {
	return (
		<div className='flex h-dvh flex-col items-center justify-center px-6 lg:px-8'>
			<div className='flex flex-col items-center gap-2 sm:mx-auto sm:w-full sm:max-w-sm'>
				<HoonieLogo />
				<h2 className='text-center text-2xl font-semibold tracking-tight text-gray-900'>
					Sign in for Administrator
				</h2>
			</div>

			<div className='mt-5 sm:mx-auto sm:w-full sm:max-w-sm'>
				<form className='space-y-6'>
					<div>
						<label
							htmlFor='email'
							className='block text-sm font-medium leading-6 text-gray-900'
						>
							Email
						</label>
						<div className='mt-2'>
							<input
								id='email'
								name='email'
								type='email'
								required
								className='block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-600 focus-visible:outline-gray-600 sm:text-sm sm:leading-6'
							/>
						</div>
					</div>

					<div>
						<div className='flex items-center justify-between'>
							<label
								htmlFor='password'
								className='block text-sm font-medium leading-6 text-gray-900'
							>
								Password
							</label>
						</div>
						<div className='mt-2'>
							<input
								id='password'
								name='password'
								type='password'
								required
								className='block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-600 focus-visible:outline-gray-600 sm:text-sm sm:leading-6'
							/>
						</div>
					</div>

					<div>
						<button
							type='submit'
							className='flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600'
							formAction={login}
						>
							Sign in
						</button>
					</div>
				</form>
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
