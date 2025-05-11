import React, { useRef } from 'react'
import Card from './Card'

function Forground() {

const ref = useRef(null);
    const data = [
        {
            des: "hey i do intership prepration on this weeakend", filesize: ".8mb", close: true, tagdetails: { isOpen: true, tagTitle: "downlaod now", tagColor: "green" }
        },
        {
            des: "hey i do intership prepration on this weeakend", filesize: ".8mb", close: true, tagdetails: { isOpen: true, tagTitle: "downlaod now", tagColor: "green" }
        },
        {
            des: "hey i do intership prepration on this weeakend", filesize: ".8mb", close: true, tagdetails: { isOpen: true, tagTitle: "downlaod now", tagColor: "green" }
        },
    ]

    return (

        <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap'>
            {data.map((item,index)=>(
                <Card data = {item} reference = {ref} />
            ))}
        </div>

    )
}

export default Forground