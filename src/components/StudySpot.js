import React from "react";
import L from "leaflet";
import { Marker, Popup } from "react-leaflet";
import { Carousel, Image } from "react-bootstrap";

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
                    
                    <h5>{title}</h5>
                    <div><b>Average Humidex: </b> {avgHumidex}</div>
                    <div><b>Average Light Level: </b> {avgLight}</div>
                    <br/>
                    <div>
                        <b>Environmental Description: </b>
                        <br/>
                        {description}
                    </div>
                    <br/>
                    {graphs && graphs.length > 0 ?
                        <div>
                            <b>Graph Data: </b>
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