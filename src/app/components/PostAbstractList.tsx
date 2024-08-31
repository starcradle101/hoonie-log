'use client';
import { useState, useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import PostListItem from './PostListItem';
import { PostAbstract } from '@/src/interfaces/post';
import { fetchPostAbstracts } from '@/src/utils/supabase/serverActions';

const ITEMS_PER_PAGE = 10;

export default function PostAbstractList({
	query,
	currentPage,
}: {
	query: string;
	currentPage: number;
}) {
	const searchParams = useSearchParams();
	const router = useRouter();
	const pathname = usePathname();

	const [posts, setPosts] = useState<PostAbstract[]>([]);
	const [totalPosts, setTotalPosts] = useState<number>(0);
	const [loading, setLoading] = useState<boolean>(true);

	const fetchData = async (page: number, query: string) => {
		setLoading(true);
		const data = await fetchPostAbstracts(page, ITEMS_PER_PAGE, query);

		if (data) {
			setPosts(data.posts);
			setTotalPosts(data.totalPosts);
		}

		setLoading(false);
	};

	useEffect(() => {
		fetchData(currentPage, query);
	}, [currentPage, query]);

	const totalPages = Math.ceil(totalPosts / ITEMS_PER_PAGE);

	const handlePageChange = (page: number) => {
		if (page < 1 || page > totalPages) return;
		const params = new URLSearchParams(searchParams.toString());
		params.set('page', page.toString());
		router.replace(`${pathname}?${params.toString()}`);
	};

	const handlePostDeleted = () => {
		fetchData(currentPage, query);
	};

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<div className='flex h-auto w-full flex-1 flex-col items-center pb-4'>
			<ul className='mb-2 w-full list-none'>
				{posts.length === 0 ? (
					<li className='m-auto mt-0 text-center font-medium'>
						검색 결과를 찾을 수 없습니다
					</li>
				) : (
					posts.map((item, index) => (
						<li key={index} className='my-1'>
							<PostListItem post={item} onPostDeleted={handlePostDeleted} />
						</li>
					))
				)}
			</ul>
			<div className='flex flex-1 items-end justify-center gap-2'>
				<button
					onClick={() => handlePageChange(currentPage - 1)}
					disabled={currentPage === 1 || totalPages === 0}
					className='px-2 py-1 disabled:opacity-50'
				>
					<ArrowLeftIcon width={24} height={24} />
				</button>
				<div className='flex gap-1'>
					{Array.from({ length: totalPages }, (_, i) => i + 1).map(
						(pageNumber) => (
							<button
								key={pageNumber}
								onClick={() => handlePageChange(pageNumber)}
								disabled={totalPages === 0}
								className={`px-2 py-1 ${
									pageNumber === currentPage
										? ' text-blue-500 underline'
										: 'text-black'
								}`}
							>
								{pageNumber}
							</button>
						)
					)}
				</div>
				<button
					onClick={() => handlePageChange(currentPage + 1)}
					disabled={currentPage === totalPages || totalPages === 0}
					className='px-2 py-1 disabled:opacity-50'
				>
					<ArrowRightIcon width={24} height={24} />
				</button>
			</div>
		</div>
	);
}
