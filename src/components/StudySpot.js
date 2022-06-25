import React from "react";
import L from "leaflet";
import { Marker, Popup } from "react-leaflet";
// Need to replace this pin svg t some point
import pinMarker from '../assets/pin.svg'
import { Carousel } from "react-bootstrap";

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
                    <h3>{title}</h3>
                    <p>This is a brief desciption of the study spot. It might contain some info about how many people study here.</p>
                    <Carousel variant="dark">
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
                    </Carousel>
                    
                </Popup>
            </Marker>
        </>
    )
}