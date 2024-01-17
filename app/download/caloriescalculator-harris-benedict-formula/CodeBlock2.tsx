import React from 'react'
import CopyClipboard2 from './CopyClipboard2'

type Props = {}

export default function CodeBlock2({}: Props) {
  return (
    <div
          className="
        relative text-left w-full bg-black
         text-white p-4 mt-4 rounded-md select-text 
         selection:marker:"
        >
          <CopyClipboard2/>
          <code>
            <div className="text-[#d7ba7d]">.Onur2&#123;</div>
            <div className="pl-4">
              <span className="text-[#9cdcfe]">display:&nbsp;</span>
              <span className="text-[#ce9178]">flex;</span>
              <br />
              <span className="text-[#9cdcfe]">justify-content:&nbsp;</span>
              <span className="text-[#ce9178]">center;</span>
              <br />

              <span className="text-[#9cdcfe]">gap:&nbsp;</span>
              <span className="text-[#ce9178]">2em;</span>
              <br />



              <div className="text-[#6a9955]">
              &#47;&#42; Kommentar : <br />
                Gap = Abstand zwischen Legende und Rechner <br />
                Abstände je nach Bedarf erhöhen oder verringern <br />
                &#42;&#47;
              </div>
            </div>
            <div className="text-[#d7ba7d]">&#125;</div>
          </code>
        </div>
  )
}