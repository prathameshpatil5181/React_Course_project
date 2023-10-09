
import EventsList from '../components/EventsList';
import { useLoaderData,json } from 'react-router-dom';
function EventsPage() {
  const data = useLoaderData();
  if(data.isError){
    return <p>{data.message}</p>
  }
  return (
    <>
      {<EventsList events={data.events}/>}
    </>
  );
}

export default EventsPage;


export async function loader(){
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // return {isError:true,message:'could not fetch events!'}
    throw json({
      message:'could not fetch events!',
      status:500,
    })

  } else {
    return response;
  }
}