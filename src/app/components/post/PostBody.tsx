'use client';
import '@/src/app/globals.css';
import { useEffect } from 'react';
import hljs from 'highlight.js/lib/core';
import { generateHTML } from '@tiptap/html';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import FontFamily from '@tiptap/extension-font-family';
import Highlight from '@tiptap/extension-highlight';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import ListKeymap from '@tiptap/extension-list-keymap';
import TextStyle from '@tiptap/extension-text-style';
import Typography from '@tiptap/extension-typography';
import Underline from '@tiptap/extension-underline';
import StarterKit from '@tiptap/starter-kit';
import { useMemo } from 'react';

import { createLowlight } from 'lowlight';
import css from 'highlight.js/lib/languages/css';
import js from 'highlight.js/lib/languages/javascript';
import ts from 'highlight.js/lib/languages/typescript';
import html from 'highlight.js/lib/languages/xml';

const lowlight = createLowlight();
lowlight.register('js', js);
lowlight.register('ts', ts);
lowlight.register('css', css);
lowlight.register('html', html);

hljs.registerLanguage('javascript', js);
hljs.registerLanguage('typescript', ts);
hljs.registerLanguage('css', css);
hljs.registerLanguage('html', html);

interface PostBodyProps {
	postContent: object;
}

export default function PostBody({ postContent }: PostBodyProps) {
	const output = useMemo(() => {
		return generateHTML(postContent, [
			StarterKit.configure({
				codeBlock: false,
				heading: {
					levels: [1, 2, 3],
				},
			}),
			CodeBlockLowlight.configure({
				lowlight: lowlight,
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
		]);
	}, [postContent]);

	useEffect(() => {
		document.querySelectorAll('pre code').forEach((el) => {
			hljs.highlightElement(el as HTMLElement);
		});
	}, [output]);

	return (
		<section
			className='tiptap mb-2 dark:text-white'
			dangerouslySetInnerHTML={{ __html: output }}
		></section>
	);
}
