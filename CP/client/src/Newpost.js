import React from 'react'
import Avatar from './pictures/avatar2.png';
import { useContext } from "react";
import PostFormModalContext from "./PostFormModalContext";


function Newpost() {

  const modalContext = useContext(PostFormModalContext);

  return (
    <div>
      <div className='bg-rd px-6 py-4 text-gray-400'>

        <div className='border border-rb p-2 rounded-md flex'>
          <div className='rounded-full bg-gray-700 overflow-hidden w-10 h-10'>
            <img src={Avatar} alt="" />
          </div>
          <form action='' className='bg-rd-brighter border  border-rb flex-grow mr-2 ml-4 rounded-md'>
            <input type="text"
              onFocus={e => {
                e.preventDefault();
                modalContext.setShow(true);
              }}
              className='bg-rd-brighter text-sm p-2 px-3 block w-full rounded-md' placeholder='New post' />
          </form>

        </div>
      </div>
    </div>
  )
}

export default Newpost