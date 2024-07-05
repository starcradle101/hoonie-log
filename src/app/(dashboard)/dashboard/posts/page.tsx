import Search from '@/src/app/components/Search';
import PostAbstractListWrapper from '@/src/app/components/PostAbstarctListWrapper';

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
		<section className='m-auto flex h-full flex-col md:max-w-3xl'>
			<h1 className='my-8 text-2xl font-semibold md:text-4xl'>
				작성한 글 목록
			</h1>
			<Search placeholder={'글 검색하기...'} />
			<PostAbstractListWrapper query={query} currentPage={currentPage} />
		</section>
	);
}
