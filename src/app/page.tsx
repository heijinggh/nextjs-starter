import {Button} from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
	return (
		<main className='flex flex-col items-center p-24'>
			<div>Hello</div>
			<Link href='/playground/counter'>
				<Button>
					Counter
				</Button>
			</Link>
		</main>
	);
}
