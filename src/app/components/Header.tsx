'use client';
import Link from 'next/link';
import { Search } from 'lucide-react';

export default function Header() {
	return (
		<header className='flex justify-between py-8'>
			<Link className='text-2xl font-semibold' href='/'>
				hoonie-log
			</Link>
			<nav className='flex gap-4'>
				<Link className='self-center text-base font-medium' href='/blog'>
					blog
				</Link>
				<button
					className='flex w-full items-center gap-2 rounded-md'
					aria-label='검색'
				>
					<Search width={24} height={24} />
				</button>
			</nav>
		</header>
	);
}
