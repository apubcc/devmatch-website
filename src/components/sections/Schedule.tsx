import React, { useState } from 'react';

interface Event {
  time: string;
  title: string;
  description: string;
  location: string;
  type: 'workshop' | 'activity' | 'milestone' | 'break';
}

interface DaySchedule {
  date: string;
  name: string;
  events: Event[];
}

const Schedule: React.FC = () => {
  const workshopSchedule: DaySchedule = {
    date: 'July 17 – August 1, 2025',
    name: 'Pre-Hackathon Workshops (Hybrid)',
    events: [
      {
        time: 'Daily (TBA)',
        title: 'Pre-Hackathon Workshops',
        description:
          'Explore a series of expert-led online workshops to gear up for the hackathon. Topics include Web3, AI, pitching, and more.',
        location: '(Teams / APU )',
        type: 'workshop'
      },
      {
        time: 'TBA',
        title: 'Workshop Details Coming Soon',
        description: 'A detailed schedule for the workshop sessions will be announced shortly.',
        location: '(Teams / APU )',
        type: 'workshop'
      }
    ]
  };

  const mainSchedule: DaySchedule[] = [
    {
      date: 'August 8, 2025',
      name: 'Day 1',
      events: []
    },
    {
      date: 'August 9, 2025',
      name: 'Day 2',
      events: []
    },
    {
      date: 'August 10, 2025',
      name: 'Day 3',
      events: []
    }
  ];

  const [activeDay, setActiveDay] = useState<number>(0);

  const getEventTypeClass = (type: string) => {
    switch (type) {
      case 'workshop':
        return 'border-l-crystal-blue';
      case 'activity':
        return 'border-l-nebula-purple';
      case 'milestone':
        return 'border-l-glowing-pink';
      case 'break':
        return 'border-l-star-yellow';
      default:
        return 'border-l-gray-500';
    }
  };

  return (
    <section id="schedule" className="section-container bg-space-light/30">
      <h2 className="section-title">Event Schedule</h2>

      <div className="max-w-4xl mx-auto mb-12">
        <p className="text-lg text-gray-300 text-center">
          Plan your hackathon journey with our detailed schedule. All times are in Pacific Daylight Time (UTC+8).
        </p>
      </div>

      {/* ───────────────────────────── */}
      {/* 🔹 Pre-Hackathon Workshop Block */}
      {/* ───────────────────────────── */}
      <div className="max-w-4xl mx-auto mb-20">
        <h3 className="text-xl font-orbitron font-bold text-white mb-6 text-center">
          {workshopSchedule.name}
        </h3>

        <div className="space-y-6">
          {workshopSchedule.events.map((event, index) => (
            <div
              key={index}
              className={`gem-card p-6 border-l-4 ${getEventTypeClass(event.type)}`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h4 className="text-lg font-orbitron font-bold">{event.title}</h4>
                <p className="text-crystal-blue font-orbitron">{event.time}</p>
              </div>
              <p className="text-gray-300 mb-2">{event.description}</p>
              <div className="text-gray-400 text-sm">Location: {event.location}</div>
            </div>
          ))}
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
                    ? 'bg-crystal-gradient text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
                onClick={() => setActiveDay(index)}
              >
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
                  className={`gem-card p-6 border-l-4 ${getEventTypeClass(event.type)}`}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h4 className="text-lg font-orbitron font-bold">{event.title}</h4>
                    <p className="text-crystal-blue font-orbitron">{event.time}</p>
                  </div>
                  <p className="text-gray-300 mb-2">{event.description}</p>
                  <div className="text-gray-400 text-sm">Location: {event.location}</div>
                </div>
              ))}
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
