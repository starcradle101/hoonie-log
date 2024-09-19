import { FC, ChangeEvent } from 'react';
import { DescriptionInputProps } from '@/src/interfaces/post';

export const DescriptionInput: FC<DescriptionInputProps> = ({
	description,
	onChange,
}) => (
	<>
		<label htmlFor='description'>
			<span>설명</span>
			<span className='text-red-500'>*</span>
		</label>
		<input
			type='text'
			id='description'
			placeholder='작성할 글에 대한 간단한 설명을 입력해주세요.'
			className='mb-4 mt-2 block w-full resize-none rounded border-2 p-2 focus:outline-blue-500'
			value={description}
			onChange={onChange}
		/>
	</>
);
