import withBundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'sryzicafffncxapkoqch.supabase.co',
				port: '',
				pathname: '/storage/v1/object/public/**',
			},
		],
	},
	pageExtensions: ['md', 'mdx', 'ts', 'tsx'],
};

const bundleAnalyzer = withBundleAnalyzer({
	enabled: process.env.ANALYZE === 'true',
});

export default bundleAnalyzer(nextConfig);
