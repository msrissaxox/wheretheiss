//allows me to use event handlers
'use client';
import React from "react";

 export default function Button(){
    function handleClick(){
        fetch('https://api.wheretheiss.at/v1/satellites/25544')
        .then(response=> response.json())
        .then(data=> console.log(data))
        .catch(error => console.error('Error:', error ))
        }

return(
    <div className="flex items-center justify-center pt-8">
<button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  Click to Find the ISS
</button>
</div>
 )}
