import ClockIcon from '@/public/icons/icon-clock.svg';
import Image from 'next/image';

export default function Clock() {
	return <Image src={ClockIcon} width={16} height={16} alt='clock icon' />;
}
