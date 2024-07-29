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

const imagesToPreload = [
	'/me.png',
	'/smartbooks360.svg',
	'/prestigecars.svg',
	'/867Casino.svg',
	'/hotlineai.png',
	'/arrecovery.svg',
	'/ccna.png',
	'/aws-devops.png',
	'/ibm.png',
	'/noise.png',
];

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				{imagesToPreload.map((src) => (
					<link key={src} rel="preload" as="image" href={src}></link>
				))}
			</head>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
