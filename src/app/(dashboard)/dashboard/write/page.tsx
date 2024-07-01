'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Tiptap from '@/src/app/components/Tiptap';
import Modal from '@/src/app/components/Modal';

interface FormValues {
	title: string;
	body: string;
}

export default function Page() {
	const [title, setTitle] = useState<string>('');
	const [content, setContent] = useState<string>('');
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const router = useRouter();

	const handleTitleChange = (reason: any) => {
		setTitle(reason);
	};

	const handleContentChange = (reason: any) => {
		setContent(reason);
	};

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const handleExit = () => {
		setIsModalOpen(false);
		router.back();
	};

	return (
		<div className='m-auto flex h-full flex-col md:max-w-3xl'>
			<h1 className='my-8 text-2xl font-semibold md:text-4xl'>
				새 글 작성하기
			</h1>
			<form className='mt-4 flex flex-1 flex-col'>
				<label htmlFor='title'>
					<span>제목</span>
					<span className='text-red-500'>*</span>
				</label>
				<input
					type='text'
					id='title'
					className='mb-4 mt-2 block w-full resize-none rounded border-2 p-2 focus:outline-blue-500'
				/>

				<label htmlFor='body'>
					<span>본문</span>
					<span className='text-red-500'>*</span>
				</label>
				<Tiptap
					id='body'
					content={content}
					onChange={(newContent: string) => handleContentChange(newContent)}
				/>

				<div className='my-4 flex justify-end gap-2'>
					<button
						type='submit'
						className='rounded bg-blue-500 px-3 py-1 text-white'
					>
						저장
					</button>
					<button
						className='rounded border border-slate-400 bg-white px-3 py-1'
						onClick={(e) => {
							e.preventDefault();
							openModal();
						}}
					>
						취소
					</button>
				</div>
			</form>

			<Modal
				isOpen={isModalOpen}
				onClose={closeModal}
				onExit={handleExit}
				title='작성 취소'
			>
				<p className='mb-4 text-sm leading-relaxed text-slate-600 md:text-base'>
					입력한 내용을 저장하지 않았습니다.
					<br /> &apos;나가기&apos;를 누르면 작성한 내용이 사라집니다.
				</p>
			</Modal>
		</div>
	);
}
