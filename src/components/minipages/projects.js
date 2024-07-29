'use client';
import { motion } from 'framer-motion';

const cards = [
	{
		title: 'HotlineAI',
		company: {
			name: 'HotlineAI',
			url: 'https://hotlineai.co',
			image: 'hotlineai.png',
		},
		date: 'Under development',
		body: (
			<p>
				Revolutionizing the customer service experience, hotline.ai is an innovative AI solution
				that's transforming the way businesses handle mobile hotlines. Leveraging cutting-edge AI
				technology, this groundbreaking platform delivers a seamless, efficient experience for both
				customers and companies. With its advanced conversational capabilities and data-driven
				insights, hotline.ai is redefining the future of customer support.
			</p>
		),
		technologies: 'Node.js, Git, Express.js',
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

function Card({ data, i }) {
	return (
		<motion.div
			className="card flex flex-col z-20"
			initial={{ translateY: 30, opacity: 0 }}
			animate={{ translateY: 0, opacity: 1 }}
			transition={{ duration: 0.8, delay: (1 / 8) * i }}
		>
			{data.company.image && (
				<div className="flex justify-center items-center py-5">
					<img src={data.company.image} className="w-3/4" />
				</div>
			)}
			<h2>{data.title}</h2>
			<h4 className="mb-5">
				@ <a href={data.company.url}>{data.company.name}</a>{' '}
				<span className="text-white">&bull;</span> {data.date}
			</h4>
			{data.body}
			<p className="dark-text mt-5">
				<strong className="text-white">Technologies: </strong>
				{data.technologies}
			</p>
		</motion.div>
	);
}

export default function Projects() {
	return (
		<div className="grid grid-cols-2 auto-rows-auto gap-5">
			{cards.map((card, i) => (
				<Card key={i} data={card} i={i} />
			))}
		</div>
	);
}
