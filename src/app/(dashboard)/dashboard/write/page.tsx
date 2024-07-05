'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Tiptap from '@/src/app/components/Tiptap';
import Modal from '@/src/app/components/Modal';
import { createPostData } from '@/src/utils/supabase/clientActions';

interface ContentType {
	title: string;
	description: string;
	body: string;
}

export default function Page() {
	const [title, setTitle] = useState<string>('');
	const [description, setDescription] = useState<string>('');
	const [content, setContent] = useState<string>('');
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const router = useRouter();

	// 여기에 supabase client로 content 불러와서 추가

	const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value);
	};

	const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setDescription(e.target.value);
	};

	const handleContentChange = (reason: string) => {
		setContent(reason);
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const result = await createPostData(title, description, content);

		if (result.success) {
			console.log('Post created successfully:', result.data);
			router.push('/dashboard');
		} else {
			console.error('Error creating post:', result.error);
		}
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

	console.log({ title, description, content });

	return (
		<div className='m-auto flex h-full flex-col md:max-w-3xl'>
			<h1 className='my-8 text-2xl font-semibold md:text-4xl'>
				새 글 작성하기
			</h1>
			<form className='mt-4 flex flex-1 flex-col' onSubmit={handleSubmit}>
				<label htmlFor='title'>
					<span>제목</span>
					<span className='text-red-500'>*</span>
				</label>
				<input
					type='text'
					id='title'
					placeholder='작성할 글의 제목을 입력해주세요.'
					className='mb-4 mt-2 block w-full resize-none rounded border-2 p-2 focus:outline-green-500'
					onChange={handleTitleChange}
				/>

				<label htmlFor='description'>
					<span>설명</span>
					<span className='text-red-500'>*</span>
				</label>
				<input
					type='text'
					id='description'
					placeholder='작성할 글에 대한 간단한 설명을 입력해주세요.'
					className='mb-4 mt-2 block w-full resize-none rounded border-2 p-2 focus:outline-green-500'
					onChange={handleDescriptionChange}
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
				onConfirm={handleExit}
				title='작성 취소'
				confirmButtonText='나가기'
			>
				<p>
					입력한 내용을 저장하지 않았습니다.
					<br /> &apos;나가기&apos;를 누르면 작성한 내용이 사라집니다.
				</p>
			</Modal>
		</div>
	);
}
