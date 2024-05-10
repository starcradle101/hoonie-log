import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'hoonie-log',
	description: 'tech blog of hoonie',
	icons: {
		icon: './favicon.ico',
		apple: './apple-icon.png',
	},
};

export default function Home() {
	return (
		<section>
			<p>복잡함을 단순함으로 바꾸는 것을 좋아하는 개발자 후니훈입니다 :)</p>
		</section>
	);
}
