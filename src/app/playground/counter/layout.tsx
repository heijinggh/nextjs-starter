
export default function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className='h-full bg-lime-300'>{children}</div>
	);
}
