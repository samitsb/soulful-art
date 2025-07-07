import { NavigationMenuDemo } from '@/components/ui/navbar'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const homePage  = () => {
  return (
    <div className='2xl:min-h-full bg-gradient-to-br from-[#FF6F61] via-white to-[#CC5500]  justify-center p-3'>
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
        <h3 className='font-bold pt-4 pb-3'>
          Because everyone deserves the chance to create, succeed, and be valued. Our artists have the talent — we’re here to make sure they have the opportunity.
        </h3>
        <div className='flex items-center pt-15 pl-40 pb-10 border-b-5 border-t-4 border-black'>
         <Image src="/monalisa.jpg" alt="painting"  width={200} height={200}/>
         <Image className=' pl-30' src="/soulpaint.jpg" alt="painting2" width={500} height={999}/>
         <Image className='pl-30 pr-20' src="/Thangka.jpg" alt="painting3" width={412} height={999}/>
         <Button className='cursor-pointer font-bold p-2 border rounded-3xl'>more...</Button>
        </div>
        <div className='flex  items-center pt-15 pl-40 pb-10  border-black'>
          <Image src="/sculpture-man.jpg" alt='scp1' width={200} height={90}/>
          <Image className='pl-30' src="/sam.jpg"  alt='scp2' width={500} height={90}/>
          <Image className='pl-30  pr-20' src="/nepali1.jpg" alt='scp3' width={444} height={90}/>
          <Button className='cursor-pointer font-bold p-2 border rounded-3xl'>more...</Button>
        </div>
               

      </div>
      <footer className='w-full  h-90 bg-white  shadow-lg p-6 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 '>
        <div>
          {/* image */}
          <Image className='flex pl-10 ' src='/Soulful+Art.png' alt="mainLogo" width={400} height={7}/>
        </div>
        <div className='text-center md:text-left'>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Soulful-ART</h1>
          <p className="text-gray-600 text-base md:text-sm leading-relaxed mb-8">
            Kathmandu-31, santinagar
          </p>
          <p className="text-gray-600 text-base md:text-sm leading-relaxed ">
            Soulful-ART is a registered corporation in Nepal 
          </p>
        </div>    
      </footer>      
    </div>      
  )
}

export default homePage