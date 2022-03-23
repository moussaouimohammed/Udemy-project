import React, { useState } from 'react'
import {
  BanIcon,
  HomeIcon,
  MenuIcon,
  XCircleIcon,
  XIcon,
} from '@heroicons/react/outline'
import Link from 'next/link'
import Image from 'next/image'

const header = () => {
  const [Nav, setNav] = useState(false)
  const handleClick = () => {
    setNav(!Nav)
  }
  return (
    <div className="relative ">
      <header className="px-4 py-3 shadow-lg md:px-0">
        <div className="flex items-center justify-between w-full mx-auto text-gray-700 md:px-4 lg:container lg:justify-start lg:space-x-4">
          <div onClick={handleClick} className="cursor-pointer md:hidden">
            {Nav ? (
              <XIcon className="h-6 transition-all duration-300 ease-in-out transform hover:scale-105" />
            ) : (
              <MenuIcon className="h-6" />
            )}
          </div>
          <Link href="/">
            <Image
              src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
              width={70}
              height={40}
              alt=""
              className="cursor-pointer"
            />
          </Link>
          <h2 className="hidden cursor-pointer hover:text-purple-600 lg:inline-flex">
            <Link href="/categories">Categories</Link>
          </h2>
          <form
            className="hidden items-center rounded-full border border-black bg-blue-50 py-3 pl-3 md:flex md:w-96 lg:w-[28rem]"
            action=""
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-5 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              placeholder="Search for somthing..."
              className="hidden w-full pl-3 text-sm bg-transparent outline-none md:inline-flex"
              type="text"
            />
          </form>
          <h2 className="hidden cursor-pointer hover:text-purple-700 lg:flex">
            <Link href="/udemyBusiness">Udemy Business</Link>
          </h2>
          <h2 className="hidden cursor-pointer hover:text-purple-700 lg:flex">
            <Link href="/teachOnUdemy">Teach on Udemy</Link>
          </h2>
          <div className="flex items-center space-x-2 font-bold text-black">
            <div className="flex items-center space-x-2 md:space-x-0">
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-5 cursor-pointer md:hidden"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
            </div>
            <button className="hidden px-4 py-2 font-bold border border-black cursor-pointer hover:bg-gray-200 md:flex">
              Log in
            </button>
            <button className="hidden px-4 py-2 font-bold text-white bg-black border border-black md:flex">
              Sign up
            </button>
            <div className="hidden px-2 py-2 border border-black cursor-pointer hover:bg-gray-200 lg:inline-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
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
          </div>
        </div>
      </header>
      {/* toggle buttun */}
      {Nav && (
        <div className="absolute left-0 flex flex-col items-center justify-center w-full py-6 space-y-4 text-base font-semibold uppercase bg-gray-300 top-50 h-96">
          <h5 className="flex items-center transition duration-300 ease-in-out transform cursor-pointer hover:scale-105 hover:border-b hover:border-blue-900 hover:text-blue-700 ">
            <Link href="/">home</Link>
          </h5>
          <h5 className="flex items-center transition duration-300 ease-in-out transform cursor-pointer hover:scale-105 hover:border-b hover:border-blue-900 hover:text-blue-700">
            <Link href="/categories">Categories</Link>
          </h5>
          <h5 className="transition duration-300 ease-in-out transform cursor-pointer hover:scale-105 hover:border-b hover:border-blue-900 hover:text-blue-700 ">
            <Link href="/udemyBusiness">Udemy Business</Link>
          </h5>
          <h5 className="transition duration-300 ease-in-out transform cursor-pointer hover:scale-105 hover:border-b hover:border-blue-900 hover:text-blue-700">
            <Link href="/teachOnUdemy">Teach on Udemy</Link>
          </h5>
        </div>
      )}
    </div>
  )
}

export default header
