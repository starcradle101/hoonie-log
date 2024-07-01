import BlogLogo from '@/public/icons/logo.png';
import Image from 'next/image';

export default function HoonieLogo() {
	return (
		<Image
			src={BlogLogo}
			width={48}
			height={48}
			alt='hoonie-log icon'
			className=''
		/>
	);
}
