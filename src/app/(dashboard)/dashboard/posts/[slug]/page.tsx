import PostHeader from '@/src/app/components/PostHeader';
import PostBody from '@/src/app/components/PostBody';
import { getPostFromSlug } from '@/src/utils/supabase/serverActions';

export default async function Page({ params }: { params: { slug: string } }) {
	const post = await getPostFromSlug(decodeURIComponent(params.slug));

	if (!post) {
		return <div>Post not found</div>;
	}
	return (
		<section className='m-auto py-6 md:max-w-3xl md:py-12'>
			<PostHeader title={post.title} created_at={post.created_at} />
			<PostBody postContent={post.content} />
		</section>
	);
}
