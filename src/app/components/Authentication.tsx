import Link from 'next/link';
import { FingerPrintIcon } from '@heroicons/react/24/solid';

export default function Linkedin() {
	return (
		<Link href='/login'>
			<FingerPrintIcon width={24} />
		</Link>
	);
}
