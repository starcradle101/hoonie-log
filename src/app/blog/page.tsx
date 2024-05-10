import { getPostAbstracts } from '@/src/lib/api';
import PostAbstractList from '../components/PostAbstarctList';
import { POSTS_PATH } from '@/src/lib/constants';

export default function Page() {
	const postAbstarcts = getPostAbstracts(POSTS_PATH);

	return (
		<>
			<section className='border-b-2 border-slate-300 mb-4'>
				<h1 className='text-3xl font-semibold mb-2'>Blog</h1>
				<p className=' text-slate-500'>
					회고부터 유용한 지식까지. 기록을 통해 발전합니다.
				</p>
			</section>
			<section>
				<PostAbstractList posts={postAbstarcts} />
			</section>
		</>
	);
}
