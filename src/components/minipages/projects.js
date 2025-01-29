'use client';
import { motion } from 'framer-motion';
import Card from '../card';

const cards = [
	// {
	// 	title: 'HotlineAI',
	// 	company: {
	// 		name: 'HotlineAI',
	// 		url: 'https://hotlineai.co',
	// 		image: 'hotlineai.png',
	// 	},
	// 	date: 'Under development',
	// 	body: (
	// 		<p>
	// 			Revolutionizing the customer service experience, hotline.ai is an innovative AI solution
	// 			that&apos;s transforming the way businesses handle mobile hotlines. Leveraging cutting-edge
	// 			AI technology, this groundbreaking platform delivers a seamless, efficient experience for
	// 			both customers and companies. With its advanced conversational capabilities and data-driven
	// 			insights, hotline.ai is redefining the future of customer support.
	// 		</p>
	// 	),
	// 	technologies: 'Node.js, Git, Express.js',
	// },
	{
		title: 'LTP (Local Time Protocol)',
		company: {
			name: 'GitHub',
			url: 'https://github.com/ismaeelakram/ltp',
			image:
				'https://user-images.githubusercontent.com/19865145/127964125-2172283c-d277-4c7b-b2db-052605e60f5e.jpeg',
		},
		body: (
			<p>
				<strong>LTP (Local Time Protocol)</strong> is a lightweight, Golang-based network protocol
				designed for precise time synchronization across machines. Using port 2, a master server
				distributes the correct time to slave servers upon request, ensuring accurate timekeeping.
				The protocol supports various request types, including <code>DATETIME</code>,{' '}
				<code>DATE</code>, <code>TIME</code>, and granular components like <code>HOUR</code>,{' '}
				<code>MINUTE</code>, and <code>NANOSECOND</code>. With a maximum request size of just 12
				bytes, LTP is efficient, fast, and easy to implement, making it ideal for systems requiring
				reliable time synchronization. Built in Golang, it leverages the language's concurrency and
				performance features to deliver a robust and scalable solution for time management in
				distributed systems.
			</p>
		),
	},
	{
		title: 'Hawkeye',
		company: {
			name: 'GitHub',
			url: 'https://github.com/ismaeelakram/hawkeye',
			image: 'https://i.imgur.com/kjdtwFp.png',
		},
		body: (
			<p>
				<strong>Hawkeye</strong> is a fast, resource-efficient, and scalable web crawler built using
				Python and Redis, a memory-based key-value database. Starting from a seed URL, Hawkeye
				scrapes web pages for links, titles, descriptions, and keywords, expanding its crawl like a
				spider web. It employs a multi-threaded queueing system to maximize speed, allowing users to
				specify the number of threads (<code>MAX_THREADS</code>) for concurrent scraping. During
				testing, Hawkeye demonstrated impressive scalability, collecting over 2 million links,
				scanning 24,000+ pages, and identifying 7,600+ unique keywords in just 3 hours. With
				real-time statistics and treemap visualizations, Hawkeye provides deep insights into web
				data diversity.
			</p>
		),
	},
	{
		title: 'Trojark',
		company: {
			name: 'GitHub',
			url: 'https://github.com/ismaeelakram/trojark',
			image: 'https://i.imgur.com/Oa10sNW.png',
		},
		body: (
			<p>
				<strong>Trojark</strong> is a Python-based, multi-platform remote-access trojan designed for
				remote command execution on victim machines. Built into a standalone executable using
				PyInstaller, Trojark establishes a socket connection to a hardcoded server IP on port 9258,
				requiring no authentication beyond an initial verification message. The server, which can be
				hosted on a VPS or via services like ngrok, allows attackers to execute commands or
				predefined scripts (e.g., retrieving the victim&apos;s public IP or triggering scare
				tactics) on the target machine. With its silent operation and ability to blend into other
				programs, Trojark is a discreet researching tool for remote access and control.
			</p>
		),
	},
	{
		title: 'C++ Graphing Calculator',
		company: {
			name: 'GitHub',
			url: 'https://github.com/IsmaeelAkram/GraphingCalculator',
			image:
				'https://raw.githubusercontent.com/IsmaeelAkram/GraphingCalculator/master/screenshot.png',
		},
		body: (
			<p>
				<strong>GraphingCalculator</strong> is a powerful graphing tool written in C++ using SFML
				for graphics rendering and TinyExpr++ for mathematical expression parsing. Designed for both
				Windows and UNIX/Linux systems, it allows users to visualize multiple equations
				simultaneously by simply separating them with spaces (e.g., <code>calc x x^2 sin(x)</code>).
				Customizable settings like window dimensions, font size, and rendering precision are defined
				in <code>constants.h</code>, making it adaptable to various use cases.
			</p>
		),
	},
	{
		title: 'Jason',
		company: {
			image: 'https://raw.githubusercontent.com/ismaeelakram/jason/master/logo.png?raw=true',
			name: 'GitHub',
			url: 'https://github.com/ismaeelakram/jason',
		},
		body: (
			<p>
				<strong>Jason</strong> is a lightweight and efficient hash-cracking tool written in C++,
				designed for simplicity and speed. With no external dependencies, Jason supports popular
				hashing algorithms like MD5, SHA1, SHA256, and more, while allowing users to define custom
				alphabets for brute-force cracking. It features auto-detection of hash types, an optional
				visualization mode for real-time cracking insights, and extensibility for adding custom
				algorithms.
			</p>
		),
	},
	{
		title: 'SharpUI',
		company: {
			name: 'GitHub',
			url: 'https://github.com/ismaeelakram/sharpui',
			// image:
			// 	'https://user-images.githubusercontent.com/19865145/124398789-9cba2b00-dce5-11eb-9ddc-7e1a0925c3b1.png',
		},
		body: (
			<p>
				<strong>Sharp UI</strong> is a personal React Native UI library designed to streamline app
				development with reusable, customizable components. Built to enhance consistency and
				efficiency across projects, Sharp UI provides a collection of pre-designed elements that can
				be easily integrated into any React Native application. With a focus on clean design and
				usability, this library is perfect for developers looking to accelerate their workflow while
				maintaining a polished and professional look. Explore the Figma components{' '}
				<a href="https://www.figma.com/file/0fmqev1kEyQiwc2dmwzfeR/Components?node-id=0%3A1">
					here
				</a>{' '}
				to see the full range of available UI elements.
			</p>
		),
	},
	{
		title: 'The Foundry',
		company: {
			name: 'Brooklyn Technical HS',
			url: 'https://bths.edu',
		},
		date: "Jun '20 - Jul '22",
		body: (
			<p>
				Working with like-minded students at Brooklyn Technical to create and manage the student-run
				social network! The Foundry is used for socializing, note-sharing, club organizing, etc.
			</p>
		),
		technologies: 'React.js, Google Cloud, Firebase, Google Workspace',
	},
	{
		title: 'Launchnow',
		company: {
			name: 'GitHub',
			url: 'https://github.com/ismaeelakram/launchnow',
		},
		date: "Dec '19 - Apr '21",
		body: (
			<p>
				An open source endeavor that allowed automatic deployment without a CI/CD pipeline. It used
				a simple command-line interface to interact with the server, telling it to fetch from your
				Git repository.
			</p>
		),
		technologies: 'Node.js, Git, Express.js',
	},
];

export default function Projects() {
	return (
		<div className="grid sm:grid-cols-3 auto-rows-auto gap-5">
			{cards.map((card, i) => (
				<Card key={i} data={card} i={i} />
			))}
		</div>
	);
}
