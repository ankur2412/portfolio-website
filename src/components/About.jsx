import React from 'react'
import AboutImage from '../assets/aboutimage1.png.jpg'
const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
    <div className="container mx-auto px-8 md:px-16 lg:px-24">
      <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
      <div className="flex flex-col md:flex-row items-center md:space-x-12">
        <img
          src={AboutImage}
          alt=""
          className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
        />
        <div className="flex-1">
          <p className="text-lg mb-8">
          I am a passionate frant-end devloper with a focus on building 
                modern and responsive web application with a strong foundation
                in both frantend & basics backend technologies.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <label htmlFor="htmlandcss" className="w-2/12">
                HTML & CSS
              </label>
              <div className="grow bg-gray-800 rounded-full h-2.5">
                <div
                  className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                  transform transition-transform duration-300 hover:scale-105 w-10/12"
                ></div>
              </div>
            </div>
            <div className="flex items-center">
              <label htmlFor="htmlandcss" className="w-2/12">
                React JS
              </label>
              <div className="grow bg-gray-800 rounded-full h-2.5">
                <div
                  className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                  transform transition-transform duration-300 hover:scale-105 w-11/12"
                ></div>
              </div>
            </div>
            <div className="flex items-center">
              <label htmlFor="htmlandcss" className="w-2/12">
                JavaScript
              </label>
              <div className="grow bg-gray-800 rounded-full h-2.5">
                <div
                  className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                  transform transition-transform duration-300 hover:scale-105 w-9/12"
                ></div>
              </div>
            </div>




            <div className="flex items-center">
              <label htmlFor="htmlandcss" className="w-2/12">
                Figma
              </label>
              <div className="grow bg-gray-800 rounded-full h-2.5">
                <div
                  className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                  transform transition-transform duration-300 hover:scale-105 w-10/12"
                ></div>
              </div>
            </div>

            <div className="flex items-center">
              <label htmlFor="htmlandcss" className="w-2/12">
                Node.js, Express.js
              </label>
              <div className="grow bg-gray-800 rounded-full h-2.5">
                <div
                  className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                  transform transition-transform duration-300 hover:scale-105 w-8/12"
                ></div>
              </div>
            </div>

            <div className="flex items-center">
              <label htmlFor="htmlandcss" className="w-2/12">
                MongoDB, GitHub
              </label>
              <div className="grow bg-gray-800 rounded-full h-2.5">
                <div
                  className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                  transform transition-transform duration-300 hover:scale-105 w-9/12"
                ></div>
              </div>
            </div>





          </div>
          <div className="mt-12 flex justify-between text-center">
              <div>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500">
                      6+
                  </h3>
                  <p>Months Experience</p>
              </div>
              <div>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500">
                      5+
                  </h3>
                  <p>Projects Completed</p>
              </div>
              <div>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500">
                      5+
                  </h3>
                  <p>Project Comming Soon...</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    
    
  )
}

export default About