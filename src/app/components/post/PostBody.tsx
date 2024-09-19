'use client';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import FontFamily from '@tiptap/extension-font-family';
import Highlight from '@tiptap/extension-highlight';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import ListKeymap from '@tiptap/extension-list-keymap';
import TextStyle from '@tiptap/extension-text-style';
import Typography from '@tiptap/extension-typography';
import Underline from '@tiptap/extension-underline';
import React from 'react';
import { common, createLowlight } from 'lowlight';
import ToC from './ToC';

interface PostBodyProps {
	postContent: object;
}

export default function PostBody({ postContent }: PostBodyProps) {
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
		content: postContent,
		editable: false,
		editorProps: {
			attributes: {
				class:
					'prose m-5 prose lg:prose-lg focus:outline-none dark:prose-invert mx-auto',
			},
		},
	});

	if (!editor) {
		return null;
	}

	return (
		<section className='mb-2'>
			<ToC />
			<EditorContent editor={editor} />
		</section>
	);
}
