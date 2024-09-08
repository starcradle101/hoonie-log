import PostHeader from '../../../components/PostHeader';
import PostBody from '../../../components/PostBody';
import Giscus from '../../../components/Giscus';
import dayjs from 'dayjs';
import { getPostFromSlug } from '@/src/utils/supabase/serverActions';
import { Metadata } from 'next';

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata> {
	const post = await getPostFromSlug(params.slug);

	if (!post) {
		return {
			title: 'Post not found',
			description: 'No post found with this slug.',
		};
	}

	return {
		title: post.title,
		description: post.description,
		openGraph: {
			title: post.title,
			description: post.description,
			url: `https://hoonie-log.vercel.app/blog/${params.slug}`,
			// images: post.ogImage || 'https://your-site.com/default-og-image.png',
		},
	};
}

export default async function Page({ params }: { params: { slug: string } }) {
	const post = await getPostFromSlug(decodeURIComponent(params.slug));

	if (!post) {
		return <div>Post not found</div>;
	}

	return (
		<>
			<PostHeader
				title={post.title}
				created_at={dayjs(post.created_at).format('YYYY년 MM월 DD일')}
			/>
			<PostBody postContent={post.content} />
			<div className='my-6 border-b-2 border-b-slate-200'></div>
			<Giscus />
		</>
	);
}
