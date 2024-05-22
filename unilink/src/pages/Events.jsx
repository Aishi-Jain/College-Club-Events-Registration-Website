import React from "react";
import { Link } from "react-router-dom";

const events = [
  { name: "Aahvan", img: "/resources/Aahvan.webp" },
  { name: "Hackathon", img: "./resources/Hackathon.jpg" },
];

const Events = () => {
  return (
    <div>
      <main>
        <img src={events[0].img} alt={events[0].name} />
        <div className="info">
          <h3>Now Playing</h3>
          <h1>{events[0].name}</h1>
          <Link to={`/events/${events[0].name}`}>
            <button>Get Information</button>
          </Link>
          <button>Buy Tickets Now</button>
        </div>
      </main>
      <section>
        <div>
          <h1>Shows</h1>
          <h4>LEARN MORE</h4>
        </div>
        <div>
          <h1>Tickets</h1>
          <h4>LEARN MORE</h4>
        </div>
        <div>
          <h1>Calender</h1>
          <h4>LEARN MORE</h4>
        </div>
        <div>
          <h1>About</h1>
          <h4>LEARN MORE</h4>
        </div>
      </section>
      <section>
      <img src={events[1].img} alt={events[1].name} />
        <div>
          <h3>DD MM YYYY</h3>
          <h1>{events[1].name}</h1>
        </div>
        <div>
          <h1>{events[1].name}</h1>
          <p>Information....</p>
          <button>Buy Tickets Now</button>
          <Link to={`/events/${events[1].name}`}>
            <button>Get Information</button>
          </Link>
        </div>
      </section>
      <section className="eventsList">
        <h2>Upcomming Events</h2>
        {events.map((event) => (
          <div className="event" key={event.name}>
            <Link to={`/events/${event.name}`}>
              <img src={event.img} alt={event.name} />
              <button>{event.name}</button>
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Events;
