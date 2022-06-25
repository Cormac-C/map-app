import React from "react";
import { MapContainer, TileLayer, ZoomControl, AttributionControl} from "react-leaflet";
import { StudySpot } from "./StudySpot";

export function Map({studySpots}) {
    const zoom = 16.5;
    const minZoom = 15;
    const maxZoom = 18;
    const zoomSnap = 0;
    const zoomDelta = 0.25;
    const currentLocation = { lat: 43.471, lng: -80.543 };
    const mapBoxStyleUrl = "https://api.mapbox.com/styles/v1/cormacc/cl4pvmkgk000u15rpva8wyi39/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY29ybWFjYyIsImEiOiJjbDRwdWQxcXIwNXJxM2NwbG9zcTg2cHkyIn0.yAYe13rux3sEtmH9ucEEpw"

    return (
        <>
            <MapContainer
                center={currentLocation}
                zoom={zoom}
                minZoom={minZoom}
                maxZoom={maxZoom}
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
                <ZoomControl position="bottomleft" />
                <AttributionControl position="bottomright" />
                {
                    studySpots && studySpots.map((spot) => {
                        if (spot){
                            return (
                                <StudySpot
                                    position = {spot && spot.lat && spot.lng ? [spot.lat, spot.lng] : [0 , 0]}
                                    title = {spot ? spot.title : ""}
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