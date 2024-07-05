'use client';
import { usePathname } from 'next/navigation';
import { PostAbstract } from '@/src/interfaces/post';
import { useState } from 'react';
import Link from 'next/link';
import Modal from './Modal';

interface PostAbstractItemProps {
	post: PostAbstract;
}

export default function PostListItem({ post }: PostAbstractItemProps) {
	const pathname = usePathname();
	const isDashboard = pathname.startsWith('/dashboard');
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);
	const deletePost = () => {
		// 여기에 삭제 로직 추가
		console.log('게시글 삭제 완료');
		closeModal();
	};

	return (
		<>
			<article className='mb-4 border-b-2 border-slate-50'>
				<div className='flex justify-between'>
					<Link className='text-lg' href={`${pathname}/` + post.slug}>
						{post.title}
					</Link>
					{isDashboard && (
						<div className='flex gap-2'>
							<button
								className='rounded-md border-red-500 bg-red-500 px-2 py-1 text-sm font-medium text-white hover:bg-red-300'
								onClick={(e) => {
									e.preventDefault();
									openModal();
								}}
							>
								삭제
							</button>
							<button className='rounded-md border-sky-500 bg-sky-500 px-2 py-1 text-sm font-medium text-white hover:bg-sky-300'>
								수정
							</button>
						</div>
					)}
				</div>

				<div className='mt-2 flex justify-between text-sm text-slate-400'>
					<p>{post.description}</p>
					<p>{post.created_at}</p>
				</div>
			</article>

			{isDashboard && (
				<Modal
					isOpen={isModalOpen}
					onClose={closeModal}
					onConfirm={deletePost}
					title='게시글 삭제'
					confirmButtonText='삭제'
				>
					<p>게시글을 삭제하시겠습니까?</p>
				</Modal>
			)}
		</>
	);
}
