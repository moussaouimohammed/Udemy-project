import React from 'react'

const Companies = () => {
  return (
    <div className="mt-7 bg-blue-50">
      <h1 className="py-5 text-3xl font-semibold text-center">
        Trusted by companies of all sizes
      </h1>
      <div className="flex flex-wrap items-center justify-center space-x-7">
        <img
          src="https://s.udemycdn.com/partner-logos/v4/nasdaq-dark.svg"
          alt=""
        />
        <img
          src="https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg"
          alt=""
        />
        <img
          src="https://s.udemycdn.com/partner-logos/v4/box-dark.svg"
          alt=""
        />
        <img
          src="https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg"
          alt=""
        />
        <img
          src="https://s.udemycdn.com/partner-logos/v4/netapp-dark.svg"
          alt=""
        />
      </div>
    </div>
  )
}

export default Companies
