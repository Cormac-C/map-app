import React from "react";
import { Map } from "../components/Map";


export function MainMap() {
  const studySpots = [
    {
      "lat": 43.47146831296268, 
      "lng": -80.54335554357826,
      "title": "Rock Garden"
    },
    {
      "lat": 43.4728428044162, 
      "lng": -80.54011120174852,
      "title": "E7 6008 - AC"
    }
  ]
  return (
    <main className = "App">
      <Map 
        studySpots={studySpots}
      />
    </main>
  );
}
