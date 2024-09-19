import withBundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ['md', 'mdx', 'ts', 'tsx'],
};

const bundleAnalyzer = withBundleAnalyzer({
	enabled: process.env.ANALYZE === 'true',
});

export default bundleAnalyzer(nextConfig);
