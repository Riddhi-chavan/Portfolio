import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const about = () => {
  return (
    <div className=''>
      <div className="bg-black " id="about" >

        <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
          <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left  ">
            <h2
              className="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl "
            >
              Who am I?
            </h2>
            <h4
              className="pt-6 font-header text-xl font-medium text-white sm:text-2xl lg:text-3xl"
            >
               I am  Riddhi Chavan , a Frontend-developer
            </h4>
            <div className="pt-6 font-body leading-relaxed text-grey-20">
               I am   a frontend developer well-versed in React, JavaScript, HTML, CSS, Tailwind CSS, and Next.js. My passion for pushing boundaries led me to dive into C and C++, and  I am  currently venturing into Rust to explore the world of systems programming. Excited about the full spectrum of web development, I have recently started my journey into backend technologies, gaining hands-on experience with MongoDB and Sanity.io. With a knack for crafting immersive user interfaces and a growing expertise in both frontend and backend technologies,  I am  on a mission to create seamless and impactful digital experiences.  Connect and build something amazing! 💻✨
            </div>
            <div
              className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start"
            >
              <div className="flex items-center justify-center sm:justify-start">
                <p className="font-body text-lg font-semibold uppercase text-grey-20">
                  Connect with me
                </p>
                <div className="hidden sm:block">
                  <i className="bx bx-chevron-right text-2xl text-primary"></i>
                </div>
              </div>
              <div
                className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0"
              >
                <a href="https://www.instagram.com/riddhi_chavan_95/" target='_blank'>
                  <i
                    className="bx bxl-facebook-square text-3xl text-grey-20 hover:text-yellow ml-2"
                  >  <FontAwesomeIcon icon={faInstagram} /></i>
                </a>
                <a href="https://www.facebook.com/riddhi.chavan.370" target="_blank" className="pl-4">
                  <i
                    className="bx bxl-twitter text-3xl text-grey-20 hover:text-yellow"
                  ><FontAwesomeIcon icon={faGithub} /></i>
                </a>
                <a href="https://www.linkedin.com/in/riddhi-chavan-7b11b6268/" target='_blank' className="pl-4">
                  <i
                    className="bx bxl-dribbble text-3xl text-grey-20 hover:text-yellow"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </i>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
            <div>
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-white">
                  Javascript
                </h4>
                <h3 className="font-body text-3xl font-bold text-primary">85%</h3>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div className="h-3 rounded-full bg-primary " style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-white">Next js</h4>
                <h3 className="font-body text-3xl font-bold text-primary">70%</h3>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div className="h-3 rounded-full bg-primary" style={{ width: '70%' }}></div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-white">
                  HTML & CSS
                </h4>
                <h3 className="font-body text-3xl font-bold text-primary">98%</h3>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div className="h-3 rounded-full bg-primary " style={{ width: '98%' }}></div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-white">React</h4>
                <h3 className="font-body text-3xl font-bold text-primary">91%</h3>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div className="h-3 rounded-full bg-primary " style={{ width: '91%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default about
