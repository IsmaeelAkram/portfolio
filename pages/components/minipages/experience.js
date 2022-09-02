import styles from '../../../styles/experience.module.css';

const projects = [
	{
		type: 'Experience',
		title: 'Full Stack Developer // Systems Admin',
		where: '867Crypto',
		when: 'Aug 2021 — Dec 2021',
		description:
			'Created the front-end web-app & complete back-end <em>infrastructure</em> on <em>Amazon Web Services (AWS)</em> for 867Crypto, a slot machine game with cryptocurrency prizes with over <em>15,000 active users</em>.',
		technologies:
			'React.js, Docker, AWS (EC2, Lightsail, RDS, and S3), Redis, MongoDB, MySQL, TailwindCSS, Flask, Python, Node.js, GitHub CI/CD, Atlassian',
	},
	{
		type: 'Experience',
		title: 'Lead Full Stack Developer',
		where: 'Prestige Cars of Chipping Norton',
		when: 'Aug 2022',
		description:
			'Created a one-page website for Prestige Cars, the best chauffeur service in the Cotswolds. The website backend has a messaging function that alerts their drivers whenever new requests are submitted, and allows their staff to change the website content as needed.',
		technologies: 'Cascading Style Sheets (CSS), HTML, Next.js, React.js, REST APIs, JavaScript',
	},
	{
		type: 'Project',
		title: 'launchnow',
		where: '',
		when: 'Dec 2019 — Apr 2021',
		description:
			'An open source endeavor that allowed automatic deployment without a CI/CD pipeline. It used a simple command-line interface to interact with the server, telling it to fetch from your Git repository.',
		technologies: 'Node.js, Git, Express.js',
	},
	{
		type: 'Certification',
		title: 'Cloud Application Development Specialization',
		where: 'IBM',
		when: 'Aug 2021',
		description:
			'Certified by IBM in <em>Cloud Application Development</em> and <em>Systems Administration</em>.',
		technologies: '',
	},
	{
		type: 'Certification',
		title: 'C++ Certified Associate Programmer',
		when: 'July 2022',
		where: '',
		description: 'Certified by CPA at an <em>intermediate level and familiarity of C++</em>.',
		technologies: '',
	},
];

function ProjectCard({ title, where, when, description, technologies, type }) {
	return (
		<div className={styles.project}>
			<p className={styles.type}>{type}</p>
			<p className={styles.title}>{title}</p>
			<p className={styles.wherewhen}>
				{where != '' ? (
					<>
						{where}
						<span></span>
						{'•'}
						<span></span>
						<span>{when}</span>
					</>
				) : (
					<span>{when}</span>
				)}
			</p>
			<p className={styles.description} dangerouslySetInnerHTML={{ __html: description }}></p>
			<p className={styles.description}>
				{technologies != '' && (
					<>
						<strong>
							<em>Technologies: </em>
						</strong>
						{technologies}
					</>
				)}
			</p>
		</div>
	);
}

export default function Experience() {
	return (
		<div className="experience">
			<ul className={styles.list} id="projects">
				{projects.map((project, index) => (
					<li key={index}>
						<ProjectCard key={index} {...project} />
					</li>
				))}
			</ul>
		</div>
	);
}
