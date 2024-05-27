import Image from 'next/image';
import AuthenticationLogo from '@/public/icons/icon-authentication.svg';

export default function Linkedin() {
	return (
		<Image
			src={AuthenticationLogo}
			width={24}
			height={24}
			alt='linkedin icon'
		/>
	);
}
