'use client';
import { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Modal from '@/src/app/components/ui/Modal';
import {
	updatePostData,
	createPostData,
	uploadThumbnail,
} from '@/src/utils/supabase/clientActions';
import { getPostFromSlug } from '@/src/utils/supabase/serverActions';
import { NewPost, ExistingPost, BasePost } from '@/src/interfaces/post';
import { TitleInput } from '@/src/app/components/post/TitleInput';
import { DescriptionInput } from '@/src/app/components/post/DescriptionInput';
import { ThumbnailInput } from '@/src/app/components/post/ThumbnailInput';
import { ContentEditor } from '@/src/app/components/post/ContentEditor';

function WritePageContent() {
	const [post, setPost] = useState<NewPost>({
		title: '',
		description: '',
		content: {},
		thumbnail_url: '',
	});
	const [existingPost, setExistingPost] = useState<ExistingPost | null>(null);
	const [thumbnail, setThumbnail] = useState<File | null>(null);
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [isSaveDisabled, setIsSaveDisabled] = useState<boolean>(true);
	const router = useRouter();
	const searchParams = useSearchParams();
	const slug = searchParams.get('slug');

	useEffect(() => {
		const fetchPost = async () => {
			if (slug) {
				const fetchedPost: ExistingPost | null = await getPostFromSlug(slug);
				if (fetchedPost) {
					setExistingPost(fetchedPost);
					setPost(fetchedPost);
				}
			}
			setIsLoading(false);
		};
		fetchPost();
	}, [slug]);

	useEffect(() => {
		setIsSaveDisabled(!(post.title && post.description));
	}, [post.title, post.description]);

	const handleInputChange =
		(field: keyof BasePost) => (e: React.ChangeEvent<HTMLInputElement>) => {
			setPost({ ...post, [field]: e.target.value });
		};

	const handleContentChange = (newContent: object) => {
		setPost({ ...post, content: newContent });
	};

	const handleThumbnailChange = async (file: File) => {
		try {
			const uploadedThumbnailUrl = await uploadThumbnail(file);
			setPost({ ...post, thumbnail_url: uploadedThumbnailUrl });
		} catch (error) {
			console.error('Error uploading thumbnail:', error);
		}
	};

	const handleThumbnailReset = () => {
		setPost({ ...post, thumbnail_url: '' });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const postData: NewPost = { ...post };

		if (!existingPost) {
			const result = await createPostData(postData);
			if (result.success) {
				router.push('/dashboard');
			} else {
				console.error('Error creating post:', result.error);
			}
		} else {
			const result = await updatePostData(existingPost.slug, postData);
			if (result.success) {
				router.push('/dashboard');
			} else {
				console.error('Error updating post:', result.error);
			}
		}
	};

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);
	const handleExit = () => {
		setIsModalOpen(false);
		router.back();
	};

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<div className='m-auto max-w-7xl'>
			<h1 className='mb-4 mt-8 text-2xl font-semibold'>
				{!existingPost ? '새 글 작성하기' : '글 수정하기'}
			</h1>
			<form
				className='mt-4 flex flex-col flex-nowrap gap-4 lg:flex-row'
				onSubmit={handleSubmit}
			>
				<div className='flex-1 overflow-hidden'>
					<TitleInput
						title={post.title}
						onChange={handleInputChange('title')}
					/>
					<ContentEditor
						content={post.content}
						onChange={handleContentChange}
					/>
				</div>
				<div className='flex-2 min-w-[33%]'>
					<DescriptionInput
						description={post.description}
						onChange={handleInputChange('description')}
					/>
					<ThumbnailInput
						thumbnailUrl={post.thumbnail_url}
						onChange={handleThumbnailChange}
						onReset={handleThumbnailReset}
					/>
					<div className='my-4 flex flex-col gap-2'>
						<button
							type='submit'
							className='rounded bg-blue-500 px-3 py-1 text-white disabled:bg-gray-400'
							disabled={isSaveDisabled}
						>
							저장
						</button>
						<button
							type='button'
							className='rounded border border-slate-400 bg-white px-3 py-1'
							onClick={openModal}
						>
							취소
						</button>
					</div>
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
