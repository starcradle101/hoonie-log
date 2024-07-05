// import Search from '@/src/app/components/Search';
import PostAbstractListWrapper from '@/src/app/components/PostAbstarctListWrapper';

export default function Page() {
	return (
		<section className='m-auto flex h-full flex-col md:max-w-3xl'>
			<h1 className='my-8 text-2xl font-semibold md:text-4xl'>
				작성한 글 목록
			</h1>
			{/* <Search placeholder={'글 검색하기...'} /> */}
			<PostAbstractListWrapper />
		</section>
	);
}
