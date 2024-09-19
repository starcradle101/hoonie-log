import React, { FC, useRef } from 'react';
import Image from 'next/image';

interface ThumbnailInputProps {
	thumbnailUrl: string;
	onChange: (file: File) => void;
	onReset: () => void;
}

export const ThumbnailInput: FC<ThumbnailInputProps> = ({
	thumbnailUrl,
	onChange,
	onReset,
}) => {
	const fileInputRef = useRef<HTMLInputElement>(null);

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			onChange(e.target.files[0]);
		}
	};

	const handleClick = () => {
		fileInputRef.current?.click();
	};

	return (
		<div className='w-full'>
			<div className='flex items-center justify-between pr-2'>
				<label htmlFor='thumbnail' className='block'>
					썸네일
				</label>
				{thumbnailUrl && (
					<button
						type='button'
						onClick={onReset}
						className='text-sm text-red-500 hover:text-red-700'
					>
						초기화
					</button>
				)}
			</div>
			<div
				className='mt-2 aspect-video w-full cursor-pointer rounded border-2 border-gray-300 text-center hover:border-gray-400'
				onClick={handleClick}
			>
				<input
					type='file'
					ref={fileInputRef}
					id='thumbnail'
					accept='image/*'
					onChange={handleFileChange}
					className='hidden'
				/>
				{thumbnailUrl ? (
					<div className='relative h-full w-full'>
						<Image
							src={thumbnailUrl}
							alt='썸네일 미리보기'
							layout='fill'
							objectFit='cover'
						/>
					</div>
				) : (
					<div className='flex h-full w-full items-center justify-center bg-gray-100'>
						이미지 업로드
					</div>
				)}
			</div>
		</div>
	);
};
