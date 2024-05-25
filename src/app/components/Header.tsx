import Link from 'next/link';

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
				<Link className='self-center text-base font-medium' href='/craft'>
					craft
				</Link>
			</nav>
		</header>
	);
}
