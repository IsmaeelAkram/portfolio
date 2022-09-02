import Head from 'next/head';
import Image from 'next/image';
import Hero from './components/hero';
import Content from './components/content';

import scribble from './scribble.svg';
import mail from './mail.svg';
import linkedin from './linkedin.svg';

export default function Home() {
	return (
		<div>
			<Head>
				<title>ISMAEEL AKRAM — FULL STACK DEV / SYSTEM ADMIN</title>
				<metsa name="title" content="ISMAEEL AKRAM — FULL STACK DEV / SYSTEM ADMIN" />
				<meta
					name="description"
					content="Full-stack developer & Systems/Server administrator in New York City."
				/>
				{/* <link rel="icon" href="/favicon.ico" /> */}
				<link rel="stylesheet" href="https://use.typekit.net/nqj1arh.css" />
			</Head>

			<div className="container">
				<header>
					<div>
						<h3 className="title">ISMAEEL AKRAM</h3>
						<Image src={scribble} alt="scribble" className="scribble" width={350} />
					</div>
					<div className="socials">
						<a href="mailto:ismaeel@ismaeelakram.com">
							<Image src={mail} alt="Email" width={40} />
						</a>
						<a
							href="https://linkedin.com/in/ismaeelakram"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image src={linkedin} alt="LinkedIn" width={30} />
						</a>
					</div>
				</header>

				<Hero />

				<Content />
			</div>
			<div className="animation"></div>
		</div>
	);
}
