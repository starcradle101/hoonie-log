import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ['md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
	// 기타 필요한 플러그인 추가 예정
});

export default withMDX(nextConfig);
