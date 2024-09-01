import { BsChatQuote } from 'react-icons/bs'
import { TESTIMONIALS } from '../constants'
import { IoArrowBack } from 'react-icons/io5'
import { IoMdArrowForward } from 'react-icons/io'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsToShow, setItemsToShow] = useState(1)

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + itemsToShow) % TESTIMONIALS.length)
  }

  const handlePrevious = () => {
    setCurrentIndex(
      (prev) => (prev - itemsToShow + TESTIMONIALS.length) % TESTIMONIALS.length
    )
  }

  const handleDotClick = (index) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 2000)
    return () => clearInterval(interval)
  }, [currentIndex])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setItemsToShow(3)
      } else {
        setItemsToShow(1)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className="pt-24 pb-8 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="flex-shrink-0 bg-primary text-black py-2 px-16 rounded-md">
            <h2 className="text-2xl font-bold">Testimonials</h2>
          </div>
          <div className="md:w-2/3">
            <p className="text-secondary md:w-2/3">
              Hear from Our Satisfied Clients: Read Our Testimonials to Learn
              More about Our Digital Marketing Services
            </p>
          </div>
        </div>

        <div className="relative mb-12">
          <div className="flex flex-col md:flex-row gap-3 max-w-7xl mx-auto overflow-hidden">
            {TESTIMONIALS.slice(currentIndex, currentIndex + itemsToShow).map(
              (item, i) => (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="w-full relative py-5 md:max-w-md px-2"
                  key={i}
                >
                  <div className="absolute top-0 left-0 z-30">
                    <BsChatQuote className="size-8" />
                  </div>
                  <div className="h-48 bg-white hover:bg-primary rounded-lg border hover:border-primary shadow-lg p-6 cursor-pointer transition-all duration-300">
                    <p className="text-base font-medium mb-4">{item.text}</p>
                    <p className="text-sm font-semibold text-gray-700">
                      {item.author}
                    </p>
                  </div>
                </motion.div>
              )
            )}
          </div>
          <div className="absolute mt-5 left-1/2 transform -translate-x-1/2 flex items-center space-x-5 z-10">
            <button className="text-black" onClick={handlePrevious}>
              <IoArrowBack />
            </button>

            <div className="flex space-x-2">
              {TESTIMONIALS.map((_, index) => (
                <button
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full ${index >= currentIndex && index < currentIndex + itemsToShow ? 'bg-primary' : 'bg-gray-400'}`}
                  key={index}
                />
              ))}
            </div>

            <button className="text-black" onClick={handleNext}>
              <IoMdArrowForward />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
