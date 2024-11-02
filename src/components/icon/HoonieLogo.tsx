import Image from 'next/image';

export default function HoonieLogo() {
	return (
		<Image
			src='./icons/logo.png'
			width={48}
			height={48}
			alt='hoonie-log icon'
			className=''
		/>
	);
}
