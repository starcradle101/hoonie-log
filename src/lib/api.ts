import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';
import dayjs from 'dayjs';
import readingTime from 'reading-time';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkGithub from 'remark-github';
import remarkBreaks from 'remark-breaks';
import remarkRehype from 'remark-rehype';
import rehypeFormat from 'rehype-format';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeStringify from 'rehype-stringify';
import { Post, PostAbstract } from '@/src/interfaces/post';

// 카테고리 작성 글 슬러그 목록을 불러오기
export function getPostSlugsFrom(postDirectory: string) {
	return fs.readdirSync(postDirectory);
}

// 게시글 상세 정보 불러오기
export function getPostBySlug(slug: string, postDirectory: string) {
	const realSlug = slug.replace(/\.md$/, '');
	const fullPath = join(postDirectory, `${realSlug}.md`);
	const postContents = fs.readFileSync(fullPath, 'utf8');
	const { data, content } = matter(postContents);
	const readingMinutes = Math.ceil(readingTime(content).minutes);
	const dateString = dayjs(data.date).locale('ko').format('YYYY년 MM월 DD일');
	return {
		...data,
		readingMinutes,
		dateString,
		slug: realSlug,
		content,
	} as Post;
}

// 포스트 요약 정보 (url, slug, description)만 불러오기
export function getPostAbstracts(postDirectory: string) {
	const files = getPostSlugsFrom(postDirectory);
	const postAbstracts: PostAbstract[] = [];

	files.forEach((file) => {
		const post = getPostBySlug(file, postDirectory);
		const { title, description, dateString, slug } = post;

		postAbstracts.push({
			title,
			description,
			dateString,
			slug,
		});
	});

	return postAbstracts;
}

// 마크다운 콘텐츠를 HTML 파일로 변환하기
export async function markdownToHTML(content: string) {
	const htmlContent = await unified()
		.use(remarkParse)
		.use(remarkGfm)
		.use(remarkGithub)
		.use(remarkBreaks)
		.use(remarkRehype)
		.use(rehypeFormat)
		.use(rehypeSlug)
		.use(rehypeAutolinkHeadings)
		.use(rehypePrettyCode)
		.use(rehypeStringify)
		.process(content);

	return htmlContent.toString();
}
