'use client';
import { Fragment, useCallback } from 'react';
import { type Editor } from '@tiptap/react';
import { supabaseClient } from '@/src/utils/supabase/client';

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
	content: object;
};

const Toolbar = ({ editor }: Props) => {
	const uploadImageToSupabase = async (file: File) => {
		const { error } = await supabaseClient.storage
			.from('images')
			.upload(`public/${file.name}`, file);

		if (error) {
			console.error('Error uploading file: ', error);
			return null;
		}

		const publicUrl = supabaseClient.storage
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

	const createToolbarItem = (
		icon: React.ElementType,
		action: (editor: Editor) => void,
		isActive: (editor: Editor) => boolean
	) => ({ icon, action, isActive });

	const groupedToolbarItems = [
		[
			createToolbarItem(
				Bold,
				(editor) => editor.chain().focus().toggleBold().run(),
				(editor) => editor.isActive('bold')
			),
			createToolbarItem(
				Italic,
				(editor) => editor.chain().focus().toggleItalic().run(),
				(editor) => editor.isActive('italic')
			),
			createToolbarItem(
				Strikethrough,
				(editor) => editor.chain().focus().toggleStrike().run(),
				(editor) => editor.isActive('strike')
			),
			createToolbarItem(Link, setLink, (editor) => editor.isActive('link')),
			createToolbarItem(
				Highlighter,
				(editor) => editor.chain().focus().toggleHighlight().run(),
				(editor) => editor.isActive('highlight')
			),
		],
		[
			createToolbarItem(
				Code,
				(editor) => editor.chain().focus().toggleCode().run(),
				(editor) => editor.isActive('code')
			),
			createToolbarItem(
				CodeSquare,
				(editor) => editor.chain().focus().toggleCodeBlock().run(),
				(editor) => editor.isActive('codeBlock')
			),
			createToolbarItem(
				Quote,
				(editor) => editor.chain().focus().toggleBlockquote().run(),
				(editor) => editor.isActive('blockquote')
			),
			createToolbarItem(Image, handleImageUpload, () => false),
		],
		[
			createToolbarItem(
				Heading1,
				(editor) => editor.chain().focus().toggleHeading({ level: 1 }).run(),
				(editor) => editor.isActive('heading', { level: 1 })
			),
			createToolbarItem(
				Heading2,
				(editor) => editor.chain().focus().toggleHeading({ level: 2 }).run(),
				(editor) => editor.isActive('heading', { level: 2 })
			),
			createToolbarItem(
				Heading3,
				(editor) => editor.chain().focus().toggleHeading({ level: 3 }).run(),
				(editor) => editor.isActive('heading', { level: 3 })
			),
			createToolbarItem(
				List,
				(editor) => editor.chain().focus().toggleBulletList().run(),
				(editor) => editor.isActive('bulletList')
			),
			createToolbarItem(
				ListOrdered,
				(editor) => editor.chain().focus().toggleOrderedList().run(),
				(editor) => editor.isActive('orderedList')
			),
			createToolbarItem(
				SeparatorHorizontal,
				(editor) => editor.chain().focus().setHorizontalRule().run(),
				() => false
			),
		],
	];

	return (
		<div className='flex overflow-x-auto border-b-2'>
			{groupedToolbarItems.map((group, groupIndex) => (
				<Fragment key={groupIndex}>
					{group.map((item, index) => (
						<button
							className={`m-1 p-1 ${
								item.isActive(editor)
									? 'rounded-md bg-green-500 text-white'
									: ''
							}`}
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
