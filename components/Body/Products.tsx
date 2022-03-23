import React from 'react'
import ProductComp from './ProductComp'

const products = () => {
  return (
    <div>
      <div className="mx-auto mt-10 px-3 lg:container">
        <h1 className="text-2xl font-bold md:text-4xl">
          A broad selection of courses
        </h1>
        <p className="py-2 md:text-lg">
          Choose from 183,000 online video courses with new additions published
          every month
        </p>
        <div className="flex items-center space-x-4 font-bold text-gray-600">
          <h2 className="font-bold text-black">Python</h2>
          <h2>Excel</h2>
          <h2>Web development</h2>
          <h2 className="hidden md:inline-flex">Javascript</h2>
          <h2 className="hidden sm:inline-flex md:inline-flex">Data Science</h2>
          <h2 className="hidden sm:inline-flex md:inline-flex">
            AWS Certification
          </h2>
          <h2 className="hidden md:inline-flex">Drawing</h2>
        </div>
        <div className="mt-4 h-full border border-gray-300 p-8">
          <h2 className="text-2xl font-bold md:w-2/3 lg:w-1/2">
            Expand your career opportunities with Python
          </h2>
          <p className="hidden py-4 md:inline-flex lg:w-2/3">
            Take one of Udemy’s range of Python courses and learn how to code
            using this incredibly useful language. Its simple syntax and
            readability makes Python perfect for Flask, Django, data science,
            and machine learning. You’ll learn how to build everything from
            games to sites to apps. Choose from a range of courses that will
            appeal to
          </p>
          <button className="mt-2 cursor-pointer border border-black px-4 py-2 font-bold hover:bg-gray-200 md:mt-0 md:flex">
            Explore Python
          </button>
          <ProductComp />
        </div>
      </div>

      <div className="mt-10 bg-gray-100">
        <h1 className="pt-5 text-center text-2xl font-bold md:text-3xl lg:hidden">
          Why learn on Udemy?
        </h1>
        <div className="mx-auto gap-24 px-3 pt-2 font-bold lg:container lg:flex">
          <div className="flex items-center space-x-5 p-2 lg:p-4">
            <div className="rounded-full bg-gray-300 p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <h2 className="text-sm md:text-base">
              Learn in-demand skills with over 183,000 video courses
            </h2>
          </div>
          <div className="flex items-center space-x-5 p-2 lg:p-4">
            <div className="rounded-full bg-gray-300 p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <h2 className="text-sm md:text-base">
              Choose courses taught by real-world experts
            </h2>
          </div>
          <div className="flex items-center space-x-5 p-2 lg:p-4">
            <div className="rounded-full bg-gray-300 p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
            </div>
            <h2 className="text-sm md:text-base">
              Learn at your own pace, with lifetime access on mobile and desktop
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default products
