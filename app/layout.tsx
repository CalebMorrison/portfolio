import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Caleb Morrison - Software Developer',
	description:
		'Welcome to my portfolio! I am a passionate Software Developer with experience in browser based applications coded in javascript, angularJS, typescript, and java',
	keywords: [
		'Software Developer',
		'Java',
		'Javascript',
		'Typescript',
		'NodeJS',
		'HTML',
		'CSS',
		'AWS',
		'Git',
		'SQL',
		'API Development',
		'Linux',
		'Jira',
	],
	authors: [{ name: 'Caleb Morrison' }],
	creator: 'Caleb Morrison',
	openGraph: {
		title: 'Caleb Morrison - Software Developer Portfolio',
		description: 'Passionate Software Developer crafting browser based applications.',
		url: 'https://calebmorrison.github.io/portfolio/',
		siteName: 'Caleb Morrison - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Caleb Morrison - Software Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
