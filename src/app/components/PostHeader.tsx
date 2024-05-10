import Clock from './Clock';
import Calendar from './Calender';

interface PostHeaderProps {
	title: string;
	dateString: string;
	readingMinutes: number;
}

export default function PostHeader({
	title,
	dateString,
	readingMinutes,
}: PostHeaderProps) {
	return (
		<section className='border-b-2 border-slate-200 flex flex-col items-center pb-1'>
			<h1 className='text-3xl mb-2'>{title}</h1>
			<div className='flex gap-4 text-slate-500 text-sm'>
				<div className='flex gap-1'>
					<Calendar />
					{dateString}
				</div>
				<div className='flex gap-1'>
					<Clock />
					{readingMinutes} 분
				</div>
			</div>
		</section>
	);
}
