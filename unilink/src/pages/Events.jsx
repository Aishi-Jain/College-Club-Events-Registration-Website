import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../config/firebase";
import FirebaseImage from "../components/FirebaseImage";

const Events = () => {
  const [events, setEvents] = useState([
        { name: "Aahvan", img: "Aahvan.webp" },
        { name: "Hackathon", img: "Hackathon.jpg" },
      ]);

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
    document.documentElement.style.removeProperty('--theme-color');
  }, [eventsCollectionRef]);

  return (
    <div>
      <main>
      <FirebaseImage imagePath={events[0].img} alt={events[0].name} />
        {/* <img src={"/resources/" + events[0].img} alt={events[0].name} /> */}
        <div className="info">
          <h3>Now Playing</h3>
          <h1>{events[0].name}</h1>
          <Link to={`/events/${events[0].id}`}>
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
      <FirebaseImage imagePath={events[1].img} alt={events[1].name} />
        {/* <img src={"/resources/" + events[1].img} alt={events[1].name} /> */}
        <div>
          <h3>DD MM YYYY</h3>
          <h1>{events[1].name}</h1>
        </div>
        <div>
          <h1>{events[1].name}</h1>
          <p>Information....</p>
          <button>Buy Tickets Now</button>
          <Link to={`/events/${events[1].id}`}>
            <button>Get Information</button>
          </Link>
        </div>
      </section>
      <section className="eventsList">
        <h2>Upcomming Events</h2>
        {events.map((event) => (
          <div className="event" key={event.name}>
            <Link to={`/events/${event.id}`}>
            <h1>{event.name}</h1>
            <h2>{event.desc}</h2>
            <FirebaseImage imagePath={event.img} alt={event.name} />
              {/* <img src={"/resources/" + event.img} alt={event.name} /> */}
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Events;
