import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="h-full w-full flex justify-center items-center flex-col select-none">
        <h1
        className='text-xl font-bold'
        >
          Download-Bereich Gianluigi
        </h1>
      
        <Link href={"/download/caloriescalculator-harris-benedict-formula"}
        className='
        bg-blue-500 text-white
        rounded-md
        p-4 mt-4 
        hover:bg-blue-600 transition duration-500 ease-in-out
        max-sm:m-4
        '
        >Kalorienrechner mit Harris Benedict Formel PAL-Faktor</Link>
    </main>
  )
}
