import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';

const EventDetails: React.FC = () => {
  return (
    <section className="bg-space-light/30 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Event Details</h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Date */}
            <div className="gem-card p-6 flex flex-col items-center text-center">
              <div className="rounded-full bg-space-dark p-3 mb-4">
                <Calendar className="h-8 w-8 text-crystal-blue" />
              </div>
              <h3 className="text-lg font-orbitron font-bold mb-2">Date</h3>
              <p className="text-gray-300">August 2–10, 2025</p>
              <p className="text-gray-400 text-sm mt-1">168 hours of Hack</p>
            </div>
            
            {/* Location */}
            <div className="gem-card p-6 flex flex-col items-center text-center">
              <div className="rounded-full bg-space-dark p-3 mb-4">
                <MapPin className="h-8 w-8 text-crystal-blue" />
              </div>
              <h3 className="text-lg font-orbitron font-bold mb-2">Location</h3>
              <p className="text-gray-300">Asia Pacific University</p>
              <p className="text-gray-400 text-sm mt-1">Kuala Lumpur, Malaysia</p>
            </div>
          </div>


          {/* Participation Info */}
          <div className="mt-12">
            <div className="gem-card p-6">
              <div className="flex items-center mb-4">
                <div className="rounded-full bg-space-dark p-2 mr-3">
                  <Users className="h-5 w-5 text-crystal-blue" />
                </div>
                <h3 className="text-lg font-orbitron font-bold">Participation</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
                <div>
                  <h4 className="font-orbitron text-white mb-2">Team Size</h4>
                  <p>1–5 members per team</p>
                  <p className="text-gray-400 text-sm mt-1">Solo hackers are welcome too!</p>
                </div>
                <div>
                  <h4 className="font-orbitron text-white mb-2">Eligibility</h4>
                  <p>Open to all developers, designers, and tech enthusiasts</p>
                  <p className="text-gray-400 text-sm mt-1">No experience level required</p>
                </div>
                <div>
                  <h4 className="font-orbitron text-white mb-2">Registration</h4>
                  <p>Free for all participants</p>
                  <p className="text-gray-400 text-sm mt-1">Limited spots available</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EventDetails;
