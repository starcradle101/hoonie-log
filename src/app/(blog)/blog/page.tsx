import PostAbstractList from '@/src/app/components/PostAbstractList';

export default async function Page() {
	return (
		<>
			<section className='mb-4 border-b-2 border-slate-300'>
				<h1 className='mb-2 text-3xl font-semibold'>Blog</h1>
				<p className=' text-slate-500'>
					회고부터 유용한 지식까지, 기록을 통해 발전합니다.
				</p>
			</section>

			<PostAbstractList />
		</>
	);
}
