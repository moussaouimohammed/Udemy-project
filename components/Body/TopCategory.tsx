import React from 'react'

const TopCategory = () => {
  const data = [
    {
      name: 'Design',
      image:
        'https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg',
    },
    {
      name: 'Development',
      image:
        'https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg',
    },
    {
      name: 'Marketing',
      image:
        'https://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg',
    },
    {
      name: 'IT & Software',
      image:
        'https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg',
    },
    {
      name: 'Personal Development',
      image:
        'https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg',
    },
    {
      name: 'Business',
      image:
        'https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg',
    },
    {
      name: 'Photography',
      image:
        'https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg',
    },
    {
      name: 'Music',
      image:
        'https://s.udemycdn.com/home/top-categories/lohp-category-music-v2.jpg',
    },
  ]
  return (
    <div className="mx-auto mt-10 flex grid-cols-4 flex-wrap gap-4  px-3 py-6 text-sm md:grid md:text-base lg:container">
      {data.map((infodata) => (
        <div className="cursor-pointer border-b border-gray-300 transition duration-300 ease-in-out hover:scale-105 lg:border-none">
          <img className="hidden md:block" src={infodata.image} alt="" />
          <h2 className="rounded-full border border-black px-2 py-2 font-bold sm:border-none ">
            {infodata.name}
          </h2>
        </div>
      ))}
    </div>
  )
}

export default TopCategory
