import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";



export default function Card() {
  return (
      <>
          <div className=' relative overflow-hidden w-52 h-65 py-10 px-5 text-white  rounded-4xl  bg-zinc-900/90'>
              <FaRegFileAlt />
              <p className='mt-3  text-[15px] font-semibold leading-tight'>Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit.</p>
              <div className='footer absolute w-full left-0 bottom-0 '>
                  
                  <div className='flex justify-between items-center px-8 text-sm mb-3'>  
                      <h5>.4mb</h5>
                      <FaDownload/>
                  </div>
                  <div className='tag left-0 w-full py-3 flex justify-center items-center bg-green-600'>
                      <h3 className='font-semibold text-md'>Download Now</h3>
                  </div>
                  
              </div>

          </div>

      </>
  )
}
