import React from 'react'
import { useParams } from 'react-router-dom'
const EventDetailPage = () => {
  const {eventid} = useParams();
  return (
    <>
    <h1>
      EventDetailPage
    </h1>
    <h3>event is</h3>
    <h3>{eventid}</h3>
    </>
  )
}

export default EventDetailPage
