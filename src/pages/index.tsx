import { Inter } from 'next/font/google'
// import React, { useState, useEffect } from 'react'
import { useLondon } from '@/lib/hook';
import Loader from '@/components/Loader';
import ErrorMessage from '@/components/ErrorMessage';
import Forecast from '@/components/Forecast';
import { dummyData } from '../../dummyData';


import useSWR from 'swr';

const inter = Inter({ subsets: ['latin'] })


export default function Home() {

// const {data, isLoading, isError } = useLondon()

const data = dummyData
const isError = false
const isLoading = false

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
        {isLoading ? <Loader /> : isError ? <ErrorMessage /> : <Forecast data={data}/>}
      </div>
    </main>
  )
}
