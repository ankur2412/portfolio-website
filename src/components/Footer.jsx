import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
    <div className="container mx-auto px-8 md:px-16 lg:px-24">
      <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4 text-center">
        <div className="flex-1 mb-4 md:mb-0">
          <h3 className="text-2xl font-bold mb-2">Ankur</h3>
          <p className="text-gray-400">
            Front-End Developer based in web development.
          </p>
        </div>
      </div>
  
      <div className="border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-center items-center">
        <div className="flex space-x-4 my-4 md:my-0">
          <a href="#" className="text-gray-400 hover:text-white">
            <FaFacebook />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaTwitter />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaLinkedin />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  </footer>
  
  )
}

export default Footer