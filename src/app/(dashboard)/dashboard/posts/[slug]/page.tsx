import { getPostBySlug, getPostSlugsFrom } from '@/src/lib/api';
import { POSTS_PATH } from '@/src/lib/constants';
import { markdownToHTML } from '@/src/lib/api';
import PostHeader from '@/src/app/components/PostHeader';
import PostBody from '@/src/app/components/PostBody';

export function generateStaticParams() {
	const slugs = getPostSlugsFrom(POSTS_PATH);

	return slugs.map((slug) => ({
		slug: slug,
	}));
}

export default async function Page({ params }: { params: { slug: string } }) {
	const postDetail = getPostBySlug(params.slug, POSTS_PATH);
	const { title, readingMinutes, dateString } = postDetail;
	const postContent = await markdownToHTML(postDetail.content);

	return (
		<section className='m-auto py-6 md:max-w-5xl md:py-12'>
			<PostHeader
				title={title}
				dateString={dateString}
				readingMinutes={readingMinutes}
			/>
			<PostBody postContent={postContent} />
		</section>
	);
}
