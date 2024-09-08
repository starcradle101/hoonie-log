'use client';
import { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Tiptap from '@/src/app/components/Tiptap';
import Modal from '@/src/app/components/Modal';
import {
	updatePostData,
	createPostData,
} from '@/src/utils/supabase/clientActions';
import { getPostFromSlug } from '@/src/utils/supabase/serverActions';
import { uploadThumbnail } from '@/src/utils/supabase/clientActions';
import { Post } from '@/src/interfaces/post';

function WritePageContent() {
	const [title, setTitle] = useState<string>('');
	const [description, setDescription] = useState<string>('');
	const [content, setContent] = useState<object>({});
	const [thumbnail, setThumbnail] = useState<File | null>(null);
	const [thumbnailUrl, setThumbnailUrl] = useState<string>('');
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const router = useRouter();
	const searchParams = useSearchParams();
	const slug = searchParams.get('slug');

	useEffect(() => {
		const fetchPost = async () => {
			if (slug) {
				const post: Post | null = await getPostFromSlug(slug);
				if (post) {
					setTitle(post.title);
					setDescription(post.description);
					setContent(post.content);
					setThumbnailUrl(post.thumbnail_url);
				}
			}
			setIsLoading(false);
		};
		fetchPost();
	}, [slug]);

	const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value);
	};

	const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setDescription(e.target.value);
	};

	const handleContentChange = (newContent: object) => {
		setContent(newContent);
	};

	const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			const file = e.target.files[0];
			setThumbnail(file);
			setThumbnailUrl(URL.createObjectURL(file));
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		let uploadedThumbnailUrl = thumbnailUrl;

		if (thumbnail) {
			uploadedThumbnailUrl = await uploadThumbnail(thumbnail);
		}

		if (!slug) {
			const result = await createPostData(
				title,
				description,
				content,
				uploadedThumbnailUrl
			);
			if (result.success) {
				router.push('/dashboard');
			} else {
				console.error('Error creating post:', result.error);
			}
		} else {
			const result = await updatePostData(
				slug,
				title,
				description,
				content,
				uploadedThumbnailUrl
			);
			if (result.success) {
				router.push('/dashboard');
			} else {
				console.error('Error updating post:', result.error);
			}
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

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<div className='m-auto flex h-full flex-col md:max-w-3xl'>
			<h1 className='my-8 text-2xl font-semibold md:text-4xl'>
				{!slug || slug === 'new' ? '새 글 작성하기' : '글 수정하기'}
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
					value={title}
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
					value={description}
					onChange={handleDescriptionChange}
				/>

				<label htmlFor='thumbnail'>
					<span>썸네일</span>
				</label>
				<input
					type='file'
					id='thumbnail'
					accept='image/*'
					onChange={handleThumbnailChange}
					className='mb-4 mt-2 block w-full'
				/>
				{thumbnailUrl && (
					<div className='mb-4'>
						<Image
							src={thumbnailUrl}
							alt='썸네일 미리보기'
							width={200}
							height={200}
							objectFit='cover'
						/>
					</div>
				)}

				<label htmlFor='body'>
					<span>본문</span>
					<span className='text-red-500'>*</span>
				</label>
				<Tiptap id='body' content={content} onChange={handleContentChange} />

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

export default function Page() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<WritePageContent />
		</Suspense>
	);
}
