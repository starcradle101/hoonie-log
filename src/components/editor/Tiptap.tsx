import { FC, useCallback, useMemo } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import FontFamily from '@tiptap/extension-font-family';
import Highlight from '@tiptap/extension-highlight';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import ListKeymap from '@tiptap/extension-list-keymap';
import StarterKit from '@tiptap/starter-kit';
import TextStyle from '@tiptap/extension-text-style';
import Typography from '@tiptap/extension-typography';
import Underline from '@tiptap/extension-underline';
import { common, createLowlight } from 'lowlight';
import Toolbar from './Toolbar';

const lowlight = createLowlight(common);

interface TiptapProps {
	onChange: (content: object) => void;
	content: object;
}

const Tiptap: FC<TiptapProps> = ({ onChange, content }) => {
	const handleChange = useCallback(
		(newContent: object) => {
			onChange(newContent);
		},
		[onChange]
	);

	const extensions = useMemo(
		() => [
			StarterKit.configure({
				codeBlock: false,
				heading: {
					levels: [1, 2, 3],
				},
			}),
			CodeBlockLowlight.configure({
				lowlight,
			}),
			FontFamily,
			Highlight,
			Image,
			Link.configure({
				autolink: false,
			}),
			ListKeymap,
			TextStyle,
			Typography,
			Underline,
		],
		[]
	);

	const editor = useEditor({
		extensions,
		content,
		editorProps: {
			attributes: {
				class:
					'w-full flex-1 relative prose lg:prose-lg focus:outline-none dark:prose-invert',
			},
		},
		onUpdate: ({ editor }) => {
			handleChange(editor.getJSON());
		},
	});

	return (
		<div className='mt-2 flex flex-col rounded border-2' id='body'>
			<Toolbar editor={editor} content={content} />
			<EditorContent
				editor={editor}
				className='flex h-[730px] flex-grow-0 flex-col overflow-auto whitespace-pre-line px-2 py-4'
			/>
		</div>
	);
};

export default Tiptap;
