import React from 'react'
import Companies from './Companies'
import Features from './Features'
import Hero from './Hero'
import PostFeatures from './PostFeatures'
import ProductComp from './ProductComp'
import Products from './Products'
import TopCategory from './TopCategory'

const imagedata = [
  'https://img-c.udemycdn.com/course/240x135/793796_0e89_2.jpg',
  'https://img-c.udemycdn.com/course/240x135/1565838_e54e_15.jpg',
  'https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg',
  'https://img-b.udemycdn.com/course/240x135/437398_46c3_10.jpg?secure=BY8aVo0gTh0Zj--2MT0PBw%3D%3D%2C1647436035',
  'https://img-c.udemycdn.com/course/240x135/482754_7146_6.jpg',
]

const Body = (data, imagedata) => {
  return (
    <>
      <Hero />
      <Products />
      <div className="px-10">
        <ProductComp />
      </div>
      <div className="mx-auto mt-10 px-3 lg:container">
        <h2 className="mt-6 text-2xl  font-bold md:w-2/3 lg:w-1/2">
          Top categories
        </h2>
        <TopCategory />
      </div>
      <div className="w-full bg-gray-100">
        <Features />
      </div>
      <div className='className="px-3 lg:container" mx-auto mt-10'>
        <PostFeatures
          className="flex flex-col items-center justify-center md:flex-row md:space-x-20"
          title=" Become an instructor"
          src="https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg"
          btn="Start teaching Today"
        />
        <Companies />
        <PostFeatures
          className="flex flex-col items-center justify-center md:flex-row-reverse md:space-x-20"
          title="Udemy Business"
          src="https://s.udemycdn.com/home/non-student-cta/ub-1x-v3.jpg"
          btn="Get Udemy Business"
        />
        <PostFeatures
          className="flex flex-col items-center justify-center md:flex-row md:space-x-20"
          title=" Transform your life through education"
          src="https://s.udemycdn.com/home/non-student-cta/transform-1x-v3.jpg"
          btn="Find Out How"
        />
      </div>
    </>
  )
}

export default Body
