import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Navigation from "./Navigations";
import Search from "./Search";
export default function Header() {
	return (
		<header>
			<div className="grid grid-cols-3 p-10 items-center">
				<Bars3Icon className="w-8 h-8 cursor-pointer" />
				<Link href="/" prefetch={false}>
					<h1 className="font-serif text-4xl flex-1 text-center">
						DAILY{" "}
						<span className="decoration-6 underline decoration-orange-400">
							NEWS
						</span>
					</h1>
				</Link>
				<div className="flex items-center justify-end space-x-2">
					{/* DARK MODE BTN */}
					<button className="hidden md:inline bg-slate-900 px-4 text-white lg:px-8 py-2 lg:py-4 rounded-full dark:bg-slate-400">
						Subscribe Now
					</button>
				</div>
			</div>
			{/* NAVIGATION */}
			<Navigation />
			{/* SEARCH FIELD */}
			<Search />
		</header>
	);
}
