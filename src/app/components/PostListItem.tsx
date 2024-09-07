'use client';
import { usePathname } from 'next/navigation';
import { PostAbstract } from '@/src/interfaces/post';
import { useState } from 'react';
import { deletePostData } from '@/src/utils/supabase/clientActions';
import dayjs from 'dayjs';
import Link from 'next/link';
import Modal from './Modal';

interface PostAbstractItemProps {
	post: PostAbstract;
	onPostDeleted: () => void;
}

export default function PostListItem({
	post,
	onPostDeleted,
}: PostAbstractItemProps) {
	const pathname = usePathname();
	const isDashboard = pathname.startsWith('/dashboard');
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);
	const deletePost = async () => {
		const result = await deletePostData(post.id);
		if (result.success) {
			console.log('게시글 삭제 완료');
			onPostDeleted();
		} else {
			console.error('Error deleting post:', result.error);
		}
		closeModal();
	};

	return (
		<>
			<article className='mb-8 flex'>
				<div className='flex-1'>
					<Link className='text-lg' href={`${pathname}/` + post.slug}>
						{post.title}
					</Link>
					<p className='mt-2 text-sm text-slate-400'>
						{dayjs(post.created_at).format('YYYY년 MM월 DD일')}
					</p>
				</div>
				{isDashboard && (
					<div className='flex items-center gap-2'>
						<button
							className='rounded-md border-red-500 bg-red-500 px-2 py-1 text-sm font-medium text-white hover:bg-red-300'
							onClick={(e) => {
								e.preventDefault();
								openModal();
							}}
						>
							삭제
						</button>
						<Link
							className='rounded-md border-sky-500 bg-sky-500 px-2 py-1 text-sm font-medium text-white hover:bg-sky-300'
							href={`/dashboard/write?slug=${post.slug}`}
						>
							수정
						</Link>
					</div>
				)}
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
