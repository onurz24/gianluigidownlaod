'use client'
import React from 'react'
import { FaClipboard } from 'react-icons/fa'
import { useCopyToClipboard } from 'usehooks-ts'

type Props = {}

export default function CopyClipboard({}: Props) {
    const [value, copy] = useCopyToClipboard()
  return (
    <button className="text-white text-2xl absolute right-4
    select-none
    active:scale-75 active:text-slate-300 transition-all duration-500 ease-in-out
   
    "   
      onClick={()=>{
        copy(`.Onur{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            /* Kommentar :
            Top,Right,Bottom,Left
            Padding = Abstand nach innen
            Abstände je nach Bedarf erhöhen oder verringern
            */
            padding: 2em 0em 2em 0em;
            }
            `)
    }}
    >
        <FaClipboard/>
    </button>
  )
}