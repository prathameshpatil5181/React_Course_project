import React from 'react'
import PageContent from './PageContent'
import { useRouteError } from 'react-router-dom'
const Error = () => {

    const error = useRouteError();

    let title = '404! an error occured';
    let message = 'something went wrong';

    if(error.status===500){
        message=error.data.message;
    }
    if(error.status===404){
        title="Not Found!";
        message='Could not find the resourse or page.'
    }

  return (
    <PageContent title={title}>
    {message}
    </PageContent>
  )
}

export default Error
