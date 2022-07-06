import React, { useState } from "react";
import L from "leaflet";
import { MapContainer, TileLayer, ZoomControl, AttributionControl} from "react-leaflet";
import { StudySpot } from "./StudySpot";
import { Legend } from "./Legend";
import { TimeSelector } from "./TimeSelector"

export function Map({studySpots}) {
    const zoom = 17.2;
    const minZoom = 15;
    const maxZoom = 18;
    const zoomSnap = 0;
    const zoomDelta = 0.25;
    const currentLocation = { lat: 43.471, lng: -80.543 };
    const mapBounds = L.latLngBounds(L.latLng(43.46350530353528, -80.55339002975062), L.latLng(43.48012813821771, -80.53163339056768))
    const mapBoxStyleUrl = "https://api.mapbox.com/styles/v1/cormacc/cl59o8fic000e14ru60fhois6/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY29ybWFjYyIsImEiOiJjbDRwdWQxcXIwNXJxM2NwbG9zcTg2cHkyIn0.yAYe13rux3sEtmH9ucEEpw"

    const humidexRanges = [20, 23, 26, 29, 32]
    const legendColours = ["#B556E1", "#56C0E1", "#5AECAF", "#F3E13E", "#FF8F35", "#E74C54"]

    const [time, setTime] = useState("0")

    const getMarkerColour = (values) => {
        if (values === undefined) 
            return "gray"
        for (const [index, num] of humidexRanges.entries()) {
            if (values[time] < num) {
                return legendColours[index]
            }
        }
        return legendColours[humidexRanges.length]
    }

    return (
        <>
            <MapContainer
                center={currentLocation}
                zoom={zoom}
                minZoom={minZoom}
                maxZoom={maxZoom}
                maxBounds={mapBounds}
                zoomSnap={zoomSnap}
                zoomDelta={zoomDelta}
                zoomControl={false}
                attributionControl={false}
                style = {{
                    height: "100vh",
                    width: "100vw",
                }}
            >
                <TileLayer
                    url={mapBoxStyleUrl}
                />
                <nav>
                    <ZoomControl position="bottomleft" />
                </nav>
                <AttributionControl position="bottomright" />
                <TimeSelector
                    time={time}
                    setTime={setTime}
                />
                <Legend
                    title="Humidex Range"
                    colours={legendColours}
                    rangeTitles={["Less than 20", "20-23", "23-26", "26-29", "29-32", "More than 32"]}
                />
                {
                    studySpots && studySpots.map((spot) => {
                        if (spot){
                            return (
                                <StudySpot
                                    position = {spot && spot.lat && spot.lng ? [spot.lat, spot.lng] : [0 , 0]}
                                    title = {spot.title ?? ""}
                                    avgHumidex = {spot.avgHumidex ?? -1}
                                    avgLight = {spot.avgLight ?? -1}
                                    description = {spot.description ?? ""}
                                    graphs = {spot.graphs ?? []}
                                    photo = {spot.photo ?? ""}
                                    colour = {getMarkerColour(spot.avgHumidex)}
                                    time={time}
                                />
                            );
                        } else {
                            return null;
                        }
                    })
                }
            </MapContainer>
        </>
    )
}