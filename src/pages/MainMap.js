import React from "react";
import { Map } from "../components/Map";


export function MainMap() {
  const studySpots = [
    {
      "lat": 43.4728428044162, 
      "lng": -80.54011120174852,
      "title": "E7 6008 + SYDE Lounge"
    },
    {
      "lat": 43.47029566965135, 
      "lng": -80.54070467620743,
      "title": "RCH"
    },
    {
      "lat": 43.469707, 
      "lng": -80.541648,
      "title": "DP Outdoor Lounge"
    },
    {
      "lat": 43.4731239265899,  
      "lng": -80.54160413506916,
      "title": "DC Library"
    },
    {
      "lat": 43.51829246289879, 
      "lng": -80.53948146497046,
      "title": "QNC 2501"
    },
  ]
  return (
    <main className = "App">
      <Map 
        studySpots={studySpots}
      />
    </main>
  );
}
