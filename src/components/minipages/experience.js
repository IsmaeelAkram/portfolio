'use client';
import { motion } from 'framer-motion';

const cards = [
	{
		title: 'Lead App Developer',
		company: { name: 'Outer Labs', url: 'https://outerlabs.studio', image: 'outerlabs.svg' },
		date: "Nov '23 - Present",
		body: (
			<ul>
				<li>Working closely with clients at our design studio.</li>
				<li>
					Developing websites, mobile apps, and all kinds of private and proprietary software.
				</li>
				<li>Managing private and cloud server infrastructure.</li>
				<li>Ensuring enterprise-grade secure solutions for new and established businesses.</li>
			</ul>
		),
	},
	{
		title: 'Full-stack Developer',
		company: { name: 'AR Recovery', url: 'https://arrecovery.uk', image: 'arrecovery.svg' },
		date: 'Freelance',
		body: (
			<ul>
				<li>
					Designed and developed a business website for AR Vehicle Recovery, the go-to vehicle
					recovery service in Oxfordshire, UK.
				</li>
				<li>
					Developed a management system for the business to dispatch recovery, track vehicles, and
					handle costs.
				</li>
				<li>
					Developed a custom booking system to allow customers to book vehicle recovery services.
				</li>
			</ul>
		),
	},
	{
		title: 'Frontend Web Developer',
		company: {
			name: 'Smartbooks360',
			url: 'https://smartbooks360.com',
			image: 'smartbooks360.svg',
		},
		date: 'Freelance',
		body: (
			<ul>
				<li>
					Designed and developed a modern business website for Smartbooks360, an online outsourced
					bookkeeping solution. Helped increase business revenue and leads.
				</li>
				<li>
					Developed a management system to handle costs, track clients, and automate tax
					calculations.
				</li>
				<li>Managed cloud services on edge, to cater correctly to international clients.</li>
			</ul>
		),
	},
	// {
	// 	title: 'Frontend Web Developer',
	// 	company: {
	// 		name: 'Prestige Cars',
	// 		url: 'https://prestigecarschippingnorton.com',
	// 		image: 'prestigecars.svg',
	// 	},
	// 	date: 'Freelance',
	// 	body: (
	// 		<ul>
	// 			<li>
	// 				Collaborated with Prestige Cars of Chipping Norton, a chauffeur service in the Cotswolds
	// 				to establish and enhance their online presence
	// 			</li>
	// 			<li>
	// 				Developed a cloud messaging function to notify drivers of new requests and messages from
	// 				viewers local to <strong>their</strong> area.
	// 			</li>
	// 			<li>
	// 				Demonstrated technical proficiency and effective communication skills while executing the
	// 				project
	// 			</li>
	// 			<li>
	// 				Enabled improved customer experience and contributed to 40% increased business revenue
	// 			</li>
	// 		</ul>
	// 	),
	// },
	{
		title: 'Full-stack Developer & Linux Administrator',
		company: { name: 'Outer Labs', url: 'https://outerlabs.studio', image: '867Casino.svg' },
		date: 'Freelance',
		body: (
			<ul>
				<li>
					Worked closely with clients to lead the development of 867 Crypto, a cryptocurrency-based
					slot machine game that grew to 15,000 active users.
				</li>
				<li>
					Built, managed, and scaled resilient enterprise server infrastructure (across the US,
					Europe, and South Asia) on AWS. Utilized AWS CloudFormation, Elastic Compute Cloud (EC2),
					Lambda, Elastic Beanstalk, Elastic Container Service (ECS), S3, Redis, and MongoDB.
				</li>
				<li>
					Created a secure and reliable cryptocurrency payment system for players to enter and
					manage wagers, and receive rewards based on gameplay.
				</li>
				<li>
					Created a modern game interface using React, Redux, TailwindCSS, and Framer Motion to
					communicate with our game servers using REST, GraphQL, and Socket.IO (WebSockets).
				</li>
				<li>
					Demonstrated a strong skill set in full-stack development, cloud computing, and server
					administration.
				</li>
			</ul>
		),
	},
];

function Card({ data, i }) {
	return (
		<motion.div
			className="card flex flex-col z-20 group cursor-pointer"
			initial={{ translateY: 30, opacity: 0 }}
			animate={{ translateY: 0, opacity: 1 }}
			transition={{ duration: 0.8, delay: (1 / 8) * i }}
		>
			<div className="flex justify-center items-center py-5">
				<img src={data.company.image} className="w-3/4 group-hover:scale-110 transition-all" />
			</div>
			<h2>{data.title}</h2>
			<h4 className="mb-5">
				@{' '}
				<a href={data.company.url} target="_blank">
					{data.company.name}
				</a>{' '}
				<span className="text-white">&bull;</span> {data.date}
			</h4>
			{data.body}
		</motion.div>
	);
}

export default function Experience() {
	return (
		<div className="grid sm:grid-cols-3 auto-rows-auto gap-5">
			{cards.map((card, i) => (
				<Card key={i} data={card} i={i} />
			))}
		</div>
	);
}
