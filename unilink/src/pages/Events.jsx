import React from 'react';
import { Link } from 'react-router-dom';

const events = ["Hackathon", "Aahvan"];

const Events = () => {
  return (
    <div>
      <h2>Events Page</h2>
      {events.map(event => (
        <div key={event}>
          <Link to={`/events/${event}`}>
            <button>{event}</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Events;