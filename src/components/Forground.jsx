import React from 'react'
import Card from './Card'

export default function Forground() {

  const data = [
    {
      desc: " This is Docs An AI basied not taking application, with some very cool design.",
      filesize: ".9mb",
      close: true,
      tag : {isOpen: false, tagTitle: "Download Now", tagColor: "green"}
    },
  ]

    return (
      <>
        <div className='fixed top-0 left-0 w-full h-full p-5    z-10'>
          
          {data.map((item, index) => (
            <Card data={item} />
          ))}
          
          
            </div>
        </>
  )
}
