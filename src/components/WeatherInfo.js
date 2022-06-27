import React from "react";
import L from "leaflet";
import { Row } from "react-bootstrap";

export function WeatherInfo({position, title}) {
    return (
        <div className='leaflet-top leaflet-left'>
            <div 
                className="leaflet-control leaflet-bar"
                style={{
                    backgroundColor: "white",
                    maxWidth: "15rem",
                }}
            >
                <h3>
                    Weather &#127780;
                </h3>
                <Row
                    style={{
                        textAlign: "left"
                    }}
                >
                    <p>
                        Add in outside weather information for the date that we collect data.
                        Maybe add in an icon to show the weather.
                        Here's room for a source of the weather data: 
                    </p>
                    <a 
                        href="https://www.accuweather.com/en/ca/waterloo/n2j/current-weather/55073" 
                        target="_blank"
                        style={{
                            color: "#0d6efd",
                            backgroundColor: "transparent",
                        }}
                    >
                        Source
                    </a>
                </Row>
            </div>
        </div>
    )
}