import PostHeader from '@/src/components/post/PostHeader';
import PostBody from '@/src/components/post/PostBody';
import { getPostFromSlug } from '@/src/utils/supabase/serverActions';

type Post = {
	title: string;
	created_at: string;
	content: object;
};

export default async function Page({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params; // params를 비동기적으로 처리
	const post: Post | null = await getPostFromSlug(decodeURIComponent(slug));

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
