import React from "react";
import L from "leaflet";
import { Marker, Popup } from "react-leaflet";
// Need to replace this pin svg t some point
import pinMarker from '../assets/pin.svg'
import { Carousel } from "react-bootstrap";
import classes from './StudySpot.css';

export function StudySpot({position, title}) {
    const icon = new L.Icon({
        iconUrl: pinMarker,
        iconSize: new L.Point(25, 25),
      });
    return (
        <>
            <Marker 
                position={position}
                icon={icon}
            >
                <Popup>
                    { <img class="locationimg"
                        style={{
                            maxWidth: "101%",
                            margin: "-1px",
                        }}
                        src="sampleGraph.png"
                        alt="An example graph"
                    />}

                    <div class="popupwrapper">
                    <h3>{title}</h3>
                    <h6>Average Temperature</h6>
                    <h6>Average Humidex</h6>
                    <p><b>Environmental Description:</b> This is a brief desciption of the study spot and it's popularity and/or it's effect on students studying there.</p>
                    <img
                        style={{
                            maxWidth: "100%",
                        }}
                        src="sampleGraph.png"
                        alt="An example graph"
                    />
                    </div>
                    
                    {/* <Carousel variant="dark">
                        <Carousel.Item>
                            <img
                                style={{
                                    maxWidth: "100%",
                                    padding: "1.5rem",
                                }}
                                src="sampleGraph.png"
                                alt="An example graph"
                            />
                            <Carousel.Caption>
                                <h3>This is the first graph about the location</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                style={{
                                    maxWidth: "100%",
                                    padding: "1.5rem",
                                }}
                                src="sampleGraph.png"
                                alt="An example graph"
                            />
                            <Carousel.Caption>
                                <h3>This is the second graph about the location</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel> */}
                    
                </Popup>
            </Marker>
        </>
    )
}