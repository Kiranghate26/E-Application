import React from 'react'
import img from '../assets/img/bgpng.png'
function Home() {
    return (
        <div className="bg-[#e3edf6] banner pt-4">
            <div className="container grid md:grid-cols-2 oy-8 w-full">
                <div className="flex items-center">
                    <div className="max-w-[450px] space-y-4 bg-white p-4 rounded-lg shadow">
                        <h2 className='text-headingFirst font-semibold text-2xl md:text-4xl'>mobile collection is here</h2>
                        <h3 className='text-3xl font-semibold'>Offer on all mobile <span className='text-red-600 font-secondary font-medium'>10% discount</span></h3>
                        <a href='#' className='inline-block bg-sky-500 text-white rounded-md px-6 py-3 hover:bg-sky-600 transition-all duration-200 '>SHop noww!!!</a>
                    </div>

                </div>
                <div className="ml-auto">
                    <img src={img} alt='home' className="ml-auto"/>
                </div>
            </div>
        </div>
    )
}

export default Home