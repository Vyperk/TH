import React from 'react';
import { Calendar, Trophy, Users } from 'lucide-react';

const events = [
  {
    date: "March 25, 2025",
    title: "Next-Gen Server Launch",
    description: "Introducing our new line of AMD EPYC powered servers",
    icon: <Calendar className="w-12 h-12 text-[#ff3333]" />
  },
  {
    date: "April 15, 2025",
    title: "GameServe Cup 2025",
    description: "Annual gaming tournament with $100K prize pool",
    icon: <Trophy className="w-12 h-12 text-[#3366ff]" />
  },
  {
    date: "May 1, 2025",
    title: "Developer Workshop",
    description: "Learn to optimize your game servers for maximum performance",
    icon: <Users className="w-12 h-12 text-[#ff3333]" />
  }
];

const Events = () => {
  return (
    <section className="py-20 bg-[#111] section-bg events-section">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Upcoming Events</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div 
              key={index} 
              className="bg-black p-8 rounded-xl slide-up hover:transform hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center mb-6">
                {event.icon}
              </div>
              <div className="text-center">
                <span className="text-[#3366ff] font-semibold">{event.date}</span>
                <h3 className="text-xl font-bold my-2">{event.title}</h3>
                <p className="text-gray-400">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;