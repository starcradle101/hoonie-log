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
		<section className='flex flex-col items-center border-b-2 border-slate-200 pb-1'>
			<h1 className='mb-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl'>
				{title}
			</h1>
			<div className='flex gap-4 text-sm text-slate-500'>
				<div className='flex gap-0.5'>
					<Calendar />
					{dateString}
				</div>
				<div className='flex gap-0.5'>
					<Clock />
					{readingMinutes}분
				</div>
			</div>
		</section>
	);
}
