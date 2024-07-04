import dayjs from 'dayjs';
import { Post, PostAbstract } from '@/src/interfaces/post';

// 게시글 데이터 생성하기
export const createPost = (
	title: string,
	description: string,
	content: object
): Post => {
	const slug = encodeURIComponent(title);

	const createdAt = dayjs().locale('ko').format('YYYY년 MM월 DD일');
	const updatedAt = createdAt;

	const postData: Post = {
		slug,
		title,
		description,
		content,
		createdAt,
		updatedAt,
	};

	return postData;
};

// 게시글 상세 정보 불러오기
// export function getPostBySlug(slug: string, postDirectory: string) {
// 	const realSlug = slug.replace(/\.md$/, '');
// 	const fullPath = join(postDirectory, `${realSlug}.md`);
// 	const postContents = fs.readFileSync(fullPath, 'utf8');
// 	const { data, content } = matter(postContents);
// 	const readingMinutes = Math.ceil(readingTime(content).minutes);
// 	const dateString = dayjs(data.date).locale('ko').format('YYYY년 MM월 DD일');
// 	return {
// 		...data,
// 		readingMinutes,
// 		createdAt,
//     updatedAt
// 		slug: realSlug,
// 		content,
// 	} as Post;
// }

// 포스트 요약 정보 (url, slug, description)만 불러오기
// export function getPostAbstracts(postDirectory: string) {
// 	const files = getPostSlugsFrom(postDirectory);
// 	const postAbstracts: PostAbstract[] = [];

// 	files.forEach((file) => {
// 		const post = getPostBySlug(file, postDirectory);
// 		const { title, description, dateString, slug } = post;

// 		postAbstracts.push({
// 			title,
// 			description,
// 			dateString,
// 			slug,
// 		});
// 	});

// 	return postAbstracts;
// }

// 마크다운 콘텐츠를 HTML 파일로 변환하기
// export async function markdownToHTML(content: string) {
// 	const htmlContent = await unified()
// 		.use(remarkParse)
// 		.use(remarkGfm)
// 		.use(remarkGithub)
// 		.use(remarkBreaks)
// 		.use(remarkRehype)
// 		.use(rehypeFormat)
// 		.use(rehypeSlug)
// 		.use(rehypeAutolinkHeadings)
// 		.use(rehypePrettyCode)
// 		.use(rehypeStringify)
// 		.process(content);

// 	return htmlContent.toString();
// }
