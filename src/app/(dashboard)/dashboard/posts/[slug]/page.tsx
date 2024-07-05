import { POSTS_PATH } from '@/src/lib/constants';
import PostHeader from '@/src/app/components/PostHeader';
import PostBody from '@/src/app/components/PostBody';

export function generateStaticParams() {
	// const slugs = getPostSlugsFrom(POSTS_PATH);
	// 	return slugs.map((slug) => ({
	// 		slug: slug,
	// 	}));
}

export default async function Page({ params }: { params: { slug: string } }) {
	return (
		<section className='m-auto py-6 md:max-w-5xl md:py-12'>
			{/* <PostHeader
				title={title}
				dateString={dateString}
				readingMinutes={readingMinutes}
			/> */}
			{/* <PostBody postContent={postContent} /> */}
		</section>
	);
}
