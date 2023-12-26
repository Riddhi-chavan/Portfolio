import React from 'react'

const goback = () => {
  return (
    <div className="w-full z-50 top-0 py-3 sm:py-5 absolute bg-[#4C3799]"    >
    <div className="container flex items-center justify-between " >
        <div>

        </div>
        <div className="block" >
            <ul className="flex items-center">
                <li className=" pl-6">
                    <a href='/'>
                        <span
                            className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                        >Home</span></a>

                    <span
                        className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                    ></span>
                </li>

            </ul>
        </div>
    </div>
    
</div>
  )
}

export default goback
