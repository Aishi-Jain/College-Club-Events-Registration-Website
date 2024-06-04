import React, { useState } from "react";
import { Link } from "react-router-dom";
import infoCards from "../data/infoCards.json";
import eventInfo from "../data/events.json";
import EventStatus from "../components/getEventStatus";

const Events = () => {
  const [events, setEvents] = useState(eventInfo.sort((b, a) => new Date(a.startDate) - new Date(b.startDate)));
  document.documentElement.style.removeProperty("--theme-color");
  return (
    <div>
      <main>
        <div className="info">
          <img src={events[0].imageURL} alt={events[0].name} />
          <div className="overlay-main">
          <EventStatus startDate={events[0].startDate} />
            <h1>{events[0].name}</h1>
            <div class="buttons">
              <Link to={`/events/${events[0].eventId}`}>
                <button class="main">Get Information</button>
              </Link>
              <Link to={`/events/${events[0].eventId}/register`}>
                <button class="main">Buy Tickets Now</button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <section className="container">
        {infoCards.map((info) => (
          <div className="card">
            <img src={info.imageURL} alt={info.name} />
            <div class="overlay-card">
              <h2>{info.name}</h2>
              <Link to={`/${info.name}`}>Learn More</Link>
            </div>
          </div>
        ))}
      </section>
      <section className="deets">
        <img src={events[1].imageURL} alt={events[1].name} />
        <div className="overlay-deets">
          <div className="show-name">
            <h3>{events[1].startDate}</h3>
            <h1>{events[1].name}</h1>
          </div>
          <div className="show-info">
            <h1>{events[1].name}</h1>
            <p>
              Location:
              <br />
              {events[1].location}
            </p>
            <div className="timings">
              <div className="start">
                <h1>{events[1].startTime || "00:00 AM"}</h1>
                <h3>START TIME</h3>
              </div>
              <div className="end">
                <h1>{events[1].duration || "00"}</h1>
                <h3>DURATION</h3>
              </div>
            </div>
            <Link to={`/events/${events[1].eventId}/register`}>
              <button>Buy Tickets Now</button>
            </Link>
            <Link to={`/events/${events[1].eventId}`}>
              <button>Get Information</button>
            </Link>
          </div>
        </div>
      </section>
      <section className="eventList">
        <div class="text-section">
          <h1>Upcoming Events</h1>
          <p>some details...</p>
        </div>
        <div className="events-section">
          {events.map((event) => (
            <div className="events" key={event.name}>
              <img src={event.imageURL} alt={event.name} />
              <div className="details">
                <p>{event.startDate}</p>
                <h1>{event.name}</h1>
                <Link to={`/events/${event.eventId}`}>
                  <button class="main">BUY TICKETS NOW</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Events;
