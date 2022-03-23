import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full text-white bg-black">
      <div className="items-center justify-between hidden py-6 border-b border-gray-600 px-14 md:flex">
        <h2 className="text-lg font-semibold">
          Top companies choose{' '}
          <span className="text-purple-600"> Udemy Business</span> to build
          in-demand career skills.
        </h2>
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
      <div className="flex flex-col-reverse justify-between px-14 pt-7 md:flex-row">
        <div className="grid justify-between w-1/2 text-sm text-gray-200 md:grid-cols-3 md:gap-12">
          <div className="">
            <h2 className="cursor-pointer hover:text-purple-500">
              Udemy Business
            </h2>
            <h2 className="py-3 cursor-pointer hover:text-purple-500">
              Teach on Udemy
            </h2>
            <h2 className="cursor-pointer hover:text-purple-500">
              Get the app
            </h2>
            <h2 className="py-3 cursor-pointer hover:text-purple-500">
              About us
            </h2>
            <h2 className="cursor-pointer hover:text-purple-500">Contact us</h2>
          </div>
          <div>
            <h2 className="cursor-pointer hover:text-purple-500">careers</h2>
            <h2 className="py-3 cursor-pointer hover:text-purple-500">Blogs</h2>
            <h2 className="cursor-pointer hover:text-purple-500">
              Help and Support
            </h2>
            <h2 className="py-3 cursor-pointer hover:text-purple-500">
              Affiliate
            </h2>
            <h2 className="cursor-pointer hover:text-purple-500">Invistors</h2>
          </div>
          <div>
            <h2 className="cursor-pointer hover:text-purple-500">Terms</h2>
            <h2 className="py-3 cursor-pointer hover:text-purple-500">
              Privacy policy
            </h2>
            <h2 className="cursor-pointer hover:text-purple-500">Sitemap</h2>
            <h2 className="py-3 cursor-pointer hover:text-purple-500">
              Accessibility statement
            </h2>
          </div>
        </div>
        <div className="">
          <div className="mb-5 text-white cursor-pointer group w-fit md:mt-0">
            <div className="flex items-center px-5 py-2 space-x-1 border group-hover:border-purple-500 group-hover:text-purple-500">
              <div className="w-6 h-6 text-white group-hover:border-purple-500 group-hover:text-purple-500 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h2 className="font-semibold ">English</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-between py-12 px-14 md:flex">
        <div className="">
          <img
            src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
            className="w-24 cursor-pointer "
            alt=""
          />
        </div>
        <h2 className="py-3 text-sm cursor-pointer hover:text-purple-500">
          © 2022 Udemy, Inc.
        </h2>
      </div>
    </footer>
  )
}

export default Footer
