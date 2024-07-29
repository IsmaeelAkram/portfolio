import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Ismaeel Akram | Full-stack dev & System admin',
	// title: 'ISMAEEL AKRAM — FULL STACK DEV / SYSTEM ADMIN',
	description:
		'Full-stack developer & systems administrator in New York City. Welcome to my portfolio.',
	openGraph: {
		title: 'Ismaeel Akram | Full-stack dev & System admin',
		description:
			'Full-stack developer & systems administrator in New York City. Welcome to my portfolio.',
		images: [{ url: 'https://ismaeelakram.com/me.png' }],
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
