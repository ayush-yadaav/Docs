import React from 'react'
import { FaDownload, FaFileInvoice } from 'react-icons/fa'
import { IoIosClose } from 'react-icons/io'
import { motion } from "motion/react"

function Card({data, reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragTransition={{bounceStiffness:100, bounceDamping:30}} className=' relative flex-shrink-0  overflow-hidden w-60 h-72 rounded-[30px] bg-zinc-900/90 py-10 px-5 text-white'>

<FaFileInvoice />
<p className='text-xl mt-5 font-semibold leading-tight '>{data.des}</p>
<div className=' footer absolute bottom-0 w-full h-20   left-0'>
    <div className='flex items-center justify-between mb-3 px-8'>
        <h3>{data.filesize}</h3>
        <span>
            {data.close ? <IoIosClose /> : <FaDownload /> }
        </span>
        
    </div>
   {data.tagdetails.isOpen && (
     <div className={`w-full py-3  flex items-center justify-center`}>
     <h3 className='text-md'>Download now</h3>
 </div>
   )}
</div>
    </motion.div>
  )
}

export default Card