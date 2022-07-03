import React from "react";
import L from "leaflet";
import { Marker, Popup } from "react-leaflet";
// Need to replace this pin svg t some point
import pinMarker from '../assets/pin.svg'
import { Carousel, Image } from "react-bootstrap";

export function StudySpot({position, title, avgHumidex, avgLight, description, graphs, photo}) {
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
                    {photo && photo.length > 0 ? 
                        <Image 
                            src={photo}
                            alt="A photo of the study spot"
                            fluid
                        />
                        :
                        null
                    }
                    
                    <h5>{title}</h5>
                    <div><b>Average Humidex: </b> {avgHumidex}</div>
                    <div><b>Average Light Level: </b> {avgLight}</div>
                    <br/>
                    <div>
                        <b>Environmental Description: </b>
                        <br/>
                        {description}
                    </div>
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