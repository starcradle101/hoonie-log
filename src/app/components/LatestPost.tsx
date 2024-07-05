'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { fetchLatestPost } from '@/src/utils/supabase/clientActions';

export default function LatestPost() {
	const [latestPost, setLatestPost] = useState<any>(null);

	useEffect(() => {
		const getLatestPost = async () => {
			const post = await fetchLatestPost();
			setLatestPost(post);
		};
		getLatestPost();
	}, []);

	return (
		<>
			{latestPost ? (
				<article className='mb-10 flex flex-col justify-center px-8'>
					<Link className='text-lg' href={`blog/${latestPost.slug}`}>
						{latestPost.title}
					</Link>

					<p className='mt-2 flex justify-between text-sm text-slate-400'>
						{latestPost.description}
					</p>
				</article>
			) : (
				<p>Loading...</p>
			)}
		</>
	);
}
