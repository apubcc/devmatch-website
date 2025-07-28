import React, { useState } from "react";

interface Event {
	time: string;
	title: string;
	description: string;
	location: string;
	type: "workshop" | "activity" | "milestone" | "break";
	speakers?: string;
}

interface MainEvent {
	time: string;
	activity: string;
	venue: string;
	PIC: string;
}

interface DaySchedule {
	date: string;
	name: string;
	events: Event[];
}

interface MainDaySchedule {
	date: string;
    name: string;
    events: MainEvent[];

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

const mainSchedule: MainDaySchedule[] = [
	{
		date: "August 2, 2025",
		name: "Online Kickoff",
		events: [
		  {
			time: "7:00 PM - 8:00 PM",
			activity: "Hackathon Briefing & Submission Guide",
			venue: "Online",
			PIC: "Emcee",
		  },
		  {
			time: "8:00 PM",
			activity: "Online Hacking Start",
			venue: "Online",
			PIC: "",
		  },
		],
	  },
	  {
		date: "August 2 - August 7, 2025",
		name: "Online Hacking Period",
		events: [
		  {
			time: "All Day",
			activity: "Online Hacking Period",
			venue: "Online",
			PIC: "",
		  },
		],
	  },
	{
	  date: "August 8, 2025",
	  name: "Day 1",
	  events: [
		{
		  time: "7:00 PM - 8:00 PM",
		  activity: "Registration",
		  venue: "Audi 1",
		  PIC: "Registration",
		},
		{
		  time: "7:00 PM - 8:00 PM",
		  activity: "Dinner",
		  venue: "Cafeteria",
		  PIC: "F&B",
		},
		{
		  time: "9:00 PM - 11:59 PM",
		  activity: "Physical Hack Session",
		  venue: "Classrooms Block D & Block E Level 7",
		  PIC: "Committee",
		},
	  ],
	},
	{
	  date: "August 9, 2025",
	  name: "Day 2",
	  events: [
		{
		  time: "12:00 AM - 9:00 AM",
		  activity: "Physical Hacking Session",
		  venue: "Classrooms Block D & Block E Level 7",
		  PIC: "Committee",
		},
		{
		  time: "9:00 AM - 10:00 AM",
		  activity: "Registration",
		  venue: "Audi 1",
		  PIC: "Registration",
		},
		{
		  time: "9:00 AM - 10:00 AM",
		  activity: "Breakfast",
		  venue: "Cafeteria",
		  PIC: "F&B",
		},
		{
		  time: "10:00 AM - 1:00 PM",
		  activity: "Physical Hack + Mentorship Session",
		  venue: "Classrooms Block D & Block E Level 7",
		  PIC: "Committee",
		},
		{
		  time: "1:00 PM - 2:00 PM",
		  activity: "Lunch Break",
		  venue: "Cafeteria",
		  PIC: "F&B",
		},
		{
		  time: "2:00 PM - 6:00 PM",
		  activity: "Physical Hack + Mentorship Session",
		  venue: "Classrooms Block D & Block E Level 7",
		  PIC: "Committee",
		},
		{
		  time: "6:00 PM - 7:00 PM",
		  activity: "Dinner",
		  venue: "Cafeteria",
		  PIC: "F&B",
		},
		{
		  time: "7:00 PM - 11:59 PM",
		  activity: "Physical Hack Session",
		  venue: "Classrooms Block D & Block E Level 7",
		  PIC: "Committee",
		},
	  ],
	},
	{
	  date: "August 10, 2025",
	  name: "Day 3",
	  events: [
		{
		  time: "12:00 AM - 8:00 AM",
		  activity: "Physical Hack Session",
		  venue: "Classrooms Block D & Block E Level 7",
		  PIC: "Committee",
		},
		{
		  time: "8:00 AM",
		  activity: "Submission Due",
		  venue: "—",
		  PIC: "Committee",
		},
		{
		  time: "8:00 AM - 9:00 AM",
		  activity: "Registration",
		  venue: "Audi 1",
		  PIC: "Registration",
		},
		{
		  time: "8:00 AM - 9:00 AM",
		  activity: "Breakfast",
		  venue: "Cafeteria",
		  PIC: "F&B",
		},
		{
		  time: "9:00 AM - 10:00 AM",
		  activity: "Opening Ceremony",
		  venue: "Audi 1",
		  PIC: "Emcee",
		},
		{
		  time: "10:00 AM - 12:00 PM",
		  activity: "Physical Pitch Session",
		  venue: "TBD",
		  PIC: "Committee",
		},
		{
		  time: "12:00 PM - 1:00 PM",
		  activity: "Lunch Break",
		  venue: "Cafeteria",
		  PIC: "F&B",
		},
		{
		  time: "1:00 PM - 4:00 PM",
		  activity: "Physical Pitch Session",
		  venue: "TBD",
		  PIC: "Committee",
		},
		{
		  time: "4:00 PM - 5:00 PM",
		  activity: "Judging Time",
		  venue: "Audi 1",
		  PIC: "Committee",
		},
		{
		  time: "5:00 PM - 7:00 PM",
		  activity: "Prize Giving + Closing Ceremony",
		  venue: "Audi 1",
		  PIC: "Emcee",
		},
	  ],
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

				

				<div>
					<h4 className="text-2xl font-orbitron font-bold text-center mb-8">
						{mainSchedule[activeDay].date}
					</h4>

					{mainSchedule[activeDay].events.length > 0 ? (
  <div className="gem-card p-6 border-l-4 border-l-nebula-purple">
    <div className="space-y-4">
      {mainSchedule[activeDay].events.map((event, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row md:justify-between md:items-start border-b border-gray-700 pb-4">
          <div className="md:w-1/3 mb-2 md:mb-0">
            <p className="text-crystal-blue font-orbitron text-sm">{event.time}</p>
          </div>
          <div className="md:w-2/3">
            <h4 className="text-lg font-orbitron font-bold mb-1">
              {event.activity}
            </h4>
            <p className="text-gray-300 text-sm">
              <strong>Venue:</strong> {event.venue}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
) : (
  <div className="gem-card p-6 text-center border-l-4 border-l-gray-600">
    <h4 className="text-xl font-orbitron font-bold text-gray-300 mb-2">
      Schedule To Be Confirmed
    </h4>
    <p className="text-gray-400">
      Event details for this day will be announced soon. Stay tuned!
    </p>
  </div>
)}

				</div>
			</div>
		</section>
	);
};

export default Schedule;
