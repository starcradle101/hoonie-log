import Image from 'next/image';
import Link from 'next/link';
import AuthenticationLogo from '@/public/icons/icon-authentication.svg';

export default function Linkedin() {
	return (
		<Link href='/login'>
			<Image
				src={AuthenticationLogo}
				width={24}
				height={24}
				alt='linkedin icon'
			/>
		</Link>
	);
}
