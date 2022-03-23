import React from 'react'

const Features = () => {
  const data = [
    {
      title: 'Development',
    },
    {
      title: 'Business',
    },
    {
      title: 'IT and Software',
    },
    {
      title: 'Design',
    },
    {
      name: 'Python',
      numbers: '34,081,532 students',
    },
    {
      name: 'Web development',
      numbers: '34,081,532 students',
    },
    {
      name: 'Machine Learning',
      numbers: '6,706,601 students',
    },

    {
      name: 'Financial Analysis',
      numbers: '34,081,532 students',
    },
    {
      name: 'SQL',
      numbers: '10,725,296 students',
    },
    {
      name: 'PMP',
      numbers: '6,706,601 students',
    },
    {
      name: 'AWS Certification',
      numbers: '34,081,532 students',
    },
    {
      name: 'Ethical Hacking',
      numbers: '34,081,532 students',
    },
    {
      name: 'Cyber Security',
      numbers: '34,081,532 students',
    },
    {
      name: 'Photoshop',
      numbers: '34,081,532 students',
    },
    {
      name: 'Graphic Design',
      numbers: '34,081,532 students',
    },
    {
      name: 'Drawingy',
      numbers: '34,081,532 students',
    },
  ]
  return (
    <div className="px-3 py-4 mx-auto mt-10 lg:container">
      <h1 className="py-4 text-2xl font-bold md:w-2/3 lg:w-1/2">
        Featured topics by category
      </h1>
      <div className="grid grid-cols-2 px-6 mx-auto gap-x-10 md:grid-cols-4 lg:container ">
        {data.map((item) => (
          <div>
            <h2 className="pt-4 text-lg font-bold ">{item.title}</h2>
            <div className="">
              <a href="#" className="font-bold text-blue-900 underline">
                {item.name}
              </a>
              <p className="text-sm text-gray-600">{item.numbers}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Features
