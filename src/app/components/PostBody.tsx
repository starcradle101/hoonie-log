interface PostBodyProps {
	postContent: string;
}

export default function PostBody({ postContent }: PostBodyProps) {
	return (
		<section
			className='prose'
			dangerouslySetInnerHTML={{ __html: postContent }}
		></section>
	);
}
