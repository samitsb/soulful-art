import { NavigationMenuDemo } from '@/components/navbar'
import Image from 'next/image'
import React from 'react'

const homePage  = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-[#FF6F61] via-white to-[#CC5500]  justify-center p-3'>
      <header className='bg-white shadow-md border-black border-b-9'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
          <div className='flex justify-between items-center '>
            <div className='flex items-center  space-x-1'>
              <Image className='flex-l' src='/Soulful+Art.png' alt="mainLogo" width={90} height={7}/>
              <span className='text-4xl italic font-bold text-gray-900'> SOULFUL-ART</span>
            </div>
            <nav className="hidden md:block ">
              <NavigationMenuDemo />
            </nav>
          </div>
        </div>
      </header>
      {/*body*/}
      <div className=' justify-center p-9 min-h-screen'>
        <header className='bg-transparent  text-center text-7xl pb-11'>
          Shop
        </header>
        <h1 className='font-bold pb-4' >
          Every artwork in our shop is created by individual emmerging artists all over the world. From original artwork to high-quality Sculpture, each piece is a powerful expression of creativity and individuality.
        </h1>
        <h2>
          When you buy from us, you’re not just collecting art — you’re supporting the artists directly and helping us provide the space, materials, community, and professional guidance they need to thrive.
        </h2>
        <h3 className='font-bold pt-4'>
          Because everyone deserves the chance to create, succeed, and be valued. Our artists have the talent — we’re here to make sure they have the opportunity.
        </h3>
      </div>
    </div>      
  )
}

export default homePage