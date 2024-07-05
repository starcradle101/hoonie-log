import PostHeader from '../../../components/PostHeader';
import PostBody from '../../../components/PostBody';
import Giscus from '../../../components/Giscus';
import {
	getPostFromSlug,
	getPostSlugs,
} from '@/src/utils/supabase/clientActions';

export async function generateStaticParams() {
	const slugs = await getPostSlugs();

	return (
		slugs?.map((item) => ({
			slug: item.slug,
		})) || []
	);
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
				created_at={post.created_at}
				reading_time={post.reading_time}
			/>
			<PostBody postContent={post.content} />
			<div className='my-6 border-b-2 border-b-slate-200'></div>
			<Giscus />
		</>
	);
}
