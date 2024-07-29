export default function About() {
	return (
		<>
			<div className="flex flex-row justify-start items-center gap-8 mb-2">
				<img src="laptop.png" className="emoji" />
				<h2>FULL-STACK SOFTWARE DEVELOPER</h2>
			</div>
			<div className="flex flex-row justify-start items-center gap-8 mb-2">
				<img src="plug.png" className="emoji" />
				<h2>SYSTEMS ADMINISTRATOR</h2>
			</div>
			<div className="flex flex-row justify-start items-center gap-8 mb-2">
				<img src="statue-of-liberty.png" className="emoji" />
				<h2>NEW YORK CITY</h2>
			</div>
			<div className="flex flex-row justify-start items-center gap-8 mb-2">
				<img src="grad-cap.png" className="emoji" />
				<h2>BROOKLYN COLLEGE</h2>
			</div>
			<div>
				<h2 className="font-bold mt-10 mb-3">Skills</h2>
				<div className="grid grid-cols-5 w-full">
					<div>
						<h3 className="font-bold mb-1">Cloud:</h3>
						<ul className="list-disc list-inside">
							<li>AWS</li>
							<li>Google Cloud</li>
							<li>Linux</li>
							<li>Microservices</li>
							<li>Kubernetes</li>
							<li>Git</li>
							<li>Virtualization</li>
						</ul>
					</div>
					<div>
						<h3 className="font-bold mb-1">Languages:</h3>
						<ul className="list-disc list-inside">
							<li>Python</li>
							<li>JavaScript</li>
							<li>C/C++</li>
							<li>Go</li>
							<li>Java</li>
							<li>SQL</li>
							<li>C#</li>
						</ul>
					</div>
					<div>
						<h3 className="font-bold mb-1">Frontend:</h3>
						<ul className="list-disc list-inside">
							<li>Next.js</li>
							<li>React.js</li>
							<li>Tailwind.css</li>
							<li>React Native</li>
							<li>REST</li>
							<li>WebSockets</li>
							<li>Framer Motion</li>
						</ul>
					</div>
					<div>
						<h3 className="font-bold mb-1">Networking:</h3>
						<ul className="list-disc list-inside">
							<li>Cisco</li>
							<li>TCP/UDP</li>
							<li>IPv4/IPv6</li>
							<li>Wi-Fi</li>
							<li>VLAN</li>
							<li>VPNs</li>
							<li>Automation</li>
						</ul>
					</div>
					<div>
						<h3 className="font-bold mb-1">Databases:</h3>
						<ul className="list-disc list-inside">
							<li>MySQL</li>
							<li>PostgreSQL</li>
							<li>MongoDB</li>
							<li>Cassandra</li>
							<li>Oracle</li>
							<li>Redis</li>
							<li>DynamoDB</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}
