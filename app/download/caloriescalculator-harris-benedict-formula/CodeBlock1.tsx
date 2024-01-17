import React from 'react'
import CopyClipboard from './CopyClipboard'

type Props = {}

export default function CodeBlock1({}: Props) {
  return (
    <div
          className="
        relative text-left w-full bg-black
         text-white p-4 mt-4 rounded-md select-text 
         selection:marker:"
        >
          <CopyClipboard />
          <code>
            <div className="text-[#d7ba7d]">.Onur&#123;</div>
            <div className="pl-4">
              <span className="text-[#9cdcfe]">display:&nbsp;</span>
              <span className="text-[#ce9178]">flex;</span>
              <br />
              <span className="text-[#9cdcfe]">justify-content:&nbsp;</span>
              <span className="text-[#ce9178]">center;</span>
              <br />

              <span className="text-[#9cdcfe]">align-items:&nbsp;</span>
              <span className="text-[#ce9178]">center;</span>
              <br />

              <span className="text-[#9cdcfe]">flex-direction:&nbsp;</span>
              <span className="text-[#ce9178]">column;</span>
              <br />

              <div className="text-[#6a9955]">
              &#47;&#42; Kommentar : <br />
                Top,Right,Bottom,Left <br />
                Padding = Abstand nach innen <br />
                Abstände je nach Bedarf erhöhen oder verringern <br />
                &#42;&#47;
              </div>

              <span className="text-[#9cdcfe]">padding:&nbsp;</span>
              <span className="text-[#ce9178]">2em 0em 2em 0em;</span>
              <br />
            </div>
            <div className="text-[#d7ba7d]">&#125;</div>
          </code>
        </div>
  )
}