import React from 'react'

// img
// import img1 from '..///'

const Hero = () => {
  return (
    <>
      
       
          <div className=' h-full w-full '>
            <img className='relative h-full w-full' src='https://images.livspace-cdn.com/plain/https://d3gq2merok8n5r.cloudfront.net/img/landingpages/full-home-interiors/Edge_New/new-folder-1657193933-8Jkh5/1440x730-1657194139-erPsT.jpg' title='' />

            <div className='flex items-center absolute top-8 '>
              {/* left section */}
              <div className=' text-white mt-[30vh] max-w-[920px] lg:text-[68px] '>
                <h1 className=' text-white text-5xl leading-9 font-bold px-[12vh] '>Bring home beautiful</h1>
                <p className='text-white text-5xl leading-9 font-bold px-[12vh] py-4 '>
                  interiors<spam className='text-yellow-400 '>  that fit your budget</spam>
                </p>
                <div className='font-tertiary font-medium	text-xl mb-5 px-[12vh]'>
                  Experience unmatched quality & timely delivery with Livspace
                </div>
              </div>

              {/* right section */}
              <div className='lives_info justify-center items-center '>
                <div className='bg-white absolute h-[90vh]  rounded-lg w-[70vh] text-black top-[15%] right-22 items-center justify-center text-center'>
                  <form >
                    <div className='flex-col py-4'>
                      <h1 className='text-2xl font-bold'>Designs for Every Budget</h1>
                      <div className='mb-3 pt-8'>
                        <input className='px-3 py-4 w-[50vh] outline-2 outline-amber-900 placeholder-slate-300 text-slate-600 relative bg-white  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring ' type="text" name="fname" placeholder='Name' />
                      </div>
                      <div className='mb-3 pt-4'>
                        <input className='px-3 py-4 w-[50vh] outline-2 outline-amber-900 placeholder-slate-300 text-slate-600 relative bg-white  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring ' type="email" name="email" placeholder='Email id' />
                      </div>
                      <div className='mb-3 pt-4'>
                        <input className='px-3 py-4 w-[50vh] outline-2 outline-amber-900 placeholder-slate-300 text-slate-600 relative bg-white  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring ' type='Phone number' placeholder='Phone number' />
                      </div>
                      <div>
                        <input type="checkbox" name='whatsapp' />
                        <label for='whatsapp' className='text-md appearance-none required:border-red-500 checked:bg-red-600' checked> Send me updates on WhatsApp</label>
                      </div>
                      {/* <input type='Email id' placeholder='Email id' /> */}
                      <div className='mb-3 pt-4'>
                        <input className='px-3 py-4 w-[50vh] outline-2 outline-amber-900 placeholder-slate-300 text-slate-600 relative bg-white  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring ' type='Property Name' placeholder='Property Name' />
                      </div>
                      <div class="mb-3 pt-3">
                        <button type='Submit' className='btn btn-primary bg-red-600 text-white py-4 px-8 rounded-full uppercase' >get free quote</button>
                      </div>
                      <div className=' mb-3 items-center text-center justify-center'>
                        <p className='text-sm px-[9vh] '>By submitting this form, you agree to the <spam className='text-red-600'>privacy policy</spam> & <spam className='text-red-600'> terms and conditions</spam></p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
     
  
    </>
  )
}

export default Hero
