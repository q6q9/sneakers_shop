import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import { Head } from "./head";

export default function DefaultLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="relative flex flex-col h-screen">
			<Head />
			<Navbar />
			<main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
				{children}
			</main>
			<footer className="w-full flex items-center justify-center py-3">
				<Link
					isExternal
					className="flex items-center gap-1 text-current"
					href="mailto:evsv.mx@gmail.com"
					title="author email"
				>
					<span className="text-default-600">Автор проекта</span>
					<p className="text-primary">Евсеев Максим</p>
				</Link>
			</footer>
		</div>
	);
}
