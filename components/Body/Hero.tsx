import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div>
      <div className="relative mt-1 flex w-full lg:h-96">
        <div className="absolute top-14 left-24 z-50 hidden w-4/12 border bg-white px-4 py-6 shadow-xl lg:block">
          <h1 className="text-4xl font-bold">New to Udemy? Lucky you.</h1>
          <p className="py-2 text-lg">
            Courses start at $13.99. Get your new-student offer before it
            expires.
          </p>
        </div>
        <div className="h-fit w-full">
          <Image
            src="https://img-c.udemycdn.com/notices/web_banner/image_udlite/4f9d4123-43ee-4f2a-b5ef-1f2ac22962f3.jpg"
            className=""
            alt=""
            layout="fill"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
