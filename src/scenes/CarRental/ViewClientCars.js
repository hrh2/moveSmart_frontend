import React from 'react'
import Axios from 'axios'
import CarCard from './ClientCarsCard'

// data

export default function Recommendeds({cars}) {
  // console.log(cars)
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 p-4">
          {cars.map((car) => (
            <CarCard car={car} key={car._id} />
          ))}
    </div>
  )
}
