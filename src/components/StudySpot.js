import React, { useState } from "react";
import L from "leaflet";
import { Marker, Popup } from "react-leaflet";
import { Carousel, Image, Modal } from "react-bootstrap";
import { hotjar } from 'react-hotjar';
import './StudySpot.css';

export function StudySpot({position, title, avgHumidex, avgLight, description, graphs, photo, colour, time}) {
    const timeOptions = ['Morning', 'Afternoon',  'Evening'];

    const [showPopup, setShowPopup] = useState(false);
    const [popupGraph, setPopupGraph] = useState();

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
    const handleOpenGraph = (graph) => {
        hotjar.event('open-graph');
        setShowPopup(true);
        setPopupGraph(graph);
    }
    const handleClose = () => setShowPopup(false);

    return (
        <>
            <Marker 
                position={position}
                icon={icon}
                eventHandlers={{
                    click: (e) => {
                      hotjar.event('open-study-spot');
                    },
                  }}
            >
                <Popup>
                    {photo && photo.length > 0 ? 
                        <Image
                            src={photo}
                            alt="A photo of the study spot"
                            style= {{
                                borderRadius: "12px 12px 0 0",
                                width: "101%",
                                margin: "-1px"
                            }}
                        />
                        :
                        null
                    }
                    <div class="popupwrapper">
                        <h3>{title} ({timeOptions[time]})</h3>
                        <h6>Average Humidex: {avgHumidex[time]}</h6>
                        <h6>Average Light: {avgLight[time]}</h6>
                        <p><b>Environmental Description:</b> {description}</p>
                        {graphs && graphs.length > 0 ?
                            <div>
                                <p><b>Graph Data: </b> </p>
                                <Carousel 
                                    variant="dark"
                                    interval={null}
                                >
                                    {
                                        graphs && graphs.map((graph) => {
                                            return (
                                                <Carousel.Item
                                                    onClick={() => handleOpenGraph(graph)}
                                                >
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
                     </div>
                </Popup>
            </Marker>
            <Modal show={showPopup} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{popupGraph && popupGraph.description}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image
                        fluid
                        src={popupGraph && popupGraph.img}
                    />
                </Modal.Body>
            </Modal>
        </>
    )
}