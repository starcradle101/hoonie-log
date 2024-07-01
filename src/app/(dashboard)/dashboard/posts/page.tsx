import { getPostAbstracts } from '@/src/lib/api';
import PostAbstractList from '@/src/app/components/PostAbstarctList';
import { POSTS_PATH } from '@/src/lib/constants';

export default function Page() {
	const postAbstarcts = getPostAbstracts(POSTS_PATH);

	return (
		<section className='m-auto flex h-full flex-col md:max-w-3xl'>
			<h1 className='my-8 text-2xl font-semibold md:text-4xl'>
				작성한 글 목록
			</h1>
			<div>작성된 글을 확인할 수 있는 페이지입니다</div>
			<div>최근 수정된 글</div>
			<PostAbstractList posts={postAbstarcts} />
		</section>
	);
}
