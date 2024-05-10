import { getPostAbstracts } from '@/src/lib/api';
import PostAbstractList from '../components/PostAbstarctList';
import { CRAFTS_PATH } from '@/src/lib/constants';

export default function Page() {
	const craftAbstarcts = getPostAbstracts(CRAFTS_PATH);

	return (
		<>
			<section>
				<h1 className='text-4xl font-semibold border-b-2 border-slate-200 mb-4 pb-2'>
					Craft
				</h1>
				<p>지식을 활용하여 나만의 것으로 풀어낸 공간입니다.</p>
			</section>
			<section>
				<PostAbstractList posts={craftAbstarcts} />
			</section>
		</>
	);
}