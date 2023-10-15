import React from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link';
const DetailsPage = () => {
    const router = useRouter();
  return (
    <>
    <h1>
      DetailsPage : {router.query
      .newsId}
    </h1>
    <div style={{border:"1px solid black", borderRadius:'3px',padding:'5px', width:'80px'}}>
        <Link href='/news'>Go Back</Link>
    </div>
    </>
  )
}

export default DetailsPage
