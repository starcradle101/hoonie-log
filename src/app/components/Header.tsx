import Link from 'next/link';
import BlogLogo from './BlogLogo';

export default function Header() {
	return (
		<header className='flex justify-between py-8'>
			<BlogLogo />
			<nav className='flex gap-4'>
				<Link className='text-base self-center font-medium' href='/blog'>
					blog
				</Link>
				<Link className='text-base self-center font-medium' href='/craft'>
					craft
				</Link>
				<Link className='text-base self-center font-medium' href='/about'>
					about
				</Link>
			</nav>
		</header>
	);
}
