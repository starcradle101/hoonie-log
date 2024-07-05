import { POSTS_PATH } from '@/src/lib/constants';
import PostHeader from '../../../components/PostHeader';
import PostBody from '../../../components/PostBody';
import Giscus from '../../../components/Giscus';

export function generateStaticParams() {
	// const slugs = getPostSlugsFrom(POSTS_PATH);
	// return slugs.map((slug) => ({
	// 	slug: slug,
	// }));
}

export default async function Page({ params }: { params: { slug: string } }) {
	// JSON으로 변환해서 렌더링할것

	return (
		<>
			{/* <PostHeader
				title={title}
				dateString={createdAt}
				readingMinutes={readingMinutes}
			/> */}
			{/* 변환된 코드에 맞춰서 PostBody 컴포넌트 수정할 것 */}
			{/* <PostBody postContent={postContent} /> */}
			<div className='my-6 border-b-2 border-b-slate-200'></div>
			<Giscus />
		</>
	);
}
