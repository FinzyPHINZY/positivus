import { SERVICES } from '../constants'
import LinkIcon from '../assets/Icon.svg'
import { motion } from 'framer-motion'
import variants from '../utils'

const Services = () => {
  return (
    <section className="pt-24 pb-16 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          variants={variants('top', 0.3)}
          className="flex flex-col md:flex-row gap-4 mb-12"
        >
          <div className="flex-shrink-0 bg-primary text-black py-2 px-16 rounded-md">
            <h2 className="text-2xl font-bold">Services</h2>
          </div>
          <div className="md:w-2/3">
            <p className="text-secondary md:w-2/3">
              At our digital marketing agency, we offer a range of services to
              help business grow and succeed online. These services include:
            </p>
          </div>
        </motion.div>
        <div className="grid grod-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.1 }}
              variants={variants('bottom', 0.5)}
              className={`flex flex-col md:flex-row md:justify-between md:items-center gap-6 p-6 rounded-lg cursor-pointer border border-[#191a23] ${service.backgroundColor} ${service.textColor}`}
              key={index}
            >
              <div className="md:w-1/2 flex flex-col h-full justify-between">
                <button
                  className={`text-3xl py-1.5 font-semibold mb-2 rounded-sm sm:w-60 ${service.foregroundColor}`}
                >
                  {service.title}
                </button>

                <a
                  href="#"
                  className="flex items-center gap-4 py-2 rounded-md text-black hover:bg-opacity-80 hover:text-black/80"
                >
                  <img src={LinkIcon} alt="" className="size-6 rounded-full" />
                  <span className="text-lg font-medium">Learn more</span>
                </a>
              </div>

              <div className="md:w-1/2">
                <img
                  src={service.image}
                  alt=""
                  className="w-full object-cover rounded-md mb-4"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
