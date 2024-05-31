import NavLinks from './NavLinks';
import Link from 'next/link';
import { signout } from '@/src/utils/supabase/actions';
import { PowerIcon } from '@heroicons/react/24/solid';
import HoonieLogo from './HoonieLogo';

export default function SideNav() {
	return (
		<nav className='flex h-full flex-col px-2 py-4'>
			<Link
				className='flex h-20 items-end justify-start rounded-md bg-gray-900 p-4 md:mb-2 md:h-40 '
				href='/'
			>
				<HoonieLogo />
				<span className=' text-3xl font-semibold text-white'>hoonie-log</span>
			</Link>
			<div className='flex grow space-x-2 md:flex-col md:space-x-0 md:space-y-2'>
				<div className='flex h-auto w-full grow rounded-md bg-gray-50 md:block'>
					<NavLinks />
				</div>

				<div className='flex items-center justify-center rounded-md bg-gray-50 hover:bg-sky-100 hover:text-blue-600 md:block'>
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
