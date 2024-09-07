import Search from '../../components/Search';
import PostAbstractListWrapper from '../../components/PostAbstarctListWrapper';

export default function Page({
	searchParams,
}: {
	searchParams?: {
		query?: string;
		page?: string;
	};
}) {
	const query = searchParams?.query || '';
	const currentPage = Number(searchParams?.page) || 1;

	return (
		<section>
			<div className='mb-2 pb-2'>
				<h1 className='mb-2 text-3xl font-semibold'>Blog</h1>
				<p className='text-slate-700 dark:text-slate-300'>
					회고부터 유용한 지식까지, 기록을 통해 발전합니다.
				</p>
			</div>
			<Search placeholder={'글 검색하기...'} />
			<PostAbstractListWrapper query={query} currentPage={currentPage} />
		</section>
	);
}
