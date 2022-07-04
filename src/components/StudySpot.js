import React from "react";
import L from "leaflet";
import { Marker, Popup } from "react-leaflet";
import { Carousel, Image } from "react-bootstrap";
import './StudySpot.css';

export function StudySpot({position, title, avgHumidex, avgLight, description, graphs, photo, colour}) {
    const markerHtml = `
        background-color: ${colour};
        width: 1.25rem;
        height: 1.25rem;
        display: block;
        left: -0.25rem;
        top: -0.25rem;
        position: relative;
        border-radius: 1rem;
        border: 1px solid #FFFFFF`
    const icon = new L.divIcon({
        html: `<span style="${markerHtml}" />`
    })
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
                    <h3>{title}</h3>
                    <h6>Average Temperature: {avgHumidex}</h6>
                    <h6>Average Humidex: {avgLight}</h6>
                    <p><b>Environmental Description:</b> {description}</p>
                    {graphs && graphs.length > 0 ?
                        <div>
                            <p><b>Graph Data: </b> </p>
                            <Carousel variant="dark">
                                {
                                    graphs && graphs.map((graph) => {
                                        return (
                                            <Carousel.Item>
                                                <Image
                                                    fluid
                                                    src={graph.img}
                                                    style= {{
                                                        marginBottom: "4.5rem"
                                                    }}
                                                />
                                                <Carousel.Caption>
                                                    {graph.description}
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                        )
                                    })
                                }
                            </Carousel>
                        </div>
                    : 
                        null
                    }
                </Popup>
            </Marker>
        </>
    )
}