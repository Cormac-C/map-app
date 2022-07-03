import React from "react";
import L from "leaflet";
import { Row, Col } from "react-bootstrap";

export function Legend({title, colours, rangeTitles}) {
    return (
        <div className='leaflet-top leaflet-left'>
            <div 
                className="leaflet-control leaflet-bar"
                style={{
                    backgroundColor: "white",
                    maxWidth: "15rem",
                }}
            >
                <Row
                    style={{
                        paddingLeft: "1.5rem",
                        paddingRight: "1.5rem"
                    }}
                >
                    <h5>
                        {title}
                    </h5>
                    {rangeTitles && rangeTitles.map((range, index) => {
                        return (
                            <Row
                                className="justify-content-start"
                            >
                                <Col md="auto">
                                    <div
                                        style={{
                                            float: "left",
                                            height: "20px",
                                            width: "20px",
                                            marginBottom: "15px",
                                            border: "1px solid black",
                                            clear: "both",
                                            backgroundColor: colours[index],
                                        }}
                                    />
                                </Col>
                                <Col
                                    style={{
                                        textAlign:"start"
                                    }}
                                >
                                    - {range}
                                </Col>
                            </Row>
                        )
                    })}
                </Row>
            </div>
        </div>
    )
}