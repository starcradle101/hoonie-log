import Image from 'next/image';
import MailIcon from '@/public/icons/icon-mail.svg';

export default function Mail() {
	return <Image src={MailIcon} width={24} height={24} alt='email icon' />;
}
