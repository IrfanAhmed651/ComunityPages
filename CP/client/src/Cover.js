import React from 'react'
import blogo from './pictures/logo1.png';

function Cover() {
    return (
        <div>
            <div
                class=" bg-[url('../public/images/banner.jpg')]  bg-center bg-cover w-full h-40">
            </div>
            <div className="bg-rd-brighter">
                <div className='mx-6 relative flex'>
                    <div className='h-20 w-20 rounded-full overflow-hidden relative -top-4'>
                        <img src={blogo} alt="" />
                    </div>
                    <div className='pt-2 pl-4'>
                        <h1 className='text-gray-200 text-3xl'>Gamers Comunnity of Bangladesh</h1>
                        <h5 className='text-gray-500'>assassin</h5>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Cover