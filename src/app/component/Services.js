import Image from 'next/image'
import React from 'react'

const Services = () => {
    return (
        <div className='bg-black' >
            <div className="container py-16 md:py-20 " id="services"  >
                <h2
                    className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
                >
                    Here is what I am good at
                </h2>
                <h3
                    className="pt-6 text-center font-header text-xl font-medium text-white sm:text-2xl lg:text-3xl"
                >
                    These are the services I offer
                </h3>

                <div
                    className="group-hover:scale-105  grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3 "
                >
                    <div className="group-hover:scale-95  hover:scale-105 rounded-xl px-8 py-12 shadow bg-primary  ">
                        
                        <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                            <div className="block">
                                <Image
                                 width={200}
                                 height={200}
                                    src="img/icon-graphics-white.svg"
                                    alt="Graphic Design icon"
                                />
                            </div>
                           
                        </div>
                        <div className="text-center ">
                            <h3
                                className="pt-8 text-lg font-semibold uppercase text-yellow group-hover:text-yellow lg:text-xl"
                            >
                                Frontend Development
                            </h3>
                            <p className="text-grey pt-4 text-sm text-white group-hover:text-white md:text-base   ">
                                With expertise in React, Tailwind CSS, and Next.js, I specialize in crafting dynamic UIs, efficient styles, and SEO-friendly, server-rendered web apps, ensuring seamless experiences across devices with a responsive design focus.
                            </p>
                        </div>
                    </div>
                    <div className="group-hover:scale-105  hover:scale-105 rounded-xl px-8 py-12 shadow bg-primary ">
                        
                         <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                            <div className="block">
                                <Image 
                                 width={200}
                                 height={200}
                                    src="img/icon-development-white.svg"
                                    alt="development icon"
                                />
                            </div>
                           
                        </div>
                        <div className="text-center">
                            <h3
                                className="pt-8 text-lg font-semibold uppercase text-yellow lg:text-xl"
                            >
                                Backend Development
                            </h3>
                            <p className="text-grey pt-4 text-sm text-white md:text-base">
                                Specialized in MongoDB for NoSQL database design and Sanity.io for headless CMS, adept at structuring content and managing data for dynamic applications.
                            </p>
                        </div>
                    </div>
                    <div className="group-hover:scale-105  hover:scale-105 rounded-xl px-8 py-12 shadow bg-primary">
                        <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                            <div className="block">
                                <Image 
                                width={200}
                                height={200}
                                    src="/img/icon-design-white.svg"
                                    alt="Mobile Application icon"
                                />
                            </div>
                            
                        </div>
                        <div className="text-center">
                            <h3
                                className="pt-8 text-lg font-semibold uppercase text-yellow lg:text-xl"
                            >
                                Full Stack Development
                            </h3>
                            <p className="text-grey pt-4 text-sm text-white md:text-base">

                                Bridging frontend and backend seamlessly, I provide end-to-end development solutions by integrating components and services for a cohesive user experience.
                            </p>
                        </div>
                    </div>
                    <div className="group-hover:scale-105  hover:scale-105 rounded-xl px-8 py-12 shadow bg-primary">
                        <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                            <div className="block">
                                <Image 
                                 width={200}
                                 height={200}
                                    src="/img/icon-content-white.svg"
                                    alt="Email Marketing icon"
                                />
                            </div>
                        </div>
                        <div className="text-center">
                            <h3
                                className="pt-8 text-lg font-semibold uppercase text-yellow lg:text-xl"
                            >
                                Project Management
                            </h3>
                            <p className="text-grey pt-4 text-sm text-white md:text-base">

                                Leading cross-functional teams and managing the entire software development lifecycle, I contribute expertise from ideation to deployment for successful project outcomes.
                            </p>
                        </div>
                    </div>
                    <div className="group-hover:scale-105  hover:scale-105 rounded-xl px-8 py-12 shadow bg-primary">
                        <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                            <div className="block">
                                <Image
                                 width={200}
                                 height={200}
                                    src="/collaboration-white.svg.svg"
                                    alt="Theme Design icon"
                                />
                            </div>
                           
                        </div>
                        <div className="text-center">
                            <h3
                                className="pt-8 text-lg font-semibold uppercase text-yellow lg:text-xl"
                            >
                                Collaborative Development
                            </h3>
                            <p className="text-grey pt-4 text-sm text-white md:text-base">

                                Collaborating with design teams to realize creative visions and closely engaging with stakeholders to meet project requirements effectively.
                            </p>
                        </div>
                    </div>
                    <div className="group-hover:scale-105  hover:scale-105 rounded-xl px-8 py-12 shadow bg-primary">
                       <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                            <div className="block">
                                <Image 
                                  width={200}
                                  height={200}
                                    src="/learning.svg"
                                    alt="content marketing icon"
                                />
                            </div>
                           
                        </div>
                        <div className="text-center">
                            <h3
                                className="pt-8 text-lg font-semibold uppercase text-yellow lg:text-xl"
                            >
                                Continuous Learning and Research
                            </h3>
                            <p className="text-grey pt-4 text-sm text-white md:text-base">
                                Continuously integrating industry trends, adopting new technologies, and contributing to the tech community through knowledge sharing and open-source contributions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
            )
}

            export default Services
