import PostHeader from '@/src/app/components/PostHeader';
import PostBody from '@/src/app/components/PostBody';
import {
	getPostFromSlug,
	getPostSlugs,
} from '@/src/utils/supabase/clientActions';

export async function generateStaticParams() {
	const slugs = await getPostSlugs();

	return slugs?.map((item) => ({
		slug: item.slug,
	}));
}

export default async function Page({ params }: { params: { slug: string } }) {
	const post = await getPostFromSlug(params.slug);

	if (!post) {
		return <div>Post not found</div>;
	}
	return (
		<section className='m-auto py-6 md:max-w-3xl md:py-12'>
			<PostHeader
				title={post.title}
				created_at={post.created_at}
				reading_time={post.reading_time}
			/>
			<PostBody postContent={post.content} />
		</section>
	);
}
