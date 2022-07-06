import React from "react";
import { Row, Col } from "react-bootstrap";
import './Legend.css';

export function Legend({title, colours, rangeTitles}) {
    return (
        <div className='leaflet-top leaflet-left'>
            <div 
                className="leaflet-control leaflet-bar"
                style={{
                    backgroundColor: "white",
                    maxWidth: "15rem",
                    border: "4px solid black",
                    borderRadius: "0",
                }}
            >
                <Row
                    style={{
                        paddingLeft: "1.5rem",
                        paddingRight: "1.5rem",
                    }}
                >
                    <h5
                    style={{
                        margin: "14px 0",
                    }}
                    >
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
                                            border: "3px solid black",
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