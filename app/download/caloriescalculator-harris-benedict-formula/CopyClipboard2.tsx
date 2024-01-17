'use client'
import React from 'react'
import { FaClipboard } from 'react-icons/fa'
import { useCopyToClipboard } from 'usehooks-ts'

type Props = {}

export default function CopyClipboard2({}: Props) {
    const [value, copy] = useCopyToClipboard()
  return (
    <button className="text-white text-2xl absolute right-4
    select-none
    active:scale-75 active:text-slate-300 transition-all duration-500 ease-in-out
   
    "   
      onClick={()=>{
        copy(`.Onur2{
            display: flex;
            justify-content: center;
            gap: 2em;
            /* Kommentar :
            Gap = Abstand zwischen Legende und Rechner
            Abstände je nach Bedarf erhöhen oder verringern
            */
            }
            `)
    }}
    >
        <FaClipboard/>
    </button>
  )
}