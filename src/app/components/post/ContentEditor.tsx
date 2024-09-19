import { FC } from 'react';
import { ContentEditorProps } from '@/src/interfaces/post';
import Tiptap from '@/src/app/components/editor/Tiptap';

export const ContentEditor: FC<ContentEditorProps> = ({
	content,
	onChange,
}) => (
	<>
		<label htmlFor='body'>
			<span>본문</span>
			<span className='text-red-500'>*</span>
		</label>
		<Tiptap content={content} onChange={onChange} id='body' />
	</>
);
