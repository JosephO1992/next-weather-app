import { Inter } from 'next/font/google'
// import React, { useState, useEffect } from 'react'
import { useEffect, useState } from 'react';
import { useLocationSearch } from '@/lib/hook';
import Loader from '@/components/Loader';
import ErrorMessage from '@/components/ErrorMessage';
import Forecast from '@/components/Forecast';
import { dummyData } from '../../dummyData';
import { fetcher } from '@/lib/fetcher';


import useSWR from 'swr';

const inter = Inter({ subsets: ['latin'] })


export default function Home() {

const [location, setLocation] = useState('London');
const [forecastData, setForecastData] = useState(null)
const [isLoading, setIsLoading] = useState(false)
const [isError, setIsError] = useState(false)

async function getLocation() {
  const locationArray = await fetch(`${process.env.NEXT_PUBLIC_API_URI_LOCATIONS}cities/search?apikey=${process.env.NEXT_PUBLIC_API_KEY}&q=${location}`, {
    'method': 'GET',
  }).then(response => response.json())

  getForecastData(locationArray[0].Key)
}

async function getForecastData(locationKey:number) {
  const data =  await fetch(`${process.env.NEXT_PUBLIC_API_URI_FORECAST}/daily/1day/${locationKey}?apikey=${process.env.NEXT_PUBLIC_API_KEY}`).then(response => response.json());
  

  setForecastData(data)
  setIsLoading(false)
}

useEffect(() => {

  setIsLoading(true)

  getLocation()
}, [])



// const data = dummyData
// const isError = false
// const isLoading = false

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 bg-sky-500 ${inter.className}`}
    >
      <div className='w-1/3 flex flex-col justify-center mb-8'>
        <h1 className='text-3xl text-white font-bold uppercase text-center h-20 mb-8'>Weather.app</h1>
        <input type="text" className='bg-white rounded-full h-12 px-4 focus-visible:ring-0 ring-0'/>
      </div>
      <div>
        {isLoading ? <Loader /> 
          : isError ? <ErrorMessage /> 
          : forecastData ? <Forecast data={forecastData}/> 
          : 'something'}
       
      </div>
    </main>
  )
}
