import React from 'react'
import EventForm from '../components/EventForm'
import { json, redirect } from 'react-router-dom'
const NewEventPage = () => {

  return (
    <EventForm/>
  )
}

export const action = async ({request,params})=>{
  const data = await request.formData();

  const eventData = {
    title:data.get('title'),
    image:data.get('image'),
    date:data.get('date'),
    description:data.get('description'),
  }

  console.log(eventData);

  const response = fetch('http://localhost:8080/events',{
  method:'POST',
  headers:{
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(eventData)
  });

  if(!response.ok){
    throw json({
      message:'bad request could not find the error'
    },{status:404}
    )
  }
  return redirect('events')

}
export default NewEventPage
