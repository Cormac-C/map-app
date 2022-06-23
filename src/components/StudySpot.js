import React from "react";
import L from "leaflet";
import { Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import pinMarker from '../assets/pin.svg'
// Need to replace this pin svg t some point

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
                    {title} <br /> Description.
                </Popup>
            </Marker>
        </>
    )
}