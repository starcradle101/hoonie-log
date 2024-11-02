import Link from 'next/link';
import { Fingerprint } from 'lucide-react';

export default function Linkedin() {
	return (
		<Link href='/dashboard'>
			<Fingerprint width={24} height={24} />
		</Link>
	);
}
