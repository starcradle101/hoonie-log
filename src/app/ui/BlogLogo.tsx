import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../public/icons/logo.png';

export default function BlogLogo() {
	return (
		<Link className='flex gap-2' href='/'>
			<Image
				className='h-fit self-center'
				src={Logo}
				width={36}
				height={36}
				alt='hoonie-log logo'
			/>
			<span className='text-2xl font-bold self-center'>hoonie-log</span>
		</Link>
	);
}
