import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CountdownTimer = ({ startDate, startTime, id }) => {
  const calculateTimeLeft = () => {
    const eventDate = new Date(`${startDate}T${startTime}:00`);
    const now = new Date();
    const difference = eventDate - now;

    if (difference <= 0) {
      return null;
    }

    const timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  });

  if (!timeLeft) {
    return (
      <div>
        <h2>Event ended</h2>
        <a href="#gallery">
          <button className="main">View Gallary</button>
        </a>
      </div>
    );
  }

  return (
    <div>
    <div className="Countdown">
        <div>
          <p>{timeLeft.days}</p>
          <p>days</p>
        </div>
        <p>:</p>
        <div>
          <p>{timeLeft.hours}</p>
          <p>hours</p>
        </div>
        <p>:</p>
        <div>
          <p>{timeLeft.minutes}</p>
          <p>minutes</p>
        </div>
        <p>:</p>
        <div>
          <p>{timeLeft.seconds}</p>
          <p>seconds</p>
        </div></div>
      <div className="buttons">
        <Link to={`/events/${id}/register`}>
          <button className="main">Buy Tickets Now</button>
        </Link>
      </div>
    </div>
  );
};

export default CountdownTimer;
