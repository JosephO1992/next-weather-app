import Image from 'next/image'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })
console.log(`hello ${process.env.API_KEY}`)

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 bg-sky-500 ${inter.className}`}
    >
      <div className='w-1/3 flex flex-col justify-center'>
        <h1 className='text-3xl text-white font-bold uppercase text-center h-20 mb-8'>Weather.app</h1>
        <input type="text" className='bg-white rounded-full h-12 px-4 focus-visible:ring-0 ring-0'/>
      </div>
    </main>
  )
}
