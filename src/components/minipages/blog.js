'use client';
import { motion } from 'framer-motion';

const posts = [
	{
		title: "America's Deepseek Dilemma",
		description: "China's Deepseek AI can't be trusted, but OpenAI can be?",
		date: new Date('2024-01-29'),
		body: 'Test',
		// image_url: 'https://www.cybereason.com/hubfs/On-Prem-Vault-Header.png',
	},
	{
		title: 'Lessons from the CIA\'s "Devnet"',
		description:
			"By studying the CIA's top-secret network, I learned a lot about how managing my own could be lucrative, and how to architect it.",
		date: new Date('2024-01-29'),
		body: 'Test',
		// image_url: 'https://www.cybereason.com/hubfs/On-Prem-Vault-Header.png',
	},
];

function PostCard({ data, i }) {
	return (
		<motion.div
			className="card flex flex-col z-20 group font-serif"
			initial={{ translateY: 30, opacity: 0 }}
			animate={{ translateY: 0, opacity: 1 }}
			transition={{ duration: 0.8, delay: (1 / 8) * i }}
		>
			{data.image_url && (
				<div className="flex justify-center items-center mb-5">
					<img
						src={data.image_url}
						className="w-full group-hover:scale-105 transition-all rounded-lg"
					/>
				</div>
			)}
			<h2>{data.title}</h2>
			<h4 className="mt-1">
				{data.date.toLocaleDateString('en-US', {
					year: 'numeric',
					month: 'long',
					day: 'numeric',
				})}
			</h4>
			<p className="mt-4">{data.description}</p>
			{/* {data.body} */}
		</motion.div>
	);
}

export default function Blog() {
	return (
		<div className="grid sm:grid-cols-3 auto-rows-auto gap-5">
			{posts.map((card, i) => (
				<PostCard key={i} data={card} i={i} />
			))}
		</div>
	);
}
