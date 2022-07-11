import {React, useEffect} from "react";
import { hotjar } from 'react-hotjar';
import { Map } from "../components/Map";


export function MainMap() {
  const studySpots = [
    {
      "lat": 43.47313806626149, 
      "lng": -80.5403374368897, 
      "title": "E5 SYDE Lounge",
      "avgHumidex": [28.8, 29.55, 27.83],
      "avgLight": [691.45, 1994.5, 2082], 
      "description": "On the 6th floor of E5, the SYDE lounge is a popular room for SYDE students to study, socialize, and play foosball. Windows on 2/4 walls allow for lots of natural light.",
      "graphs": [{img: "Lounge-Humidex.png", description: "Humidex - Click to Expand"}, {img: "Lounge-Light.png", description: "Light - Click to Expand"}],
      "photo": "sydeLounge.png"
    },
    {
      "lat": 43.47307772562945,  
      "lng": -80.54030256817363,
      "title": "E5 6008",
      "avgHumidex": [26.99, 28.83, 28.31],
      "avgLight": [998.91, 1237.6, 1035.2], 
      "description": "In E5, this classroom on the 6th floor is where 3A SYDE students take all their classes during the summer 2022 term, this makes it a key location for the SYDE student body.",
      "graphs": [{img: "6008-Humidex.png", description: "Humidex - Click to Expand"}, {img: "6008-Light.png", description: "Light - Click to Expand"}],
      "photo": "sydeRoom.png"
    },
    {
      "lat": 43.46950349322649, 
      "lng": -80.54157509538742 ,
      "title": "DP Courtyard (Umbrellas)",
      "avgHumidex": [30.82, 43.83, 30.51],
      "avgLight": [13773, 13773, 13773], 
      "description": "Outside of the Dana Porter Library, there is a small courtyard of chairs with some umbrellas where students may choose to study outside. Clearly this is a highly weather dependent location but the data featured is from a sunny summer day.",
      "graphs": [{img: "Umbrellas-Humidex.png", description: "Humidex - Click to Expand"}, {img: "Umbrellas-Light.png", description: "Light - Click to Expand"}],
      "photo": "umbrellas.png"
    },
    {
      "lat": 43.47029914832782, 
      "lng": -80.54092536092635,
      "title": "RCH 209",
      "avgHumidex": [24.64, 25.63, 25.81],
      "avgLight": [701.95, 750.63, 860.8], 
      "description": "In the bottom floor of J.R. Coutts Engineering Lecture Hall, students can find empty classrooms to work in without any distractions or windows.",
      "graphs": [{img: "RCH-Humidex.png", description: "Humidex - Click to Expand"}, {img: "RCH-Light.png", description: "Light - Click to Expand"}],
      "photo": "rchRoom.png"
    },
    {
      "lat": 43.47248434388779,
      "lng":  -80.54226019005233,
      "title": "DC Silent Study",
      "avgHumidex": [27.55, 30.93, 27.29],
      "avgLight": [540.99, 6365.7, 259], 
      "description": "Within the DC Library, students can choose between areas with different levels of noise. The silent study area has large sky lights which illuminate the room but also heat it up.",
      "graphs": [{img: "DC-Humidex.png", description: "Humidex - Click to Expand"}, {img: "DC-Light.png", description: "Light - Click to Expand"}],
      "photo": "dcLibrary.png"
    },
    {
      "lat": 43.47135626330101, 
      "lng": -80.54372532587942,
      "title": "QNC 2501",
      "avgHumidex": [25.15, 25.07, 25.48],
      "avgLight": [445.67, 271.92, 761.77], 
      "description": "Opened in 2012, QNC is one of the newer buildings on campus with excellent climate control. 2501 is an interior room on the second floor meaning it doesn't have any windows.",
      "graphs": [{img: "QNC-Humidex.png", description: "Humidex - Click to Expand"}, {img: "QNC-Light.png", description: "Light - Click to Expand"}],
      "photo": "qnc.png"
    }
  ]

  useEffect(() => {
    hotjar.initialize(3061058, 6);
  }, [])

  return (
    <main className = "App">
      <Map 
        studySpots={studySpots}
      />
    </main>
  );
}
