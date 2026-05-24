import React, {useRef } from 'react'
import Card from './Card'


export default function Forground() {

  const data = [
    {
      desc: " This is Docs An AI basied not taking application, with some very cool design.",
      filesize: ".9mb",
      close: true,
      tag : {isOpen: true, tagTitle: "Download Now", tagColor: "blue"}
    },

    {
      desc: " This is Docs An AI basied not taking application, with some very cool design.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "read more-", tagColor: "zinc" }
    },

    {
      desc: " This is Docs An AI basied not taking application, with some very cool design.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: false, tagTitle: "read more-", tagColor: "blue" }
    },
  ]


  const ref = useRef(null)

    return (
      <>
        <div  ref={ref} className='fixed top-0 left-0 w-full h-full p-5 gap-8 flex flex-wrap    z-10'>
          
          {data.map((item, index) => (
            <Card data={item} reff={ref} />
          ))}
          
          
            </div>
        </>
  )
}
