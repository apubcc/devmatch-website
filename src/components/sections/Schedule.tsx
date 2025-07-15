import React, { useState } from "react";

interface Event {
	time: string;
	title: string;
	description: string;
	location: string;
	type: "workshop" | "activity" | "milestone" | "break";
	speakers?: string;
}

interface DaySchedule {
	date: string;
	name: string;
	events: Event[];
}

const workshopSchedule: DaySchedule[] = [
	{
		date: "14 July 2025",
		name: "ChatAndBuild",
		events: [
			{
				time: "6pm - 8pm",
				title:
					"Introduction to ChatAndBuild, AI coding platform and NFA (Non-Fungible Agents)",
				description:
					"Introduction to ChatAndBuild, AI coding platform and NFA (Non-Fungible Agents)",
				location: "Physical",
				type: "workshop",
				speakers: "Jane, Chelsea",
			},
		],
	},
	{
		date: "15 July 2025",
		name: "Sui",
		events: [
			{
				time: "10pm - 12am",
				title: "Intro to sui and zklogin",
				description: "Intro to sui and zklogin",
				location: "Online",
				type: "workshop",
				speakers: "Daniel Lam",
			},
		],
	},
	{
		date: "16 July 2025",
		name: "Sui",
		events: [
			{
				time: "10pm - 12am",
				title: "onchain marketplace",
				description: "onchain marketplace",
				location: "Online",
				type: "workshop",
				speakers: "Henry Duong",
			},
		],
	},
	{
		date: "17 July 2025",
		name: "Sui",
		events: [
			{
				time: "10pm - 12am",
				title: "walrus and seal",
				description: "walrus and seal",
				location: "Online",
				type: "workshop",
				speakers: "ZiHe Huang",
			},
		],
	},
	{
		date: "18 July 2025",
		name: "The Graph",
		events: [
			{
				time: "6pm - 8pm",
				title:
					"Setting up Subgraph and Token API MCP for Claude Desktop and Cursor, Self-hosting a graph node",
				description:
					"Setting up Subgraph and Token API MCP for Claude Desktop and Cursor, Self-hosting a graph node",
				location: "Physical",
				type: "workshop",
				speakers: "Zhe Hong",
			},
		],
	},
	{
		date: "19 July 2025",
		name: "The Graph",
		events: [
			{
				time: "6pm - 8pm",
				title: "Hypergraph workshop",
				description: "Hypergraph workshop",
				location: "Physical",
				type: "workshop",
				speakers: "Zhe Hong",
			},
		],
	},
	{
		date: "20 July 2025",
		name: "The Graph",
		events: [
			{
				time: "6pm - 8pm",
				title: "building multiple subgraphs and integrating",
				description: "building multiple subgraphs and integrating",
				location: "Physical",
				type: "workshop",
				speakers: "Zhe Hong",
			},
		],
	},
	{
		date: "23 July 2025",
		name: "Oasis",
		events: [
			{
				time: "7pm - 8pm",
				title: "Sapphire workshop",
				description: "Sapphire workshop",
				location: "Online",
				type: "workshop",
				speakers: "Bernhard",
			},
		],
	},
	{
		date: "24 July 2025",
		name: "EF",
		events: [
			{
				time: "9pm - 10pm",
				title: "Intro to Scaffold-ETH 2 and SpeedRunEthereum",
				description: "Intro to Scaffold-ETH 2 and SpeedRunEthereum",
				location: "Online",
				type: "workshop",
				speakers: "TBD",
			},
		],
	},
	{
		date: "28 July 2025",
		name: "BGA",
		events: [
			{
				time: "6pm-8pm",
				title:
					"Real Talk: A Systems Perspective of Blockchain for Social Impact",
				description:
					"Real Talk: A Systems Perspective of Blockchain for Social Impact",
				location: "Physical",
				type: "workshop",
				speakers: "Glenn Tan",
			},
		],
	},
	{
		date: "30 July 2025",
		name: "Oasis",
		events: [
			{
				time: "7pm - 8pm",
				title: "ROFL workshop",
				description: "ROFL workshop",
				location: "Online",
				type: "workshop",
				speakers: "",
			},
		],
	},
];

const mainSchedule: DaySchedule[] = [
	{
		date: "August 8, 2025",
		name: "Day 1",
		events: [],
	},
	{
		date: "August 9, 2025",
		name: "Day 2",
		events: [],
	},
	{
		date: "August 10, 2025",
		name: "Day 3",
		events: [],
	},
];

