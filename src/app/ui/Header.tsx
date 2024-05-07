import Link from 'next/link';
import BlogLogo from './BlogLogo';

export default function Header() {
	return (
		<header className='flex justify-between py-8'>
			<BlogLogo />
			<nav className='flex gap-4'>
				<Link className='text-base self-center font-medium' href='/'>
					공방
				</Link>
				<Link className='text-base self-center font-medium' href='/'>
					회고
				</Link>
				<Link className='text-base self-center font-medium' href='/'>
					실험실
				</Link>
				<Link className='text-base self-center font-medium' href='/'>
					소개
				</Link>
			</nav>
		</header>
	);
}
