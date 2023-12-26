import React from 'react'

const contact = () => {
  return (
    <div className='relative bg-cover bg-center bg-no-repeat' style={{ backgroundImage: 'url(img/bg-hero.jpg)' }} >
      <div className="absolute inset-0 z-20 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to bg-cover bg-center bg-no-repeat ">
        </div>
        <div className="container py-16 md:py-20 z-30 relative" id="contact">
          <h2
            className="text-center font-header text-4xl font-semibold uppercase text-black sm:text-5xl lg:text-6xl"
          >
            Here is a contact form
          </h2>
          <h4
            className="pt-6 text-center font-header text-xl font-medium text-white sm:text-2xl lg:text-3xl"
          >
            Have Any Questions?
          </h4>
          <div className="mx-auto w-full pt-5 text-center sm:w-2/3 lg:pt-6">
            <div className="font-body text-grey-30">
              Explore my portfolio and feel free to reach out through the contact form if you have any questions. Your inquiries are valued  and I look forward to connecting with you to discuss my projects and experiences in more detail
            </div>
          </div>
          <form className="mx-auto w-full pt-10 sm:w-3/4" action='https://formspree.io/f/xoqogkrb' method='POST'>
            <div className="flex flex-col md:flex-row">
              <input
                className="mr-3 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:w-1/2 lg:mr-5 bg-transparent "
                placeholder="Name"
                type="text"
                id="name"
                required
                name='username'
              />
              <input
                className="mt-6 w-full rounded border-grey-50 px-4 py-3 bg-transparent font-body text-black md:mt-0 md:ml-3 md:w-1/2 lg:ml-5"
                placeholder="Email"
                type="email"
                id="email"
                required
                name='Email'
              />
            </div>
            <textarea
              className="mt-6 w-full rounded border-grey-50 bg-transparent px-4 py-3 font-body text-black md:mt-8"
              placeholder="Message"
              id="message"
              name='Enter you Message'

            ></textarea>
            <input type='submit' value="send" name='send'
              className="mt-6 flex items-center justify-center rounded bg-black px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-50"
            />



          </form>
          <div className="flex flex-col pt-16 lg:flex-row">
            <div
              className="w-full border-l-2 border-t-2 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3"
            >
              <div className="flex items-center">
                <i className="bx bx-phone text-2xl text-grey-40"></i>
                <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                  My Phone
                </p>
              </div>
              <p className="pt-2 text-left font-body font-bold text-white lg:text-lg">
                (+91) 9324077985
              </p>
            </div>
            <div
              className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2"
            >
              <div className="flex items-center">
                <i className="bx bx-envelope text-2xl text-grey-40"></i>
                <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                  My Email
                </p>
              </div>
              <p className="pt-2 text-left font-body font-bold text-white lg:text-lg">
                riddhic164@gmail.com
              </p>
            </div>
            <div
              className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2"
            >
              <div className="flex items-center">
                <i className="bx bx-map text-2xl text-grey-40"></i>
                <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                  My Address
                </p>
              </div>
              <p className="pt-2 text-left font-body font-bold text-white lg:text-lg">
                Chembur west  mumbai 400089 India
              </p>
            </div>
          </div>
        
      </div>
    </div>
  )
}

export default contact
