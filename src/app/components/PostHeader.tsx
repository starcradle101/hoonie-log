import { CalendarDays } from 'lucide-react';

interface PostHeaderProps {
	title: string;
	created_at: string;
}

export default function PostHeader({ title, created_at }: PostHeaderProps) {
	return (
		<section className='flex flex-col items-center border-b-2 border-slate-200 pb-1'>
			<h1 className='mb-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl'>
				{title}
			</h1>
			<div className='flex items-center gap-4 text-sm text-slate-500'>
				<CalendarDays width={12} height={12} />
				<span>{created_at}</span>
			</div>
		</section>
	);
}
