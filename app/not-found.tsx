import React from 'react'
import Image from 'next/image'

const NotFound = () => {
  return (
    <div className='relative w-fill h-screen'>
      <Image src={"/not-found.jpg"} fill priority alt='not-found' />
    {/* <div className="flex justify-center items-center h-screen text-4xl capitalize">sorry this page not found</div> */}
    </div>
  )
}

export default NotFound