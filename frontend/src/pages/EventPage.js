import React from "react";
import { Link } from "react-router-dom";
const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Some event",
  },
  {
    id: "e2",
    title: "Another event",
  },
];
const EventPage = () => {
  return (
    <>
      <h1>EventPage</h1>
      <ul>
        {DUMMY_EVENTS.map((event) => {
          return<li key={`events/${event.id}`}> <Link to={event.id}>{event.title}</Link></li>;
        })}
      </ul>
    </>
  );
};

export default EventPage;
