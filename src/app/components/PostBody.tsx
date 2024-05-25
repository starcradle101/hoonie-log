interface PostBodyProps {
	postContent: string;
}

export default function PostBody({ postContent }: PostBodyProps) {
	return (
		<section
			className='prose mb-2 border-b-2 border-b-slate-200 pb-2'
			dangerouslySetInnerHTML={{ __html: postContent }}
		></section>
	);
}
