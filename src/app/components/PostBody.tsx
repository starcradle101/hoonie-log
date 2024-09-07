import '@/src/app/globals.css';
interface PostBodyProps {
	postContent: string;
}

export default function PostBody({ postContent }: PostBodyProps) {
	return (
		<section
			className='prose mb-2 dark:text-white'
			dangerouslySetInnerHTML={{ __html: postContent }}
		></section>
	);
}
