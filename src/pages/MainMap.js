import React from "react";
import { Map } from "../components/Map";


export function MainMap() {
  const studySpots = [
    {
      "lat": 43.47313806626149, 
      "lng": -80.5403374368897, 
      "title": "E7 SYDE Lounge"
    },
    {
      "lat": 43.47307772562945,  
      "lng": -80.54030256817363,
      "title": "E7 6008"
    },
    {
      "lat": 43.46950349322649, 
      "lng": -80.54157509538742 ,
      "title": "DP Library Umbrellas",
      "avgHumidex": 25, //Fake data, needs t be replaced
      "avgLight": 300, 
      "description": "Outside of the Dana Porter Library, there is a small courtyard of chairs with some umbrellas where students may choose to study outside",
      "graphs": ["sampleGraph.png"],
      "photo": "umbrellas.jpg"
    },
    {
      "lat": 43.47029914832782, 
      "lng": -80.54092536092635,
      "title": "RCH 209"
    },
    {
      "lat": 43.47248434388779,
      "lng":  -80.54226019005233,
      "title": "DC Silent Study"
    },
    {
      "lat": 43.47135626330101, 
      "lng": -80.54372532587942,
      "title": "QNC 2501"
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
