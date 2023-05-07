import { Inter } from 'next/font/google'
// import React, { useState, useEffect } from 'react'
import { useLondon } from '@/lib/hook';

import useSWR from 'swr';

const inter = Inter({ subsets: ['latin'] })


export default function Home() {

const {data, isLoading, isError } = useLondon()

// const [londonWeather, setLondonWeather] = useState(null)
function Loader() {
  return <p>Loading...</p>
}

console.log(data);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 bg-sky-500 ${inter.className}`}
    >
      <div className='w-1/3 flex flex-col justify-center'>
        <h1 className='text-3xl text-white font-bold uppercase text-center h-20 mb-8'>Weather.app</h1>
        <input type="text" className='bg-white rounded-full h-12 px-4 focus-visible:ring-0 ring-0'/>
      </div>
      <div>
        {!isLoading ? <Loader /> : 'something'}
      </div>
    </main>
  )
}
