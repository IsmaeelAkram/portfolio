import Head from 'next/head';
import Image from 'next/image';
import Hero from './components/hero';
import Content from './components/content';

import scribble from './scribble.svg';

export default function Home() {
	return (
		<div>
			<Head>
				<title>ISMAEEL AKRAM</title>
				<metsa name="title" content="ISMAEEL AKRAM — FULL STACK DEV / SYSTEM ASDMIN" />
				<meta
					name="description"
					content="Full-stack developer & Systems/Server administrator in New York City."
				/>
				<link rel="icon" href="/favicon.ico" />
				<link rel="stylesheet" href="https://use.typekit.net/nqj1arh.css" />
			</Head>

			<div className="container">
				<header>
					<div className="title-w-scribble">
						<h3 className="title">ISMAEEL AKRAM</h3>
						<Image src={scribble} alt="scribble" className="scribble" width={350} />
					</div>
				</header>

				<Hero />

				<Content />
			</div>
			<div className="animation"></div>
		</div>
	);
}
