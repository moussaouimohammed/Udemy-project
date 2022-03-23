import React from 'react'

const PostFeatures = ({ src, className, title, btn }) => {
  return (
    <div className="mt-10">
      <div className={className}>
        <img src={src} alt="" />
        <div className="px-6 w-fit md:w-1/3 md:px-0">
          <h1 className="pt-4 text-2xl font-bold text-center opa md:pt-0 md:text-left md:text-4xl">
            {title}
          </h1>
          <p className="pt-2 text-center md:py-4 md:text-left md:text-lg ">
            Instructors from around the world teach millions of students on
            Udemy. We provide the tools and skills to teach what you love.
          </p>
          <button className="w-full px-4 py-2 mt-3 font-bold text-white transition duration-300 ease-in-out transform bg-black border border-black mb-7 hover:scale-95 hover:opacity-80 md:mt-0 md:flex md:w-fit">
            {btn}
          </button>
        </div>
      </div>
    </div>
  )
}

export default PostFeatures
