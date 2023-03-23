import React from 'react'


const Header = () => {
    return (
        <>
            <header className='bg-white h-20 flex items-center justify-between px-8 sticky top-0 z-20'>
                <div>
                    <img className='h-[10vh] w-[30vh] outline-none' src='https://static.startuptalky.com/2021/07/livspace-logo-startuptalky.jpg' alt='' />
                </div>
                <div className= ''>
                    <button type='Submit' className='btn btn-primary bg-red-500 text-white text-sm py-2 px-8 rounded-full uppercase' >get free quote</button>
                </div>
            </header>

        </>
    )
}

export default Header
