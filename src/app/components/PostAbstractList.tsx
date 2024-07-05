'use client';
import { useState, useEffect } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import PostListItem from './PostListItem';
import { PostAbstract } from '@/src/interfaces/post';

interface DashboardPostAbstractListProps {
	posts: PostAbstract[];
}

const ITEMS_PER_PAGE = 10;

export default function DashboardPostAbstractList({
	posts,
}: DashboardPostAbstractListProps) {
	const searchParams = useSearchParams();
	const router = useRouter();
	const pathname = usePathname();

	const currentPageFromUrl = Number(searchParams.get('page')) || 1;
	const [currentPage, setCurrentPage] = useState(currentPageFromUrl);

	useEffect(() => {
		setCurrentPage(currentPageFromUrl);
	}, [currentPageFromUrl]);

	const totalPages = Math.ceil(posts.length / ITEMS_PER_PAGE);

	const handlePageChange = (page: number) => {
		const params = new URLSearchParams(searchParams.toString());
		params.set('page', page.toString());
		router.replace(`${pathname}?${params.toString()}`);
		setCurrentPage(page);
	};

	const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
	const selectedItems = posts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

	return (
		<div className='flex h-auto w-full flex-1 flex-col items-center'>
			<ul className='mb-5 w-full list-none'>
				{selectedItems.map((item, index) => (
					<li key={index} className='my-1'>
						<PostListItem post={item} />
					</li>
				))}
			</ul>
			<div className='flex flex-1 items-end justify-center gap-2'>
				<button
					onClick={() => handlePageChange(currentPage - 1)}
					disabled={currentPage === 1}
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
					disabled={currentPage === totalPages}
					className='px-2 py-1 disabled:opacity-50'
				>
					<ArrowRightIcon width={24} height={24} />
				</button>
			</div>
		</div>
	);
}
