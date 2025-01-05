//allows me to use event handlers
"use client";
import React, { useState, useEffect } from "react";

export default function Button() {
  const [newData, setData] = useState("");

  function handleClick() {
    fetch("https://api.wheretheiss.at/v1/satellites/25544")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);

        //do something with data here

      })
      .catch((error) => console.error("Error:", error));
  }

  useEffect(() => {
    console.log("i was rendered");
  });

  return (
    <div>
    <div className="flex items-center justify-center pt-8">
      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Click to Find the ISS
      </button>
    </div>

{newData && (
    <div className="max-w-md mx-auto my-8 bg-white shadow-lg rounded-lg border border-gray-200">
    <div className="p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Satellite Information
      </h2>
      <div className="space-y-2">
        <p className="text-gray-600">
          <span className="font-semibold">Name:</span> {newData.name}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">ID:</span> 25544
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Altitude:</span>{" "}
          {newData.altitude} kilometers
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Latitude:</span>{" "}
          {newData.latitude}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Longitude:</span>{" "}
          {newData.longitude}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Velocity:</span>{" "}
          {newData.velocity} km/h
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Visibility:</span>{" "}
          {newData.visibility}
        </p>
      </div>
    </div>
  </div>
  )}
  </div>
  )
};
