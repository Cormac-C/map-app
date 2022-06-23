import React from "react";
import "leaflet/dist/leaflet.css";
import { Map } from "../components/Map";


export function MainMap() {
  const studySpots = [
    {
      "lat": 43.471,
      "lng": -80.543,
      "title": "Test"
    },
    {
      "lat": 43.472884600000015,
      "lng": -80.54022978465609,
      "title": "E7 6008"
    }
  ]
  return (
    <div className = "App">
      <Map 
        studySpots={studySpots}
      />
    </div>
  );
}
