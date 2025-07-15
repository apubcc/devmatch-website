import React from "react";

const Sponsors: React.FC = () => {
	const sponsors = [
		{ name: "SUI", logo: "/sui-logo.webp", width: 180 },
		{
			name: "Blockchain for Good Alliance (BGA)",
			logo: "/BGA-Logo.png",
			width: 180,
		},
		{
			name: "The Graph",
			logo: "/the-graph-grt-logo.png",
			width: 180,
		},
		{
			name: "ChatAndBuild",
			logo: "/CNB-Logomark-White.png",
			width: 180,
		},
	];

	const mediaPartners = [
		{
			name: "GDG USM",
			logo: "/logo_media/GDG USM logo (centered) - Chi San.png",
		},
		{
			name: "AIC",
			logo: "/logo_media/WhatsApp Image 2025-06-01 at 11.53.31 PM - Amlan Gupta.jpeg",
		},
		{
			name: "Sunway Blockchain Club",
			logo: "/logo_media/Full_Logo_Black - Sunway Blockchain Club.png",
		},
		{
			name: "Agents of Tech",
			logo: "/logo_media/Agents of Tech Logo - Yu En Liew.png",
		},
		{ name: "UBA", logo: "/logo_media/UBA-Logo - Hariz Hakim.png" },
		{
			name: "IT Society MMU",
			logo: "/logo_media/IT_Society_MMU_logo - asmaa noli.png",
		},
		{
			name: "APU Hackthletes",
			logo: "/logo_media/APUHackthletes Logo Transparent (For Black Background) - Ee Hann Choong.png",
		},
		{
			name: "CS Society USM",
			logo: "/logo_media/CS Official Logo - Padma Pireeyaa.png",
		},
		{
			name: "Monash Blockchain",
			logo: "/logo_media/monash_blockchain - Derek Goh.png",
		},
		{
			name: "FSEC APU",
			logo: "/logo_media/FSEC LOGO transparent bg - cheryl woo.png",
		},
	];

	return (
		<section
			id="sponsors"
			className="section-container bg-space-light/30">
			<h2 className="section-title">Sponsors</h2>

			<div className="max-w-4xl mx-auto mb-12">
				<p className="text-lg text-gray-300 text-center">
					DEVMATCH is made possible by the generous support of our
					sponsors and partners who share our vision for fostering
					innovation and community in tech.
				</p>
			</div>

			{/* Sponsors */}
			<div className="flex flex-wrap justify-center gap-8 mb-16">
				{sponsors.map((sponsor, index) => (
					<div
						key={index}
						className="p-6 flex flex-col items-center justify-center group"
						style={{
							width: sponsor.width + 60 + "px",
							height: sponsor.width + 60 + "px",
						}}>
						<div className="w-full h-full flex items-center justify-center grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100">
							<img
								src={sponsor.logo}
								alt={sponsor.name}
								width={sponsor.width}
								height={sponsor.width}
								className="object-contain"
							/>
						</div>
						<h3 className="mt-3 text-white text-sm text-center">
							{sponsor.name}
						</h3>
					</div>
				))}
			</div>

			{/* Media Partners */}
			<section className="mt-20">
				<h3 className="text-2xl font-orbitron font-bold mb-6 text-center">
					Media Partners
				</h3>
				<div className="flex flex-wrap justify-center gap-6">
					{mediaPartners.map((partner, index) => (
						<div
							key={index}
							className="bg-white/10 p-4 rounded-md flex items-center justify-center object-contain w-full h-full grayscale hover:grayscale-0 transition"
							style={{
								width: 200,
								height: 120, // Uniform height for all
							}}>
							<img
								src={partner.logo}
								alt={partner.name}
								className="object-contain w-full h-full"
							/>
						</div>
					))}
				</div>
			</section>

			{/* Call to Action */}
			<div className="mt-20">
				<h3 className="text-2xl font-orbitron font-bold mb-6 text-center">
					Become a Sponsor
				</h3>

				<p className="text-center text-gray-300 max-w-3xl mx-auto mb-8">
					Join our cosmic community of sponsors and partners to
					showcase your brand to the brightest minds in tech while
					supporting the future of innovation.
				</p>

				<div className="flex justify-center">
					<a
						href="mailto:info@apubcc.org"
						className="btn-secondary">
						Sponsorship Opportunities
					</a>
				</div>
			</div>
		</section>
	);
};

export default Sponsors;
