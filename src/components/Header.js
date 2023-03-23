import React from 'react'


const Header = () => {
    return (
        <>
            <header className='bg-white h-26 p-2 flex items-center justify-between px-8 sticky top-0 z-20'>
                <div>
                    <img className='w-20 outline-none ' src='https://www.livspace.com/_nuxt/img/companyLogoWithBrand.7384cb2.png' alt='' />
                </div>
                <div className= ''>
                    <button type='Submit' className='btn btn-primary bg-red-500 text-white text-sm py-2 px-8 rounded-full uppercase' >get free quote</button>
                </div>
            </header>

        </>
    )
}

export default Header;
