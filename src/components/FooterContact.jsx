const FooterContact = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row py-8 px-4 lg:px-8 sm:px-6 gap-8">
        <div className="flex-1 space-y-4">
          <button className="bg-primary text-black px-6 py-2 rounded-md font-medium">
            Contact
          </button>
          <div className="text-white space-y-2">
            <p className="">
              <strong>Email:</strong> hello@johndoe.com
            </p>
            <p className="">
              <strong>Phone:</strong> +234 123 2345 3442
            </p>
            <p className="">
              <strong>Address:</strong> 1234, Example St, Westeros
            </p>
          </div>
        </div>

        <div className="flex-1 bg-[#292a32] justify-center p-8 items-center rounded-md">
          <form className="flex flex-col justify-center items-center h-20 md:flex-row gap-4">
            <input
              type="email"
              placeholder="hello@johndoe.com"
              className="flex-1 px-4 py-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="bg-primary text-black px-6 py-2.5 rounded-md font-medium">
              Contact
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default FooterContact
