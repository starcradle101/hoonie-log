import { getPostAbstracts } from '@/src/lib/api';
import PostAbstractList from '@/src/app/components/PostAbstarctList';
import { POSTS_PATH } from '@/src/lib/constants';

export default function Page() {
	const postAbstarcts = getPostAbstracts(POSTS_PATH);

	return (
		<section className='flex-grow p-6 md:p-12'>
			<h1 className='text-4xl font-semibold'>Posts</h1>
			<div>작성된 글을 확인할 수 있는 페이지입니다</div>
			<div>글 작성 추이</div>
			<div>최근 수정된 글</div>
			<PostAbstractList posts={postAbstarcts} />
		</section>
	);
}
