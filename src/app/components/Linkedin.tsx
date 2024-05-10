import Image from 'next/image';
import LinkedinLogo from '@/public/icons/icon-linkedin.svg';

export default function Linkedin() {
	return (
		<Image src={LinkedinLogo} width={24} height={24} alt='linkedin icon' />
	);
}