const Schedule: React.FC = () => {
	const [activeWorkshopDay, setActiveWorkshopDay] =
		useState<number>(0);
	const [activeDay, setActiveDay] = useState<number>(0);

	const getEventTypeClass = (type: string) => {
		switch (type) {
			case "workshop":
				return "border-l-crystal-blue";
			case "activity":
				return "border-l-nebula-purple";
			case "milestone":
				return "border-l-glowing-pink";
			case "break":
				return "border-l-star-yellow";
			default:
				return "border-l-gray-500";
		}
	};

	return (
		<section
			id="schedule"
			className="section-container bg-space-light/30">
			<h2 className="section-title">Event Schedule</h2>

			<div className="max-w-4xl mx-auto mb-12">
				<p className="text-lg text-gray-300 text-center">
					Plan your hackathon journey with our detailed schedule. All
					times are in Pacific Daylight Time (UTC+8).
				</p>
			</div>

			{/* ───────────────────────────── */}
			{/* 🔹 Pre-Hackathon Workshop Block */}
			{/* ───────────────────────────── */}
			<div className="max-w-4xl mx-auto mb-20">
				<h3 className="text-xl font-orbitron font-bold text-white mb-6 text-center">
					Pre-Hackathon Workshops
				</h3>
				<div className="flex justify-center mb-8">
					<div className="inline-flex bg-space-blue rounded-lg p-1">
						{workshopSchedule.map((day, index) => (
							<button
								key={index}
								className={`px-6 py-3 rounded-md transition-all duration-300 font-orbitron ${
									activeWorkshopDay === index
										? "bg-crystal-gradient text-white"
										: "text-gray-300 hover:text-white"
								}`}
								onClick={() => setActiveWorkshopDay(index)}>
								{day.date}
							</button>
						))}
					</div>
				</div>
				<h4 className="text-2xl font-orbitron font-bold text-center mb-8">
					{workshopSchedule[activeWorkshopDay].date} -{" "}
					{workshopSchedule[activeWorkshopDay].name}
				</h4>
				<div className="space-y-6">
					{workshopSchedule[activeWorkshopDay].events.map(
						(event, index) => (
							<div
								key={index}
								className={`gem-card p-6 border-l-4 ${getEventTypeClass(
									event.type
								)}`}>
								<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
									<h4 className="text-lg font-orbitron font-bold">
										{event.title}
									</h4>
									<p className="text-crystal-blue font-orbitron">
										{event.time}
									</p>
								</div>
								<p className="text-gray-300 mb-2">
									{event.description}
								</p>
								<div className="text-gray-400 text-sm">
									Location: {event.location}
								</div>
								{event.speakers && (
									<div className="text-gray-400 text-sm mt-1">
										Speakers: {event.speakers}
									</div>
								)}
							</div>
						)
					)}
				</div>
			</div>

			{/* ───────────────────────────── */}
			{/* 🔸 Main Hackathon Days with Tabs */}
			{/* ───────────────────────────── */}
			<div className="max-w-4xl mx-auto mb-12">
				<h3 className="text-xl font-orbitron font-bold text-white mb-6 text-center">
					Main Hackathon Schedule
				</h3>

				<div className="flex justify-center mb-8">
					<div className="inline-flex bg-space-blue rounded-lg p-1">
						{mainSchedule.map((day, index) => (
							<button
								key={index}
								className={`px-6 py-3 rounded-md transition-all duration-300 font-orbitron ${
									activeDay === index
										? "bg-crystal-gradient text-white"
										: "text-gray-300 hover:text-white"
								}`}
								onClick={() => setActiveDay(index)}>
								{day.name}
							</button>
						))}
					</div>
				</div>

				<div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm mb-8">
					<div className="flex items-center">
						<div className="w-3 h-3 rounded-full bg-crystal-blue mr-2"></div>
						<span className="text-gray-300">Workshops</span>
					</div>
					<div className="flex items-center">
						<div className="w-3 h-3 rounded-full bg-nebula-purple mr-2"></div>
						<span className="text-gray-300">Activities</span>
					</div>
					<div className="flex items-center">
						<div className="w-3 h-3 rounded-full bg-glowing-pink mr-2"></div>
						<span className="text-gray-300">Milestones</span>
					</div>
					<div className="flex items-center">
						<div className="w-3 h-3 rounded-full bg-star-yellow mr-2"></div>
						<span className="text-gray-300">Breaks & Meals</span>
					</div>
				</div>

				<div>
					<h4 className="text-2xl font-orbitron font-bold text-center mb-8">
						{mainSchedule[activeDay].date}
					</h4>

					{mainSchedule[activeDay].events.length > 0 ? (
						<div className="space-y-6">
							{mainSchedule[activeDay].events.map((event, index) => (
								<div
									key={index}
									className={`gem-card p-6 border-l-4 ${getEventTypeClass(
										event.type
									)}`}>
									<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
										<h4 className="text-lg font-orbitron font-bold">
											{event.title}
										</h4>
										<p className="text-crystal-blue font-orbitron">
											{event.time}
										</p>
									</div>
									<p className="text-gray-300 mb-2">
										{event.description}
									</p>
									<div className="text-gray-400 text-sm">
										Location: {event.location}
									</div>
								</div>
							))}
						</div>
					) : (
						<div className="gem-card p-6 text-center border-l-4 border-l-gray-600">
							<h4 className="text-xl font-orbitron font-bold text-gray-300 mb-2">
								Schedule To Be Confirmed
							</h4>
							<p className="text-gray-400">
								Event details for this day will be announced soon.
								Stay tuned!
							</p>
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default Schedule;
