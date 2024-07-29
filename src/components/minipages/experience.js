const cards = [
	{
		title: 'Lead App Developer',
		company: { name: 'Outer Labs', url: 'https://outerlabs.studio', image: 'outerlabs.svg' },
		date: "Nov '23 - Present",
		body: (
			<p>
				Working with clients, at our design studio, to develop websites, all kinds of custom
				software, manage private & cloud server infrastructure, and ensure enterprise-grade secure
				solutions for new & established businesses.
			</p>
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
			<p>
				Working with clients, at our design studio, to develop websites, all kinds of custom
				software, manage private & cloud server infrastructure, and ensure enterprise-grade secure
				solutions for new & established businesses.
			</p>
		),
	},
	{
		title: 'Frontend Web Developer',
		company: {
			name: 'Prestige Cars',
			url: 'https://prestigecarschippingnorton.com',
			image: 'prestigecars.svg',
		},
		date: 'Freelance',
		body: (
			<ul>
				<li>
					Collaborated with Prestige Cars of Chipping Norton, a chauffeur service in the Cotswolds
					to establish and enhance their online presence
				</li>
				<li>
					Designed and developed a website backend, including a messaging function to notify drivers
					of new requests
				</li>
			</ul>
		),
	},
	{
		title: 'Full-stack Developer & Linux Administrator',
		company: { name: 'Outer Labs', url: 'https://outerlabs.studio', image: '867Casino.svg' },
		date: 'Freelance',
		body: (
			<ul>
				<li>
					Collaborated with Prestige Cars of Chipping Norton, a chauffeur service in the Cotswolds
					to establish and enhance their online presence
				</li>
				<li>
					Designed and developed a website backend, including a messaging function to notify drivers
					of new requests
				</li>
			</ul>
		),
	},
];

function Card({ data }) {
	return (
		<div className="card flex flex-col">
			<div className="flex justify-center items-center h-32">
				<img src={data.company.image} className="w-3/4" />
			</div>
			<h2>{data.title}</h2>
			<h4 className="mb-5">
				@ <a href={data.company.url}>{data.company.name}</a>{' '}
				<span className="text-white">&bull;</span> {data.date}
			</h4>
			{data.body}
		</div>
	);
}

export default function Experience() {
	return (
		<div className="grid grid-cols-2 auto-rows-auto gap-5 ">
			{cards.map((card, index) => (
				<Card key={index} data={card} />
			))}
		</div>
	);
}
