import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../config/firebase";
import FirebaseImage from "../components/FirebaseImage";

const Events = () => {
  const [events, setEvents] = useState([
    { name: "Aahvan", img: "events/Aahvan.webp" },
    { name: "Hackathon", img: "events/Hackathon.jpg" },
  ]);
  const infoCards = [
    { img: "images/shows.jpg", name: "Shows" },
    { img: "images/tickets.jpg", name: "Tickets" },
    { img: "images/calendar.jpg", name: "Calendar" },
    { img: "images/about.jpg", name: "About" },
  ];
  const eventsCollectionRef = collection(db, "events");
  useEffect(() => {
    async function getEventsList() {
      try {
        const data = await getDocs(eventsCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setEvents(filteredData);
      } catch (error) {
        console.error(error);
      }
    }

    getEventsList();
    document.documentElement.style.removeProperty("--theme-color");
  }, [eventsCollectionRef]);

  return (
    <div>
      <main>
        <div className="info">
          <FirebaseImage imagePath={events[0].img} alt={events[0].name} />
          <div className="overlay-main">
            <h3>Now Playing</h3>
            <h1>{events[0].name}</h1>
            <div class="buttons">
              <Link to={`/events/${events[0].id}`}>
                <button class="main">Get Information</button>
              </Link>
              <Link to={`/events/${events[0].id}/register`}>
                <button class="main">Buy Tickets Now</button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <section className="container">
        {infoCards.map((info) => (
          <div className="card">
            <FirebaseImage imagePath={info.img} alt={info.name} />
            <div class="overlay-card">
              <h2>{info.name}</h2>
              <Link to={`/${info.name}`}>Learn More</Link>
            </div>
          </div>
        ))}
      </section>
      <section className="deets">
        <FirebaseImage imagePath={events[1].img} alt={events[1].name} />
        <div className="overlay-deets">
          <div className="show-name">
            <h3>DD MM YYYY</h3>
            <h1>{events[1].name}</h1>
          </div>
          <div className="show-info">
            <h1>{events[1].name}</h1>
            <p>
              Location:
              <br />
              Malla Reddy College of Engineering
            </p>
            <div className="timings">
              <div className="start">
                <h1>9:30 AM</h1>
                <h3>START TIME</h3>
              </div>
              <div className="end">
                <h1>4:00 PM</h1>
                <h3>END TIME</h3>
              </div>
            </div>
            <Link to={`/events/${events[1].id}/register`}>
              <button>Buy Tickets Now</button>
            </Link>
            <Link to={`/events/${events[1].id}`}>
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
              <FirebaseImage imagePath={event.img} alt={event.name} />
              <div className="details">
                <p>DD MM YYYY</p>
                <h1>{event.name}</h1>
                <Link to={`/events/${event.id}`}>
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
