'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signout } from '@/src/utils/supabase/actions';
import { PowerIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';

export default function Header() {
	const pathname = usePathname();
	const isDashboardRoute = pathname === '/dashboard';

	return (
		<header className='flex justify-between py-8'>
			<Link className='text-2xl font-semibold' href='/'>
				hoonie-log
			</Link>
			<nav className='flex gap-4'>
				{isDashboardRoute ? (
					<div className='flex items-center justify-center rounded-md bg-gray-50 hover:bg-gray-100 hover:text-gray-600 md:block'>
						<form>
							<button
								formAction={signout}
								className='flex w-full items-center gap-2 rounded-md p-2'
								aria-label='로그아웃'
							>
								<PowerIcon className='w-6' />
							</button>
						</form>
					</div>
				) : (
					<>
						<Link className='self-center text-base font-medium' href='/blog'>
							blog
						</Link>
						<button
							className='flex w-full items-center gap-2 rounded-md'
							aria-label='검색'
						>
							<MagnifyingGlassIcon className='w-5' />
						</button>
					</>
				)}
			</nav>
		</header>
	);
}
