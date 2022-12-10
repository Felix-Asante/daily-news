import "../styles/globals.css";
import Header from "./components/header";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<head />
			<body>
				<Header />
				<div>{children}</div>
			</body>
		</html>
	);
}
