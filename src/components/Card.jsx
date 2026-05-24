import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";


export default function Card() {
  return (
      <>
          <div className=' relative overflow-hidden w-52 h-65 py-10 px-5 text-white  rounded-4xl  bg-zinc-900/90'>
              <FaRegFileAlt />
              <p className='mt-3  text-[15px] font-semibold leading-tight'>Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit.</p>
              <div className='footer absolute w-60 left-0 bottom-0 h-13 bg-blue-100'>
                  
              </div>

          </div>

      </>
  )
}
