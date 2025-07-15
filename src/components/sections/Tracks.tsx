import React, { useState } from "react";
import {
	LinkIcon,
	Gift,
	HeartHandshake,
	ChevronDown,
	ChevronUp,
} from "lucide-react";

interface Mission {
	title: string;
	description: string;
	prize: string;
}

interface Track {
	id: string;
	icon: React.ReactNode;
	sponsor: string;
	description: string;
	totalPrize: string;
	missions: Mission[];
	docLink: string;
	logo: string;
}

const Tracks: React.FC = () => {
	const [activeTrack, setActiveTrack] = useState<string>("sui");
	const [showAllMissions, setShowAllMissions] = useState<
		Record<string, boolean>
	>({});
	const [expandedMissions, setExpandedMissions] = useState<
		Record<string, boolean>
	>({});

	const toggleShowAllMissions = (trackId: string) => {
		setShowAllMissions((prev) => ({
			...prev,
			[trackId]: !prev[trackId],
		}));
	};

	const toggleMissionExpansion = (missionKey: string) => {
		setExpandedMissions((prev) => ({
			...prev,
			[missionKey]: !prev[missionKey],
		}));
	};

	const tracks: Track[] = [
		{
			id: "sui",
			icon: (
				<HeartHandshake className="h-10 w-10 text-crystal-blue" />
			),
			sponsor: "Sui",
			description:
				"Sui is a first-of-its-kind Layer 1 blockchain and smart contract platform designed from the ground up to make digital asset ownership fast, private, secure, and accessible to everyone. Its object-centric model, based on the Move programming language, enables parallel execution, sub-second finality, and rich on-chain assets. With horizontally scalable processing and storage, Sui supports a wide range of applications with unrivaled speed at low cost.\n\nExplore the capabilities of the Sui ecosystem by participating in one of three challenge tracks, each tailored to showcase unique components of Sui's infrastructure and development tools. Participants can choose from moderate to advanced difficulty levels, with a focus on zkLogin integration, on-chain smart contract marketplaces, or privacy-preserving infrastructure.",
			totalPrize:
				"$4,000 USD (Best Track Prize: $1,000 × 3, Best Overall Prize: $1,000 × 1 that stacks with track prize)",
			missions: [
				{
					title: "zkLogin Application (Moderate Difficulty)",
					description: `Objective: Create an application that integrates and utilizes zkLogin.

Key Tasks:
1. Implement zkLogin as the authentication method
2. Showcase a real-world use case or user flow with zkLogin
3. Provide seamless UX and secure session handling

Resources:
• https://docs.sui.io/concepts/cryptography/zklogin
• https://docs.enoki.mystenlabs.com/`,
					prize: "$1,000 USD",
				},
				{
					title: "On-chain Marketplace (Moderate Difficulty)",
					description: `Objective: Build an on-chain marketplace utilizing Sui smart contracts as the backend.

Key Tasks:
1. Design and implement core marketplace smart contracts using Move
2. Support basic functionality (listing, purchasing, transferring assets)
3. You can either use the Kiosk standard, or implement another form of trading

Resources:
• Sui Move Intro Course (lesson 4 and 5)
• Sui Kiosk Standard`,
					prize: "$1,000 USD",
				},
				{
					title:
						"Password Manager using Walrus & Seal (Advanced Difficulty)",
					description: `Objective: Create a password manager using Walrus and Seal as backend infrastructure.

Key Tasks:
1. Integrate Walrus and Seal for secure, privacy-preserving storage
2. Implement user-friendly encryption and retrieval workflows
3. Ensure compliance with best practices in data security

Resources:
• https://github.com/MystenLabs/walrus-docs
• https://github.com/MystenLabs/seal`,
					prize: "$1,000 USD",
				},
			],
			docLink:
				"https://suifoundation.notion.site/DEVMatch-Hackathon-2025-20337af41c6e80d4a3f9e76087f4f40c",
			logo: "/sui-logo.webp",
		},
		{
			id: "bga",
			icon: (
				<HeartHandshake className="h-10 w-10 text-crystal-blue" />
			),
			sponsor: "Blockchain for Good Alliance (BGA)",
			description:
				"The Blockchain for Good Alliance (BGA) proudly sponsors a dedicated track at the APUBCC Devmatch 2.0. Build for public and social good.\n\nBuild a blockchain-based application on any blockchain that tackles a real-world problem aligned with one or more of the United Nations' 17 Sustainable Development Goals (SDGs). Projects should demonstrate potential for tangible social impact, whether through financial inclusion, environmental sustainability, public transparency, or equitable access to essential services.\n\nLaunched in April 2024 by Bybit, the Blockchain for Good Alliance (BGA) is a long-term collaborative non-profit initiative with key partners with the main goal to contribute to societal good by using blockchain technology to solve real-world problems.",
			totalPrize:
				"$2,000 USD (1st Place: $1,000, 2nd Place: $600, 3rd Place: $400) + BGA Incubation Program opportunities",
			missions: [
				{
					title: "💰 Prize Structure",
					description: `Track Placement Prizes:
1st Place: $1,000 USD
2nd Place: $600 USD  
3rd Place: $400 USD

Additional Benefits:
• BGA Incubation Program opportunities for selected winners
• Equity-free grants
• Access to BGA's global mentor & advisor network
• Co-marketing and amplification opportunities
• Pitch support and fundraising exposure
• Feature article in the BGA Pulse
• Invite to the global BGA Web3 Oscar`,
					prize: "",
				},
				{
					title: "UN Sustainable Development Goals Focus",
					description: `Build a blockchain-based application aligned with one or more of the United Nations' 17 Sustainable Development Goals (SDGs). In your submission, please indicate which SDG(s) the project primarily supports.

Track Rules:
1. Projects must align with the mission of blockchain for public good
2. Submit a pitch deck + demo video before the deadline in the application form
3. Must be an original build created during the hackathon`,
					prize: "",
				},
				{
					title: "Security and Transparency",
					description: `Focus Area: Blockchain-based supply chain tracking ensures authentic product origins and prevents fakes.`,
					prize: "",
				},
				{
					title: "Global Education Development",
					description: `Focus Area: Verifiable blockchain credentials issued by institutions to prevent diploma fraud and increase global accessibility.`,
					prize: "",
				},
				{
					title: "Life and Health",
					description: `Focus Area: Medical record sharing across borders via encrypted blockchain to enable faster, more accurate diagnosis and treatment.`,
					prize: "",
				},
				{
					title: "Sustainable Development",
					description: `Focus Area: Carbon credit registries for transparent emissions tracking, allowing businesses to prove and trade verified carbon offsets.`,
					prize: "",
				},
				{
					title: "Reduction of Inequality",
					description: `Focus Area: Decentralized ID systems for underserved populations, allowing access to financial services, aid distribution, and social benefits.`,
					prize: "",
				},
			],
			docLink: "https://chainforgood.org",
			logo: "/BGA-Logo.png",
		},
		{
			id: "the_graph",
			icon: (
				<HeartHandshake className="h-10 w-10 text-crystal-blue" />
			),
			sponsor: "The Graph",
			description:
				"The Graph (GRT) is a decentralized indexing and query protocol for blockchain data. It allows developers to easily access and retrieve information from blockchains like Ethereum, enabling the creation and use of decentralized applications (dApps).\n\nSubgraphs provide efficient, queryable access to on-chain data, enabling dApps to deliver real-time, structured information without directly querying the blockchain. They reduce complexity, improve performance, and are essential for scalable applications. The Token API offers a simple and reliable way to fetch token metadata without needing to index each token manually.",
			totalPrize:
				"$2,005 USD (1st: $1,000, 2nd: $500, 3rd: $250, 4th: $150, 5th: $100)",
			missions: [
				{
					title: "💰 Prize Structure",
					description: `Track Placement Prizes:
1st Place: $1,000 USD
2nd Place: $500 USD
3rd Place: $250 USD
4th Place: $150 USD
5th Place: $100 USD

Total Prize Pool: $2,005 USD`,
					prize: "",
				},
				{
					title: "Create a New Subgraph",
					description: `Acceptance Criteria:
• Developers must create a Subgraph that indexes on-chain data of supported or unsupported networks
• This data must be used in your application
• Developers must provide a GitHub repository with the source code of the Subgraph
• (Nice-to-have) Developers can also convert their Substreams into Subgraphs for more complex applications

Benefits:
• First 100,000 queries are free per month`,
					prize: "",
				},
				{
					title: "Use an Existing Subgraph",
					description: `Acceptance Criteria:
• Developers must link to the Subgraph they are using from the mainnet or testnet explorer
• (Bonus) Developers can build and convert Substreams into Subgraphs
• Developers must clearly state where they are using the Subgraph in their source code`,
					prize: "",
				},
				{
					title: "Use Token API",
					description: `Acceptance Criteria:
• Developers must clearly state where and how they are using the Token API in their source code
• Developers must use the Token API to fetch token metadata (e.g., symbol, name, decimals, price) and demonstrate its usage within your application logic
• (Optional) Fallback to a published Subgraph for token metadata if Token API is not applicable on the selected network

Benefits:
• First 4 million queries are free ($25 worth)`,
					prize: "",
				},
			],
			docLink: "https://thegraph.com/docs/",
			logo: "/the-graph-grt-logo.png",
		},
		{
			id: "oasis",
			icon: (
				<HeartHandshake className="h-10 w-10 text-crystal-blue" />
			),
			sponsor: "Oasis",
			description:
				"Oasis is home to Sapphire, the world's first confidential EVM network powered by a Trusted Execution Environment (TEE), and ROFL, a framework that enables confidential off-chain compute. Oasis is a Layer 0/1 blockchain designed to support scalable, privacy-preserving applications. Its unique layered architecture offers an optimal environment for building and running applications in DeFi, AI, real-world assets (RWAs), gaming, NFTs, DAO governance, and more.\n\nExplore the Oasis Network's familiar development environment with industry-leading confidentiality. Discover a new world of opportunities for developers across all EVM networks.",
			totalPrize:
				"$2,000 USD (Up to $750, $500, $250 + $500 participation reward shared among all participants)",
			missions: [
				{
					title: "💰 Prize Structure",
					description: `Track Placement Prizes:
1st Place: Up to $750 USD
2nd Place: Up to $500 USD
3rd Place: Up to $250 USD
Participation Reward: $500 USD shared among all participants

Total Prize Pool: $2,000 USD

Note: The Oasis Foundation reserves the right to adjust the reward structure based on the quality and relevance of the submissions received.`,
					prize: "",
				},
				{
					title: "AI Agents",
					description: `With Sapphire, you can store agent private keys on-chain and then build logic within a smart contract, and with ROFL, you can verify offchain agent workloads, in order to pursue use cases in trading, admin, security, wallets, collaborative art, etc. Oasis provides you all the tools to build truly autonomous and trustless agents. Generate private keys from within a TEE, store secrets on the Confidential EVM and let your agent loose on socials or DeFi dApps.`,
					prize: "",
				},
				{
					title: "Trustless Oracles",
					description: `Because the ROFL framework enables verifiable and confidential off-chain computation with internet access to web2 and web3 APIs, governed by the policies stored on-chain, there's no need to trust the Oracle operator for fetching the price quotes and much more. You can even submit transactions to other chains.`,
					prize: "",
				},
				{
					title: "DeFi",
					description: `Privacy-preserving applications around dark pools, cross-chain liquidity, dutch auctions for tokens, ICO price discovery via auctions, DEX & cross-chain swaps, and more!`,
					prize: "",
				},
				{
					title: "Gaming",
					description: `Break the link between in-game profiles and on-chain accounts, create trustless, hidden fog of war mechanics, explore the agent-gaming design space, all to build captivating games!`,
					prize: "",
				},
				{
					title: "Other Applications",
					description: `Account abstraction and gasless wallets. Trustless cryptography with confidential contracts. Applications for encrypted metadata, secrets, and key management.`,
					prize: "",
				},
			],
			docLink: "https://docs.oasis.io/",
			logo: "/CNB-Logomark-White.png",
		},
		{
			id: "chatandbuild",
			icon: (
				<HeartHandshake className="h-10 w-10 text-crystal-blue" />
			),
			sponsor: "ChatAndBuild",
			description:
				"ChatAndBuild Web3 Solutions Challenge focuses on leveraging Web3 technologies to create innovative solutions with real-world impact. Projects must demonstrate creativity, originality, and functionality while addressing practical problems using blockchain, smart contracts, decentralized applications (dApps), DAOs, token economies, DeFi, or decentralized identity systems.\n\nTeams that integrate Non-Fungible Agents (NFAs) into their projects will receive bonus points for innovative use cases such as on-chain trading AI Agents or wallet portfolio AI Agents.",
			totalPrize:
				"$1,000 Total Prize Pool (5 Winning Teams: $100 Cash + $100 Subscription Vouchers per Team)",
			missions: [
				{
					title: "💰 Prize Structure",
					description: `Winning Teams: 5 Teams
Prize per Team: $100 Cash + $100 Subscription Vouchers
Total Prize Pool: $1,000 USD

All winning teams receive equal rewards - no ranking system.`,
					prize: "",
				},
				{
					title: "Web3 Focus Requirements",
					description: `Projects must leverage Web3 technologies such as:
• Blockchain
• Smart contracts
• Decentralized applications (dApps)
• DAOs
• Token economies
• DeFi or decentralized identity systems

Real-World Relevance:
Solutions should address a practical problem or use case with potential for real-world impact or adoption.`,
					prize: "",
				},
				{
					title: "Submission Requirements",
					description: `Project Submission Requirements:
1. A screen recording as proof the published app is built using ChatAndBuild from scratch (YouTube, Twitter, Instagram Reels, etc.). Please tag ChatAndBuild in the post.
2. Provide the published app link generated with ChatAndBuild
3. Builders' stories submission, according to a list of questions provided

Functionality: A working demo or prototype is expected — even a basic one — to show core features in action.

Originality: Projects should demonstrate creativity, innovation, or a unique twist on an existing concept.`,
					prize: "",
				},
				{
					title: "Bonus Criteria",
					description: `Teams that integrate Non-Fungible Agents (NFAs) into their projects will receive bonus points.

Example use cases:
• On-chain trading AI Agents
• Wallet portfolio AI Agents

NFAs can provide additional innovation points for creative integration with your Web3 solution.`,
					prize: "",
				},
			],
			docLink: "https://chatandbuild.ai/",
			logo: "/Devmatch-logo.jpg",
		},
	];

	return (
		<section
			id="tracks"
			className="section-container">
			<h2 className="section-title">Sponsor Track</h2>

			<div className="max-w-4xl mx-auto mb-12">
				<p className="text-lg text-gray-300 text-center">
					This year's challenges are brought to you by our amazing
					sponsors. Explore cutting-edge blockchain technologies and
					win exciting rewards across multiple tracks.
				</p>
			</div>

			{/* Track Buttons */}
			<div className="flex flex-wrap justify-center gap-4 mb-12">
				{tracks.map((track) => (
					<button
						key={track.id}
						className={`px-6 py-3 rounded-lg font-orbitron font-medium transition-all duration-300 
              ${
								activeTrack === track.id
									? "bg-crystal-gradient text-white shadow-lg shadow-crystal-blue/20"
									: "bg-space-blue text-gray-300 hover:bg-space-light"
							}`}
						onClick={() => setActiveTrack(track.id)}>
						{track.sponsor}
					</button>
				))}
			</div>

			{/* Active Track Info */}
			{tracks.map(
				(track) =>
					track.id === activeTrack && (
						<div
							key={track.id}
							className="gem-card p-8 transition-all duration-500 opacity-100 transform translate-y-0">
							<div className="flex items-center mb-6 gap-4">
								<div className="p-2 rounded-full w-16 h-16 flex items-center justify-center overflow-hidden hover:scale-105 transition-transform duration-300">
									<img
										src={track.logo}
										alt={`${track.sponsor} logo`}
										className="w-12 h-12 object-contain"
									/>
								</div>
								<h3 className="text-2xl md:text-3xl font-orbitron font-bold">
									{track.sponsor}
								</h3>
							</div>

							<p className="whitespace-pre-line text-gray-300 text-lg mb-6">
								{track.description}
							</p>

							<div className="mb-6">
								<h4 className="text-xl font-orbitron font-bold text-white flex items-center gap-2">
									<Gift className="w-5 h-5" /> Total Prize Pool
								</h4>
								<p className="text-crystal-blue text-lg">
									{track.totalPrize}
								</p>
							</div>

							<div className="mb-6">
								<h4 className="text-xl font-orbitron font-bold mb-4 text-white">
									Missions
								</h4>
								<div className="space-y-3">
									{track.missions
										.slice(
											0,
											showAllMissions[track.id]
												? track.missions.length
												: 1
										)
										.map((mission, index) => {
											const missionKey = `${track.id}-${index}`;
											const isExpanded = expandedMissions[missionKey];

											return (
												<div
													key={missionKey}
													className="border border-gray-600 rounded-lg overflow-hidden">
													<button
														onClick={() =>
															toggleMissionExpansion(missionKey)
														}
														className="w-full flex items-center justify-between p-4 bg-space-blue hover:bg-space-light transition-colors duration-200">
														<h5 className="text-white font-bold text-left">
															{mission.title}
														</h5>
														{isExpanded ? (
															<ChevronUp className="w-5 h-5 text-crystal-blue flex-shrink-0" />
														) : (
															<ChevronDown className="w-5 h-5 text-crystal-blue flex-shrink-0" />
														)}
													</button>
													{isExpanded && (
														<div className="p-4 pt-0 bg-space-blue/50">
															<p className="text-gray-300 text-sm whitespace-pre-line mb-3">
																{mission.description}
															</p>
															{mission.prize && (
																<p className="text-crystal-blue text-sm font-medium">
																	Prize: {mission.prize}
																</p>
															)}
														</div>
													)}
												</div>
											);
										})}

									{track.missions.length > 1 && (
										<div className="mt-4">
											<button
												onClick={() =>
													toggleShowAllMissions(track.id)
												}
												className="text-xs text-crystal-blue underline">
												{showAllMissions[track.id]
													? "Show Less Missions"
													: "Show More Missions"}
											</button>
										</div>
									)}
								</div>
							</div>

							{track.docLink !== "#" && (
								<div className="mt-6">
									<a
										href={track.docLink}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center px-4 py-2 bg-crystal-blue text-white rounded-lg hover:bg-crystal-blue/80 transition">
										<LinkIcon className="w-4 h-4 mr-2" />
										View Documentation
									</a>
								</div>
							)}
						</div>
					)
			)}
		</section>
	);
};

export default Tracks;
