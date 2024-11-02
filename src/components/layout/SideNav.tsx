import NavLinks from './NavLinks';
import Link from 'next/link';
import { signout } from '@/src/utils/supabase/serverActions';
import { PowerIcon } from 'lucide-react';
import HoonieLogo from '../icon/HoonieLogo';

export default function SideNav() {
	return (
		<nav className='flex shrink-0 flex-col p-2 md:h-screen'>
			<Link
				className='flex h-20 items-end justify-start rounded-md bg-blue-700 p-4 md:mb-2 md:h-40 '
				href='/'
			>
				<HoonieLogo />
				<span className=' text-3xl font-semibold text-white'>hoonie-log</span>
			</Link>

			<div className='flex grow space-x-2 md:flex-col md:space-x-0 md:space-y-2'>
				<div className='mt-2 flex h-auto w-full flex-1 rounded-md bg-gray-50 md:mt-0 md:flex-col'>
					<NavLinks />
				</div>

				<div className='mt-2 flex items-center justify-start rounded-md bg-gray-50 hover:bg-green-100 hover:text-blue-500 md:mt-0'>
					<form>
						<button
							formAction={signout}
							className='flex w-full items-center gap-2 rounded-md p-2 '
						>
							<PowerIcon className='w-6' />
							<span className='hidden text-sm font-medium md:block'>
								로그아웃
							</span>
						</button>
					</form>
				</div>
			</div>
		</nav>
	);
}
