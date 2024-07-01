'use client';
import { Fragment, useCallback } from 'react';
import { type Editor } from '@tiptap/react';
import { createClient } from '@/src/utils/supabase/client';

import {
	Bold,
	Strikethrough,
	Italic,
	List,
	ListOrdered,
	Heading1,
	Heading2,
	Heading3,
	Quote,
	Code,
	CodeSquare,
	Image,
	Link,
	SeparatorHorizontal,
	Highlighter,
} from 'lucide-react';

type Props = {
	editor: Editor | null;
	content: string;
};

const Toolbar = ({ editor, content }: Props) => {
	const groupedToolbarItems = [
		[
			{
				icon: Bold,
				action: (editor: Editor) => editor.chain().focus().toggleBold().run(),
			},
			{
				icon: Italic,
				action: (editor: Editor) => editor.chain().focus().toggleItalic().run(),
			},
			{
				icon: Strikethrough,
				action: (editor: Editor) => editor.chain().focus().toggleStrike().run(),
			},
			{ icon: Link, action: (editor: Editor) => setLink(editor) },
			{
				icon: Highlighter,
				action: (editor: Editor) =>
					editor.chain().focus().toggleHighlight().run(),
			},
		],
		[
			{
				icon: Code,
				action: (editor: Editor) => editor.chain().focus().toggleCode().run(),
			},
			{
				icon: CodeSquare,
				action: (editor: Editor) =>
					editor.chain().focus().toggleCodeBlock().run(),
			},
			{
				icon: Quote,
				action: (editor: Editor) =>
					editor.chain().focus().toggleBlockquote().run(),
			},
			{ icon: Image, action: (editor: Editor) => handleImageUpload(editor) },
		],
		[
			{
				icon: Heading1,
				action: (editor: Editor) =>
					editor.chain().focus().toggleHeading({ level: 1 }).run(),
			},
			{
				icon: Heading2,
				action: (editor: Editor) =>
					editor.chain().focus().toggleHeading({ level: 1 }).run(),
			},
			{
				icon: Heading3,
				action: (editor: Editor) =>
					editor.chain().focus().toggleHeading({ level: 1 }).run(),
			},
			{
				icon: List,
				action: (editor: Editor) =>
					editor.chain().focus().toggleBulletList().run(),
			},
			{
				icon: ListOrdered,
				action: (editor: Editor) =>
					editor.chain().focus().toggleOrderedList().run(),
			},
			{
				icon: SeparatorHorizontal,
				action: (editor: Editor) =>
					editor.chain().focus().setHorizontalRule().run(),
			},
		],
	];

	const supabase = createClient();

	const uploadImageToSupabase = async (file: File) => {
		const { data, error } = await supabase.storage
			.from('images')
			.upload(`public/${file.name}`, file);

		if (error) {
			console.error('Error uploading file: ', error);
			return null;
		}

		const publicUrl = supabase.storage
			.from('images')
			.getPublicUrl(`public/${file.name}`);

		return publicUrl;
	};

	const handleImageUpload = async (editor: Editor) => {
		const input = document.createElement('input');
		input.type = 'file';
		input.accept = 'image/*';
		input.onchange = async (e) => {
			const target = e.target as HTMLInputElement;
			const file = target.files?.[0];

			if (file) {
				const url = await uploadImageToSupabase(file);
				if (url) {
					editor.chain().focus().setImage({ src: url.data.publicUrl }).run();
				}
			}
		};
		input.click();
	};

	const setLink = useCallback(
		(editor: Editor) => {
			const previousURL = editor.getAttributes('link').href;
			const url = window.prompt('URL', previousURL);

			if (url === null) {
				return;
			}

			if (url === '') {
				editor.chain().focus().extendMarkRange('link').unsetLink().run();
				return;
			}

			editor
				.chain()
				.focus()
				.extendMarkRange('link')
				.setLink({ href: url })
				.run();
		},
		[editor]
	);

	if (!editor) {
		return null;
	}

	return (
		<div className='flex overflow-x-auto border-b-2'>
			{groupedToolbarItems.map((group, groupIndex) => (
				<Fragment key={groupIndex}>
					{group.map((item, index) => (
						<button
							className='p-2'
							key={index}
							onClick={(e) => {
								e.preventDefault();
								item.action(editor);
							}}
						>
							<item.icon className='h-5 w-5' />
						</button>
					))}
					{groupIndex < groupedToolbarItems.length - 1 && (
						<div className='mx-1 my-2 border-l-2 border-slate-400' />
					)}
				</Fragment>
			))}
		</div>
	);
};
export default Toolbar;
