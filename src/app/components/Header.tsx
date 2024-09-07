'use client';
import Github from './icon/Github';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Header() {
	return (
		<header className='sticky top-0 z-10 flex items-center justify-between border-b-2 bg-white/30 backdrop-blur-md dark:border-b-gray-500 dark:bg-dark-theme/30'>
			<div className='mx-auto w-full max-w-3xl px-5 md:w-[calc(100%-4rem)] md:px-0 xl:w-[calc(100%-30rem)]'>
				<div className='flex items-center justify-between py-4'>
					<Link className='text-2xl font-semibold' href='/'>
						hoonie-log
					</Link>
					<nav className='flex items-center gap-4'>
						<Link className='font-medium' href='/'>
							home
						</Link>
						<Link className='font-medium' href='/blog'>
							blog
						</Link>
						<a href='https://github.com/starcradle101'>
							<Github />
						</a>
						<ThemeToggle />
					</nav>
				</div>
			</div>
		</header>
	);
}
