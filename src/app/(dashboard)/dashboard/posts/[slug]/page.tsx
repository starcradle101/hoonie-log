import PostHeader from '@/src/components/post/PostHeader';
import PostBody from '@/src/components/post/PostBody';
import { getPostFromSlug } from '@/src/utils/supabase/serverActions';

type Post = {
	title: string;
	created_at: string;
	content: object;
};

type Params = Promise<{ slug: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function Page(props: { params: Params }) {
	const params = await props.params;
	const slug = params.slug;

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
