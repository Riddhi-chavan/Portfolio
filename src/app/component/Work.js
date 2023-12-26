import Image from 'next/image'
import React from 'react'

const Work = () => {
    return (
        <div className='bg-black'>
            <div className="container py-16 md:py-20" id="work">
                <h2
                    className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-4xl"
                >
                    Technological Proficiency in Building Dynamic Solutions
                </h2>
                <h3
                    className="pt-6 text-center font-header text-xl font-medium text-white sm:text-2xl lg:text-3xl"
                >
                 Here are the tools I have worked with
                </h3>

                <div className="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
                    <span
                        className="left-2/5 absolute inset-y-0 ml-10 hidden w-0.5 bg-grey-40 md:block"
                    ></span>

                    <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
                        <div className="md:w-2/5">
                            <div className="flex justify-center md:justify-start">
                                <span className="shrink-0">
                                    <Image
                                      width={200}
                                      height={200}
                                        src="/mongobd.png"
                                        className="h-auto w-32"
                                        alt="company logo"
                                    />
                                </span>
                                <div className="relative ml-3 hidden w-full md:block">
                                    <span
                                        className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"
                                    ></span>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-3/5">
                            <div className="relative flex md:pl-18">
                                <span
                                    className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"
                                ></span>

                                <div className="mt-1 flex">
                                    <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                                    <div className="md:-mt-1 md:pl-8">
                                        <span className="block font-body font-bold text-grey-40"
                                        ></span>

                                        <span
                                            className="block pt-2 font-header text-xl font-bold uppercase text-primary"
                                        >Database management</span>

                                        <div className="pt-2">
                                            <span className="block font-body text-white"
                                            >Proficient in utilizing MongoDB for robust and scalable database solutions, ensuring efficient data management in my projects—specifically employed in my stock management system, where its flexibility facilitates seamless storage and manipulation of stock data.</span>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
                        <div className="md:w-2/5">
                            <div className="flex justify-center md:justify-start text-grey-70 ">
                                <span className="shrink-0">
                                    <Image
                                        width={200}
                                        height={200}
                                        src="/github.png"
                                        className="h-auto w-32"
                                        alt="company logo"
                                    />
                                </span>
                                <div className="relative ml-3 hidden w-full md:block">
                                    <span
                                        className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"
                                    ></span>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-3/5">
                            <div className="relative flex md:pl-18">
                                <span
                                    className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"
                                ></span>

                                <div className="mt-1 flex">
                                    <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                                    <div className="md:-mt-1 md:pl-8">
                                        <span className="block font-body font-bold text-grey-40"
                                        ></span>

                                        <span
                                            className="block pt-2 font-header text-xl font-bold uppercase text-primary"
                                        > Collaborative Development Hub</span>

                                        <div className="pt-2">
                                            <span className="block font-body text-white"
                                            >Leveraging Git for version control and GitHub for collaborative project management, ensuring organized and efficient tracking of changes in my development projects.</span>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
                        <div className="md:w-2/5">
                            <div className="flex justify-center md:justify-start">
                                <span className="shrink-0">
                                    <Image
                                        width={200}
                                        height={200}
                                        src="/tailwind-logo.png"
                                        className="h-auto w-10"
                                        alt="company logo"
                                    />
                                </span>
                                <div className="relative ml-3 hidden w-full md:block">
                                    <span
                                        className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"
                                    ></span>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-3/5">
                            <div className="relative flex md:pl-18">
                                <span
                                    className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"
                                ></span>

                                <div className="mt-1 flex">
                                    <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                                    <div className="md:-mt-1 md:pl-8">
                                        <span className="block font-body font-bold text-grey-40"
                                        ></span>
                                        <span
                                            className="block pt-2 font-header text-xl font-bold uppercase text-primary"
                                        >    Responsive, Minimal Code Styling</span>

                                        <div className="pt-2">
                                            <span className="block font-body text-white"
                                            >Tailwind CSS empowers designs with effortless elegance, seamlessly combining responsiveness and minimal code for a streamlined and visually stunning user interface experience</span >
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="bg-cover bg-top bg-no-repeat pb-16 md:py-16 lg:py-24"
                style={{ backgroundImage: 'url(img/experience-figure.png)' }}
                id="statistics"
            >
            </div>
        </div>
    )
}

export default Work
