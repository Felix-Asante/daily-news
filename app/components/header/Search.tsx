"use client";
import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";
export default function Search() {
	const [input, setInput] = useState("");
	const router = useRouter();

	const handleSearch = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!input) return;

		router.push(`/search?term=${input}`);
	};

	return (
		<form
			className="max-w-6xl mx-auto flex justify-between items-center px-5"
			onSubmit={handleSearch}
		>
			<input
				type="text"
				className="w-full h-14 text-sm rounded-sm placeholder-gray-500 text-gray-500 outline-none flex-1 bg-transparent dark:text-orange-400"
				onChange={(e) => setInput(e.target.value)}
				placeholder="Search keyword"
			/>
			<button
				type="submit"
				disabled={!input}
				className="text-orange-400 disabled:text-gray-400 text-sm"
			>
				Search
			</button>
		</form>
	);
}
