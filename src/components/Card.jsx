import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { motion } from "motion/react"




export default function Card({data, reff}) {
  return (
      <>
          <motion.div drag dragConstraints={reff} className=' relative  overflow-hidden w-52 h-65 py-10 px-5  text-white  rounded-4xl  bg-zinc-900/90'>
              <FaRegFileAlt />
              <p className='mt-3  text-[15px] font-semibold leading-tight'>{data.desc}</p>
              <div className='footer absolute w-full left-0 bottom-0 '>
                  
                  <div className='flex justify-between items-center px-8 text-sm mb-3'>  
                      <h5>{data.filesize}</h5>
                      <span className='text-l bg-zinc-600 rounded-full p-[4px]'>
                          {data.close ? <IoClose /> : <FaDownload />}

                      </span>
                  </div>

                  {data.tag.isOpen ? (
                      <div className={ `tag left-0 w-full py-3 flex justify-center items-center bg-${data.tag.tagColor}-600`}>
                          <h3 className='font-semibold text-md'>{data.tag.tagTitle}</h3>
                      </div>
                  ) : null}
                  
                  
              </div>

          </motion.div>

      </>
  )
}
