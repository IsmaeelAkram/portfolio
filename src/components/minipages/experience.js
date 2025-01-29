'use client';
import { motion } from 'framer-motion';
import Card from '../card';

const cards = [
	{
		title: 'Lead App Developer',
		company: { name: 'Outer Labs Studio', url: 'https://outerlabs.studio', image: 'outerlabs.svg' },
		date: "Nov '23 - Present",
		body: (
			<ul>
				<li>
					Leading the development and maintenance of websites, mobile applications, business tools,
					and proprietary software for diverse clients, collaborating closely with a team of 4
					developers.
				</li>
				<li>
					Plan and manage on-premise and AWS cloud server infrastructure, delivering scalable
					solutions for startups and established businesses.
				</li>
				<li>
					Implemented serverless microservices, reducing server costs by 82% and improving API
					response times by 51%.
				</li>
				<li>
					Contributing to the studio’s success, earning 3 industry awards and generating six-figure
					profits.
				</li>
			</ul>
		),
	},
	{
		title: 'Frontend Web Developer',
		company: {
			name: 'SmartBooks360',
			url: 'https://smartbooks360.com',
			image: 'smartbooks360.svg',
		},
		date: 'Jan 2024 - Present',
		body: (
			<ul>
				<li>
					Designed, developed, and maintaining a modern, responsive website for SmartBooks360, an
					online bookkeeping solution, resulting in a 36% increase in revenue and lead generation.
				</li>
				<li>
					Built a comprehensive management system to streamline cost tracking, client management,
					and automated expense calculations for 100+ clients.
				</li>
				<li>
					Optimized global accessibility by managing Google Cloud services on edge, ensuring
					seamless performance for international users.
				</li>
			</ul>
		),
	},
	{
		title: 'Full Stack Developer',
		company: {
			name: 'AR Recovery',
			url: 'https://arrecovery.uk',
			image: 'arrecovery.svg',
		},
		date: 'Summer 2024',
		body: (
			<ul>
				<li>
					Designed and developed a professional business website for AR Vehicle Recovery, a leading
					vehicle recovery service in Oxfordshire.
				</li>
				<li>
					Created a robust management system to facilitate vehicle tracking, cost management, and
					recovery dispatch operations.
				</li>
				<li>
					Designed a booking platform that allowed customers to schedule vehicle recovery services
					online, increasing user engagement by ~60% and receiving positive feedback from 93% of
					surveyed customers.
				</li>
			</ul>
		),
	},
	{
		title: 'Lead Developer & Linux Systems Administrator',
		company: {
			name: 'Outer Labs',
			url: 'https://outerlabs.studio',
			image: '867Casino.svg',
		},
		date: 'Aug 2021 - Feb 2022',
		body: (
			<ul>
				<li>
					Led the development of 867 Casino, a slot machine game that achieved 15,000 active users,
					showcasing expertise in full-stack development and cloud computing.
				</li>
				<li>
					Designed, deployed, and scaled resilient global server infrastructure on AWS, ensuring
					high availability and performance.
				</li>
				<li>
					Engineered a modern game interface using React, TailwindCSS, and Framer Motion, integrated
					with REST APIs and WebSockets for seamless server communication.
				</li>
				<li>
					Demonstrated proficiency in server administration, cloud architecture, and delivering
					high-quality user experiences.
				</li>
			</ul>
		),
	},
];

export default function Experience() {
	return (
		<div className="grid sm:grid-cols-3 auto-rows-auto gap-5">
			{cards.map((card, i) => (
				<Card key={i} data={card} i={i} />
			))}
		</div>
	);
}
