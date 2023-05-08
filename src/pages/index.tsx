import { Inter } from 'next/font/google'
import { useDeferredValue, useEffect, useState, Suspense } from 'react';
import ErrorMessage from '@/components/ErrorMessage';
import Forecast from '@/components/Forecast';

const inter = Inter({ subsets: ['latin'] })


export default function Home() {

const [location, setLocation] = useState('');
const deferredLocation = useDeferredValue(location)
const [forecastData, setForecastData] = useState(null)
const [isLoading, setIsLoading] = useState(false)
const [isError, setIsError] = useState(false)
const [errorMessage, setErrorMessage] = useState('')
const [forecastQuantity, setForecastQuantity] = useState('1day')

async function getLocation() {
  let locationToSearch = location;
  setIsError(false)
  setErrorMessage('')

  if(!location) {
    locationToSearch = 'London'
  }
  try {
    const locationArray = await fetch(`${process.env.NEXT_PUBLIC_API_URI_LOCATIONS}cities/search?apikey=${process.env.NEXT_PUBLIC_API_KEY}&q=${locationToSearch}`, {
      'method': 'GET',
    }).then(response => {
      if(response.ok) {
        return response.json()
      } else {
        setIsError(true);
        setErrorMessage('Error getting the location')
      }
    })
  
    if(!locationArray.length) {
      setIsLoading(false)
      setIsError(true)
      setErrorMessage('There were no results returned from your query, try something else')
      return
    }
  
    getForecastData(locationArray[0].Key)
    
  } catch (error) {
    setIsError(true);
    setErrorMessage('Error getting the location')
  }
  
}

async function getForecastData(locationKey:number) {
  const data =  await fetch(`${process.env.NEXT_PUBLIC_API_URI_FORECAST}daily/${forecastQuantity}/${locationKey}?apikey=${process.env.NEXT_PUBLIC_API_KEY}`).then(response => response.json());
  

  setForecastData(data)
  setIsLoading(false)
}

useEffect(() => {

  setIsLoading(true)

  getLocation()
}, [deferredLocation, forecastQuantity])


  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 bg-sky-500 ${inter.className}`}
    >
      <div className='w-1/3 flex flex-col justify-center mb-8'>
        <h1 className='text-3xl text-white font-bold uppercase text-center h-20 mb-8'>Weather.app</h1>
        <input type="text" className='bg-white rounded-lg h-12 px-4 focus-visible:ring-0 ring-0' value={location} onChange={e => setLocation(e.target.value)}/>
      </div>
      <div className='mb-8'>
      <button onClick={() => setForecastQuantity('1day')} className={`w-32 h-16 bg-white rounded-l-lg border-r-2 border-slate-800 ${forecastQuantity === "1day" ? "bg-slate-800 text-white" : ""}`}>Daily Forecast</button>
      <button onClick={() => setForecastQuantity('5day')} className={`w-32 h-16 bg-white rounded-r-lg ${forecastQuantity === "5day" ? "bg-slate-800 text-white" : ""}`}>5 Day Forecast</button>
      </div>
      <Suspense fallback={<h2>Loading...</h2>}>
        {isError ? <ErrorMessage message={errorMessage}/> 
        : forecastData ? <Forecast data={forecastData} location={deferredLocation}/> 
        : <h2>Something has gone wrong here...</h2>}
      </Suspense>
    </main>
  )
}
