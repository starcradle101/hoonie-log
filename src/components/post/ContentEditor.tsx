import { FC } from 'react';
import { ContentEditorProps } from '@/src/interfaces/post';
import Tiptap from '@/src/app/components/editor/Tiptap';

export const ContentEditor: FC<ContentEditorProps> = ({
	content,
	onChange,
}) => (
	<div className='h-full'>
		<label htmlFor='body'>
			<span>내용</span>
		</label>
		<Tiptap content={content} onChange={onChange} />
	</div>
);
