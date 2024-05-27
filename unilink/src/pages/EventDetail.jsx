import { doc, getDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../config/firebase";

const EventDetail = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState();

  useEffect(() => {
    async function getEventIngo() {
      const docRef = doc(db, "events", eventId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setEvent(docSnap.data());
        document.documentElement.style.setProperty('--theme-color', docSnap.data().theme);
      } else {
        console.error("No such document!");
      }
    }
    getEventIngo();
  });
  return (
    <div>
      <p>{event?.name}</p>
      <p>{event?.theme}</p>
      <p>{event?.desc}</p>
      <p>{event?.img}</p>
    </div>
  );
};

export default EventDetail;
