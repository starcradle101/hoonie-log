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
import { FormButtons } from '@/src/app/components/post/FormButtons';

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

	const handleInputChange =
		(field: keyof BasePost) => (e: React.ChangeEvent<HTMLInputElement>) => {
			setPost({ ...post, [field]: e.target.value });
		};

	const handleContentChange = (newContent: object) => {
		setPost({ ...post, content: newContent });
	};

	const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			const file = e.target.files[0];
			setThumbnail(file);
			setPost({ ...post, thumbnail_url: URL.createObjectURL(file) });
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		let uploadedThumbnailUrl = post.thumbnail_url;

		if (thumbnail) {
			uploadedThumbnailUrl = await uploadThumbnail(thumbnail);
		}

		const postData: NewPost = { ...post, thumbnail_url: uploadedThumbnailUrl };

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
		<div className='m-auto flex h-full flex-col md:max-w-3xl'>
			<h1 className='mb-4 mt-8 text-2xl font-semibold md:text-4xl'>
				{!existingPost ? '새 글 작성하기' : '글 수정하기'}
			</h1>
			<form className='mt-4 flex flex-1 flex-col' onSubmit={handleSubmit}>
				<TitleInput title={post.title} onChange={handleInputChange('title')} />
				<DescriptionInput
					description={post.description}
					onChange={handleInputChange('description')}
				/>
				<ThumbnailInput
					thumbnailUrl={post.thumbnail_url}
					onChange={handleThumbnailChange}
				/>
				<ContentEditor content={post.content} onChange={handleContentChange} />
				<FormButtons onCancel={openModal} />
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
