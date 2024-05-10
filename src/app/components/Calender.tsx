import CalendarIcon from '@/public/icons/icon-calendar.svg';
import Image from 'next/image';

export default function Calendar() {
	return <Image src={CalendarIcon} width={16} height={16} alt='clock icon' />;
}
