import React from "react";
import L from "leaflet";
import { MapContainer, TileLayer, ZoomControl, AttributionControl} from "react-leaflet";
import { StudySpot } from "./StudySpot";
import { Legend } from "./Legend";

export function Map({studySpots}) {
    const zoom = 17.2;
    const minZoom = 15;
    const maxZoom = 18;
    const zoomSnap = 0;
    const zoomDelta = 0.25;
    const currentLocation = { lat: 43.471, lng: -80.543 };
    const mapBounds = L.latLngBounds(L.latLng(43.46350530353528, -80.55339002975062), L.latLng(43.48012813821771, -80.53163339056768))
    const mapBoxStyleUrl = "https://api.mapbox.com/styles/v1/cormacc/cl4pvmkgk000u15rpva8wyi39/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY29ybWFjYyIsImEiOiJjbDRwdWQxcXIwNXJxM2NwbG9zcTg2cHkyIn0.yAYe13rux3sEtmH9ucEEpw"

    //TODO improve the colours up here
    const legendColours = ["purple", "cyan", "green", "yellow", "orange", "red"]
    const humidexRanges = [20, 25, 30, 35]

    const getMarkerColour = (value) => {
        if (value === undefined) 
            return "gray"
        for (const [index, num] of humidexRanges.entries()) {
            if (value < num) {
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
                <Legend
                    title="Humidex Range"
                    colours={legendColours}
                    rangeTitles={["Less than 20", "20-25", "25-30", "30-35", "More than 35"]}
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