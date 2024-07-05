import { CalendarDays, Clock } from 'lucide-react';

interface PostHeaderProps {
	title: string;
	created_at: string;
	reading_time: number;
}

export default function PostHeader({
	title,
	created_at,
	reading_time,
}: PostHeaderProps) {
	return (
		<section className='flex flex-col items-center border-b-2 border-slate-200 pb-1'>
			<h1 className='mb-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl'>
				{title}
			</h1>
			<div className='flex gap-4 text-sm text-slate-500'>
				<div className='flex items-center gap-0.5'>
					<CalendarDays width={12} height={12} />
					<span>{created_at}</span>
				</div>
				<div className='flex items-center gap-0.5'>
					<Clock width={12} height={12} />
					<span>{reading_time}분</span>
				</div>
			</div>
		</section>
	);
}
