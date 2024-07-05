import { PostAbstract } from '@/src/interfaces/post';
import PostAbstractList from '@/src/app/components/PostAbstractList';

export default function Page() {
	const dummyPosts: PostAbstract[] = Array.from({ length: 30 }, (_, i) => ({
		title: `Item ${i + 1}`,
		description: `Description for item ${i + 1}`,
		createdAt: '2024. 07. 01',
		slug: `item-${i + 1}`,
	})); // 총 30개의 아이템 예시

	return (
		<>
			<section className='mb-4 border-b-2 border-slate-300'>
				<h1 className='mb-2 text-3xl font-semibold'>Blog</h1>
				<p className=' text-slate-500'>
					회고부터 유용한 지식까지, 기록을 통해 발전합니다.
				</p>
			</section>

			<PostAbstractList posts={dummyPosts} />
		</>
	);
}
