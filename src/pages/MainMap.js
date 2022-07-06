import React from "react";
import { Map } from "../components/Map";


export function MainMap() {
  const studySpots = [
    {
      "lat": 43.47313806626149, 
      "lng": -80.5403374368897, 
      "title": "E5 SYDE Lounge",
      "avgHumidex": [28.8, 29.55, 27.83],
      "avgLight": [691.45, 1994.5, 2082], 
      "description": "On the 6th floor of E5, the SYDE lounge is a popular room for SYDE students to study, socialize, and play foosball.",
      "graphs": [{img: "Lounge-Humidex.png", description: "Humidex - Click to Expand"}, {img: "Lounge-Light.png", description: "Light - Click to Expand"}],
      "photo": "sydeLounge.png"
    },
    {
      "lat": 43.47307772562945,  
      "lng": -80.54030256817363,
      "title": "E7 6008",
      "avgHumidex": [26.99, 28.83, 28.31],
      "avgLight": [998.91, 1237.6, 1035.2], 
      "graphs": [{img: "6008-Humidex.png", description: "Humidex - Click to Expand"}, {img: "6008-Light.png", description: "Light - Click to Expand"}],
      "photo": "sydeRoom.png"
    },
    {
      "lat": 43.46950349322649, 
      "lng": -80.54157509538742 ,
      "title": "DP Courtyard (Umbrellas)",
      "avgHumidex": [30.82, 43.83, 30.51],
      "avgLight": [13773, 13773, 13773], 
      "description": "Outside of the Dana Porter Library, there is a small courtyard of chairs with some umbrellas where students may choose to study outside.",
      "graphs": [{img: "Umbrellas-Humidex.png", description: "Humidex - Click to Expand"}, {img: "Umbrellas-Light.png", description: "Light - Click to Expand"}],
      "photo": "umbrellas.png"
    },
    {
      "lat": 43.47029914832782, 
      "lng": -80.54092536092635,
      "title": "RCH 209",
      "avgHumidex": [24.64, 25.63, 25.81],
      "avgLight": [701.95, 750.63, 860.8], 
      "graphs": [{img: "RCH-Humidex.png", description: "Humidex - Click to Expand"}, {img: "RCH-Light.png", description: "Light - Click to Expand"}],
      "photo": "rchRoom.png"
    },
    {
      "lat": 43.47248434388779,
      "lng":  -80.54226019005233,
      "title": "DC Silent Study",
      "avgHumidex": [22, 30.93, 27.29], //Need to replacemorning values
      "avgLight": [400, 6365.7, 259], 
      "graphs": [{img: "DC-Humidex.png", description: "Humidex - Click to Expand"}, {img: "DC-Light.png", description: "Light - Click to Expand"}],
      "photo": "dcLibrary.png"
    },
    {
      "lat": 43.47135626330101, 
      "lng": -80.54372532587942,
      "title": "QNC 2501",
      "avgHumidex": [25.15, 25.07, 25.48],
      "avgLight": [445.67, 271.92, 761.77], 
      "graphs": [{img: "QNC-Humidex.png", description: "Humidex - Click to Expand"}, {img: "QNC-Light.png", description: "Light - Click to Expand"}],
      "photo": "qnc.png"
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
