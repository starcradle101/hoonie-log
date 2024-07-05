import Search from '@/src/app/components/Search';
import PostAbstarctList from '@/src/app/components/PostAbstractList';

import { PostAbstract } from '@/src/interfaces/post';

export default function Page() {
	const dummyPosts: PostAbstract[] = Array.from({ length: 30 }, (_, i) => ({
		title: `Item ${i + 1}`,
		description: `Description for item ${i + 1}`,
		createdAt: '2024. 07. 01',
		slug: `item-${i + 1}`,
	})); // 총 30개의 아이템 예시

	return (
		<section className='m-auto flex h-full flex-col md:max-w-3xl'>
			<h1 className='my-8 text-2xl font-semibold md:text-4xl'>
				작성한 글 목록
			</h1>
			<Search placeholder={'글 검색하기...'} />
			<PostAbstarctList posts={dummyPosts} />
		</section>
	);
}
