import React from "react"


export default function Card(){
    return(
<div className="max-w-md mx-auto my-8 bg-white shadow-lg rounded-lg border border-gray-200">
  <div className="p-6">
    <h2 className="text-xl font-bold text-gray-800 mb-4">Satellite Information</h2>
    <div className="space-y-2">
      <p className="text-gray-600"><span className="font-semibold">Name:</span> iss</p>
      <p className="text-gray-600"><span className="font-semibold">ID:</span> 25544</p>
      <p className="text-gray-600"><span className="font-semibold">Altitude:</span> 435.36495507641 kilometers</p>
      <p className="text-gray-600"><span className="font-semibold">Latitude:</span> -51.145707034679</p>
      <p className="text-gray-600"><span className="font-semibold">Longitude:</span> -118.89883637135</p>
      <p className="text-gray-600"><span className="font-semibold">Velocity:</span> 27534.427344808 km/h</p>
      <p className="text-gray-600"><span className="font-semibold">Footprint:</span> 4584.8216903284 kilometers</p>
      <p className="text-gray-600"><span className="font-semibold">Day Number:</span> 2460680.3556597</p>
      <p className="text-gray-600"><span className="font-semibold">Solar Latitude:</span> -22.622952711426</p>
      <p className="text-gray-600"><span className="font-semibold">Solar Longitude:</span> 233.26936184195</p>
      <p className="text-gray-600"><span className="font-semibold">Timestamp:</span> 1736022729</p>
      <p className="text-gray-600"><span className="font-semibold">Visibility:</span> daylight</p>
      <p className="text-gray-600"><span className="font-semibold">Units:</span> kilometers</p>
    </div>
  </div>
</div>

    )
}

