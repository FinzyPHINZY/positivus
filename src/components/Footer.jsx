import { FaFacebookF, FaLinkedin, FaTwitter } from 'react-icons/fa'

import logoImg from '../assets/Logo.svg'
import FooterContact from './FooterContact'

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div className="bg-secondary rounded-t-2xl">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 px-4 sm:px-6 lg:px-8 py-12">
          <div className="">
            <img src={logoImg} alt="" className="h-8" />
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 *:text-white *:hover:text-gray-400">
            <a href="#about" className="">
              Home
            </a>
            <a href="#services" className="">
              Services
            </a>
            <a href="#use-cases" className="">
              Use Cases
            </a>
            <a href="#contact" className="">
              Contact
            </a>
          </div>

          <div className="flex md:justify-end space-x-4 ">
            <a href="#" className="p-1.5 text-black bg-white rounded-full  ">
              <FaFacebookF className="hover:text-gray-400" />
            </a>
            <a href="#" className="p-1.5 text-black bg-white rounded-full  ">
              <FaTwitter className=" hover:text-gray-400" />
            </a>
            <a href="#" className="p-1.5 text-black bg-white rounded-full  ">
              <FaLinkedin className=" hover:text-gray-400" />
            </a>
          </div>
        </div>

        <FooterContact />

        <hr className="my-4 border-white mx-4 sm:px-6 lg:px-8" />
        <div className="flex flex-wrap md:gap-8 text-white px-4 sm:px-6 lg:px-8 py-5">
          <p className="">
            &copy; 2024 Positivus. All Rights Reserved.{' '}
            <a
              href="https://finzyphinzy.github.io/finzyphinzy-dev/"
              className=""
            >
              finzyphinzy
            </a>
          </p>
          <p className="underline underline-offset-4">
            <a href="#">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
