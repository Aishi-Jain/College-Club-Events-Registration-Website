import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import eventInfo from "../data/events.json";
import CountdownTimer from "../components/CountdownTimer";
import EventStatus from "../components/getEventStatus";

const EventDetail = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(
    eventInfo.find((e) => e.eventId === eventId)
  );
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--theme-color",
      event.themeColor
    );
  }, [event]);

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div>
      <main>
        <div className="info">
          <img src={event.imageURL} alt={event.name} />
          <div className="overlay-main">
            <EventStatus startDate={event.startDate} />
            <h1>{event.name}</h1>
            <CountdownTimer
              startDate={event.startDate}
              startTime={event.startTime}
              id={event.eventId}
            />
          </div>
        </div>
      </main>
      <section>
        <div>
          {console.log(event.instagramVideoURL)}
          {event.instagramVideoURL !== undefined && (
            <iframe
              title="efef"
              src={event.instagramVideoURL + `embed`}
              width="400"
              height="480"
              frameborder="0"
              scrolling="no"
              allowtransparency="true"
            ></iframe>
          )}
          {event.youtubeVideoURL !== undefined && (
            <iframe
              width="560"
              height="315"
              src={event.youtubeVideoURL}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          )}
        </div>
        <div>
          <h1>Event Promo</h1>
          <p>{event.description}</p>
        </div>
      </section>
      <section className="gallery">
        <h1>Event Gallery</h1>
        {console.log(event.gallery)}
        {event.gallery && event.gallery.length !== 0 ? (
          event.gallery.map((imageName, index) => (
            <img
              key={index}
              src={`/resources/events/Gallery/${event.eventId}/${imageName}`}
              alt={`event-${index}`}
            />
          ))
        ) : (
          <h2>No images added</h2>
        )}
      </section>
      <section className="timing">
        <div className="details">
          <h4>Timing</h4>
          <h3>10:30 AM</h3>
          <hr />
          <h4>Call us on</h4>
          <h1>{event.number}</h1>
          <h2>{event.email}</h2>
        </div>
        <img src={event.imageURL} alt={event.name} />
      </section>
      <section className="maps">
        <iframe
          title="location"
          src={event.locationURL}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};

export default EventDetail;