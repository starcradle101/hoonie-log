import { FC } from 'react';
import { TitleInputProps } from '@/src/interfaces/post';

export const TitleInput: FC<TitleInputProps> = ({ title, onChange }) => (
	<>
		<label htmlFor='title'>
			<span>제목</span>
			<span className='text-red-500'>*</span>
		</label>
		<input
			type='text'
			id='title'
			placeholder='작성할 글의 제목을 입력해주세요.'
			className='mb-4 mt-2 block w-full resize-none rounded border-2 p-2 focus:outline-blue-500'
			value={title}
			onChange={onChange}
		/>
	</>
);
