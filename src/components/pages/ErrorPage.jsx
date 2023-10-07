import React from 'react'
import MainNavigation from '../MainNavigation'
const ErrorPage = () => {
  return (
    <>
    <MainNavigation/>
    <div className='Content'>
        <h1>404!</h1>
      <h5>This page dosen't exist pls return to main page</h5>
    </div>
    </>
  )
}

export default ErrorPage
