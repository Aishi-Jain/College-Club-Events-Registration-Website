import { doc, getDoc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../config/firebase";
import FirebaseImage from "../components/FirebaseImage";
import CountdownTimer from "../components/CountdownTimer";

const EventDetail = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    console.log("useEffect");
    const fetchEvent = async () => {
      const docRef = doc(db, "events", eventId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const eventData = docSnap.data();
        setEvent(eventData);
        document.documentElement.style.setProperty('--theme-color', eventData.themeColor);
      } else {
        console.log("No such document!");
      }
    };

    fetchEvent();
  }, [eventId]);

  if (!event) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <main>
        <div className="info">
          <FirebaseImage imagePath={event.imageURL} alt={event.name} />
          <div className="overlay-main">
            <h3>Now Playing</h3>
            <h1>{event.name}</h1>
            <CountdownTimer startDate={event.startDate} startTime={event.startTime} id={event.id} />
          </div>
        </div>
      </main>
      <p>{event.name}</p>
      <p>{event.themeColor}</p>
      <p>{event.description}</p>
      <p>{event.imageURL}</p>
    </div>
  );
};

export default EventDetail;
