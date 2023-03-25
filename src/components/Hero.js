import React, { useState, useEffect } from 'react'

// img
// import img1 from '..///'

const Hero = () => {
  const [errors, setErrors] = useState({})
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    property: ""
  })
  let name, value;

  const getUserData = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value })

  }
  useEffect(() => {
  
    postData();
    // setErrors(validation(user))
    
  }, )
  

  const postData = async (e) => {
    e.preventDefault();

    const { name, email, phone, property } = user

    if (name && email && phone && property) {

      const res = await fetch("https://livespace-fb11d-default-rtdb.firebaseio.com/livespacehouseform.json",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            property

          })
        });

      if (res) {
        setUser({
          name: "",
          email: "",
          phone: "",
          property: ""
        });
        alert("form submit successfully")

      }

    } else{
      setErrors(validation(user))
    }
     
  }

  const validation = (user) => {
    let errors = {};
    if (!user.name) {
      errors.name = "fill the name please"
    } if (!user.email) {
      errors.email = "please fill the email"
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      errors.email = "email is invilid"
    } if (!user.phone) {
      errors.phone = "please fill the phone number"
    } else if (user.phone.length <= 9) {
      errors.phone = "plese fill the 10 number"
    } if (!user.property) {
      errors.property = "please fill the property"
    }
    return errors;
  }

  console.log(user, "jjj")
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
              <form method='POST'>
                <div className='flex-col py-4'>
                  <h1 className='text-2xl font-bold'>Designs for Every Budget</h1>
                  <div className='mb-3 pt-8'>
                    <input className='px-3 py-4 w-[50vh] outline-2 outline-amber-900 placeholder-slate-300 text-slate-600 relative bg-white  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring ' type="text" value={user.name} onChange={getUserData} name="name" placeholder='Name' />
                    {errors.name && <p className='text-red-500 text-xs text-left ml-16 mt-[1px]'>{errors.name}</p>}
                  </div>
                  <div className='mb-3 pt-4'>
                    <input className='px-3 py-4 w-[50vh] outline-2 outline-amber-900 placeholder-slate-300 text-slate-600 relative bg-white  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring ' type="text" value={user.email} onChange={getUserData} name="email" placeholder='Email id' />
                    {errors.email && <p className='text-red-500 text-xs text-left ml-16 mt-[1px]'>{errors.email}</p>}
                  </div>
                  <div className='mb-3 pt-4'>
                    <input className='px-3 py-4 w-[50vh] outline-2 outline-amber-900 placeholder-slate-300 text-slate-600 relative bg-white  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring ' type='text' value={user.phone} onChange={getUserData} name='phone' placeholder='Phone number' />
                    {errors.phone && <p className='text-red-500 text-xs text-left ml-16 mt-[1px]'>{errors.phone}</p>}
                  </div>
                  <div>
                    <input type="checkbox" name='whatsapp' />
                    <label for='whatsapp' className='text-md appearance-none required:border-red-500 checked:bg-red-600' checked> Send me updates on WhatsApp</label>
                  </div>
                  {/* <input type='Email id' placeholder='Email id' /> */}
                  <div className='mb-3 pt-4'>
                    <input className='px-3 py-4 w-[50vh] outline-2 outline-amber-900 placeholder-slate-300 text-slate-600 relative bg-white  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring ' type='text' value={user.property} onChange={getUserData} name='property' placeholder='Property Name' />
                    {errors.property && <p className='text-red-500 text-xs text-left ml-16 mt-[1px]'>{errors.property}</p>}
                  </div>
                  <div class="mb-3 pt-3">
                    <button onClick={postData} type='Submit' className='btn btn-primary bg-red-600 text-white py-4 px-8 rounded-full uppercase' >Submit</button>
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

export default Hero;
