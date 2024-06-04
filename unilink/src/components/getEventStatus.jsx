import React from 'react';

const EventStatus = ({ startDate }) => {
  const eventDate = new Date(startDate);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const isSameDay = (date1, date2) => {
    return date1.getFullYear() === date2.getFullYear() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getDate() === date2.getDate();
  };

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
    return `${day}${getOrdinalSuffix(day)} ${month} ${year}`;
  };

  const getOrdinalSuffix = (day) => {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  };

  const getEventStatus = () => {
    if (isSameDay(eventDate, today)) {
      return 'Now Playing';
    } else if (isSameDay(eventDate, tomorrow)) {
      return 'Coming Tomorrow';
    } else {
      return formatDate(eventDate);
    }
  };

  return (
    <div>
      {getEventStatus()}
    </div>
  );
};

export default EventStatus;
