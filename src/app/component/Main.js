import React from 'react'
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

const Main = () => {
  return (
    <div>
      <div className="relative bg-cover bg-center bg-no-repeat py-8" style={{ backgroundImage: 'url(img/bg-hero.jpg)' }}
      >
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to bg-cover bg-center bg-no-repeat">
        </div>

        <div className="container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48 ">
          <div className="flex flex-col items-center justify-center lg:flex-row">
            <div className="rounded-full border-8 border-white shadow-xl">

              <Image
                width={200}
                height={200}
                src="/myself.jpeg"
                className="rounded-full object-cover"
                alt="author"
              />

            </div>
            <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
              <h1
                className="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl"
              >
                Hello I am Riddhi Chavan !
              </h1>
              <div
                className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start"
              >
                <div
                  className="flex items-center justify-center pl-0 sm:justify-start md:pl-1"
                >
                  <p className="font-body text-lg uppercase text-white"> Connect</p>
                  <div className="hidden sm:block">
                  </div>
                </div>
                <div
                  className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0"
                >
                  <a href="https://www.instagram.com/riddhi_chavan_95/" target='_blank'>
                    <i
                      className="bx bxl-facebook-square text-3xl text-black hover:text-yellow ml-2"
                    >  <FontAwesomeIcon icon={faInstagram} /></i>
                  </a>
                  <a href="https://www.facebook.com/riddhi.chavan.370" target="_blank" className="pl-4">
                    <i
                      className="bx bxl-twitter text-3xl text-black hover:text-yellow"
                    ><FontAwesomeIcon icon={faGithub} /></i>
                  </a>
                  <a href="https://www.linkedin.com/in/riddhi-chavan-7b11b6268/" target='_blank' className="pl-4">
                    <i
                      className="bx bxl-dribbble text-3xl text-black hover:text-yellow"
                    >
                      <FontAwesomeIcon icon={faLinkedin} />
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
