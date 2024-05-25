'use client';

import { usePathname } from 'next/navigation';
import { PostAbstract } from '@/src/interfaces/post';
import Link from 'next/link';

interface PostAbstractItemProps {
	post: PostAbstract;
}

export default function PostAbstractItem({ post }: PostAbstractItemProps) {
	const pathname = usePathname();

	return (
		<article className='mb-4 border-b-2 border-slate-50'>
			<Link className='text-lg' href={`${pathname}/` + post.slug}>
				{post.title}
			</Link>

			<div className='mt-2 flex justify-between text-sm text-slate-400'>
				<p>{post.description}</p>
				<p>{post.dateString}</p>
			</div>
		</article>
	);
}
