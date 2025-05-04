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
  const schedule: DaySchedule[] = [
    {
      date: 'August 9, 2025',
      name: 'Day 1',
      events: [
      // {
      //   time: '4:00 PM - 5:30 PM',
      //   title: 'Check-in & Registration',
      //   description: 'Arrive, register, and pick up your hackathon swag pack.',
      //   location: 'Main Entrance',
      //   type: 'activity'
      // },
      // {
      //   time: '6:00 PM - 6:30 PM',
      //   title: 'Opening Ceremony',
      //   description: 'Welcome address, introduction to tracks, and event guidelines.',
      //   location: 'Main Stage',
      //   type: 'milestone'
      // },
      // {
      //   time: '6:30 PM - 7:30 PM',
      //   title: 'Keynote Speech: "The Future of Tech"',
      //   description: 'Visionary talk by industry leader on emerging tech trends.',
      //   location: 'Main Stage',
      //   type: 'activity'
      // },
      // {
      //   time: '7:30 PM - 8:30 PM',
      //   title: 'Sponsor Showcase',
      //   description: 'Meet our sponsors and learn about their technologies.',
      //   location: 'Exhibition Hall',
      //   type: 'activity'
      // },
      // {
      //   time: '8:30 PM',
      //   title: 'Hacking Begins!',
      //   description: 'Form teams, brainstorm ideas, and start coding.',
      //   location: 'Hacking Zones',
      //   type: 'milestone'
      // },
      // {
      //   time: '9:00 PM - 10:00 PM',
      //   title: 'Team Building Workshop',
      //   description: 'Optional session for solo participants to find teammates.',
      //   location: 'Workshop Room A',
      //   type: 'workshop'
      // },
      // {
      //   time: '11:00 PM',
      //   title: 'Late Night Snacks',
      //   description: 'Energy boost to keep you coding through the night.',
      //   location: 'Dining Area',
      //   type: 'break'
      // }
      ]
    },
    {
      date: 'August 10, 2025',
      name: 'Day 2',
      events: [
        // {
        //   time: '8:00 AM - 9:00 AM',
        //   title: 'Breakfast',
        //   description: 'Fuel up for a day of coding with a healthy breakfast.',
        //   location: 'Dining Area',
        //   type: 'break'
        // },
        // {
        //   time: '10:00 AM - 11:00 AM',
        //   title: 'Tech Talk: "AI & Machine Learning Fundamentals"',
        //   description: 'Learn how to incorporate AI into your projects.',
        //   location: 'Workshop Room B',
        //   type: 'workshop'
        // },
        // {
        //   time: '12:00 PM',
        //   title: 'Midway Checkpoint',
        //   description: 'Brief status update from teams and progress check.',
        //   location: 'Main Stage',
        //   type: 'milestone'
        // },
        // {
        //   time: '12:30 PM - 1:30 PM',
        //   title: 'Lunch',
        //   description: 'Networking lunch with mentors and sponsors.',
        //   location: 'Dining Area',
        //   type: 'break'
        // },
        // {
        //   time: '2:00 PM - 3:00 PM',
        //   title: 'Workshop: "Pitching Your Project"',
        //   description: 'Learn how to effectively present your hackathon project.',
        //   location: 'Workshop Room A',
        //   type: 'workshop'
        // },
        // {
        //   time: '4:00 PM - 5:00 PM',
        //   title: 'One-on-One Mentoring Sessions',
        //   description: 'Get personalized feedback and guidance from mentors.',
        //   location: 'Mentoring Booths',
        //   type: 'activity'
        // },
        // {
        //   time: '7:00 PM - 8:00 PM',
        //   title: 'Dinner',
        //   description: 'Recharge with a delicious dinner.',
        //   location: 'Dining Area',
        //   type: 'break'
        // },
        // {
        //   time: '9:00 PM - 10:00 PM',
        //   title: 'Gaming Tournament',
        //   description: 'Take a break and compete in casual gaming competitions.',
        //   location: 'Recreation Zone',
        //   type: 'activity'
        // }
      ]
    },
    {
      date: 'August 11, 2025',
      name: 'Day 3',
      events: [
        // {
        //   time: '8:00 AM - 9:00 AM',
        //   title: 'Breakfast',
        //   description: 'Final day breakfast to energize for project completion.',
        //   location: 'Dining Area',
        //   type: 'break'
        // },
        // {
        //   time: '12:00 PM',
        //   title: 'Submission Reminder',
        //   description: '6 hours left until project submission deadline.',
        //   location: 'All Zones',
        //   type: 'milestone'
        // },
        // {
        //   time: '12:30 PM - 1:30 PM',
        //   title: 'Lunch',
        //   description: 'Last meal before final sprint to complete projects.',
        //   location: 'Dining Area',
        //   type: 'break'
        // },
        // {
        //   time: '5:30 PM',
        //   title: 'Hacking Ends',
        //   description: 'All submissions must be finalized.',
        //   location: 'All Zones',
        //   type: 'milestone'
        // },
        // {
        //   time: '6:00 PM - 8:00 PM',
        //   title: 'Project Expo',
        //   description: 'Showcase your projects to judges, mentors, and fellow participants.',
        //   location: 'Exhibition Hall',
        //   type: 'activity'
        // },
        // {
        //   time: '8:00 PM - 9:00 PM',
        //   title: 'Dinner & Networking',
        //   description: 'Celebrate your accomplishments while judges deliberate.',
        //   location: 'Dining Area',
        //   type: 'break'
        // },
        // {
        //   time: '9:00 PM - 10:00 PM',
        //   title: 'Closing Ceremony & Awards',
        //   description: 'Announcement of winners, prizes, and final remarks.',
        //   location: 'Main Stage',
        //   type: 'milestone'
        // }
      ]
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
          Plan your hackathon journey with our detailed schedule. 
          All times are in Pacific Daylight Time (PDT).
        </p>
      </div>
      
      {/* Day selection */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex bg-space-blue rounded-lg p-1">
          {schedule.map((day, index) => (
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
      
      {/* Schedule legend */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm">
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
      </div>
      
      {/* Day schedule */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-orbitron font-bold text-center mb-8">
          {schedule[activeDay].date}
        </h3>

        {schedule[activeDay].events.length > 0 ? (
          <div className="space-y-6">
            {schedule[activeDay].events.map((event, index) => (
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
            <h4 className="text-xl font-orbitron font-bold text-gray-300 mb-2">Schedule To Be Confirmed</h4>
            <p className="text-gray-400">Event details for this day will be announced soon. Stay tuned!</p>
          </div>
        )}
      </div>

    </section>
  );
};

export default Schedule;