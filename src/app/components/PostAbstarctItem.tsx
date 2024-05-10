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
		<article className=' border-b-2 border-slate-50 mb-4'>
			<div className=''>
				<Link className='text-lg mb-2' href={`${pathname}/` + post.slug}>
					{post.title}
				</Link>
			</div>
			<div className='text-sm text-slate-400 flex justify-between'>
				<p>{post.description}</p>
				<p>{post.dateString}</p>
			</div>
		</article>
	);
}
