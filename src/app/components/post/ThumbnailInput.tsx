import { FC } from 'react';
import { ThumbnailInputProps } from '@/src/interfaces/post';
import Image from 'next/image';

export const ThumbnailInput: FC<ThumbnailInputProps> = ({
	thumbnailUrl,
	onChange,
}) => (
	<>
		<label htmlFor='thumbnail'>
			<span>썸네일</span>
		</label>
		<input
			type='file'
			id='thumbnail'
			accept='image/*'
			onChange={onChange}
			className='mb-4 mt-2 block w-full'
		/>
		{thumbnailUrl && (
			<div className='relative mb-4 h-[200px] w-[200px]'>
				<Image
					src={thumbnailUrl}
					alt='썸네일 미리보기'
					fill
					style={{ objectFit: 'cover' }}
				/>
			</div>
		)}
	</>
);
