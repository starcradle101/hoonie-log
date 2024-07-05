'use client';
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
import css from 'highlight.js/lib/languages/css';
import js from 'highlight.js/lib/languages/javascript';
import ts from 'highlight.js/lib/languages/typescript';
import html from 'highlight.js/lib/languages/xml';

import Toolbar from './Toolbar';
import { useEffect, useRef } from 'react';

const lowlight = createLowlight();
lowlight.register('js', js);
lowlight.register('ts', ts);
lowlight.register('css', css);
lowlight.register('html', html);

const Tiptap = ({ onChange, content }: any) => {
	const editorContainerRef = useRef<HTMLDivElement>(null);

	const handleChange = (newContent: string) => {
		onChange(newContent);
	};

	const editor = useEditor({
		extensions: [
			StarterKit.configure({
				codeBlock: false,
				heading: {
					levels: [1, 2, 3],
				},
			}),
			CodeBlockLowlight.configure({
				lowlight: createLowlight(common),
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
		editorProps: {
			attributes: {
				class: 'w-full focus:outline-none flex-1 relative',
			},
		},
		onUpdate: ({ editor }) => {
			handleChange(editor.getHTML());
		},
	});

	const updateEditorHeight = () => {
		if (editorContainerRef.current) {
			const containerHeight =
				window.innerHeight -
				editorContainerRef.current.getBoundingClientRect().top -
				80;
			editorContainerRef.current.style.maxHeight = `${containerHeight}px`;
		}
	};

	useEffect(() => {
		updateEditorHeight();
		window.addEventListener('resize', updateEditorHeight);

		return () => {
			window.removeEventListener('resize', updateEditorHeight);
		};
	}, []);

	return (
		<div
			ref={editorContainerRef}
			className='mt-2 flex flex-1 flex-col rounded border-2'
		>
			<Toolbar editor={editor} content={content} />
			<EditorContent
				editor={editor}
				className='flex h-full flex-1 flex-col overflow-auto whitespace-pre-line px-2 py-4'
			/>
		</div>
	);
};

export default Tiptap;
