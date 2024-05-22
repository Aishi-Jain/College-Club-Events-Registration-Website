import React from 'react';
import { useParams } from 'react-router-dom';

const EventDetail = () => {
  const { eventName } = useParams();

  return (
    <div>
      <h1>{eventName}</h1>
      <p>Details about {eventName}...</p>
    </div>
  );
};

export default EventDetail;
