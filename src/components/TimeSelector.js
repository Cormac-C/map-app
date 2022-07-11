import React from "react";
import { Row, ButtonGroup, ToggleButton } from "react-bootstrap";
import { hotjar } from 'react-hotjar';

export function TimeSelector({time, setTime}) {
    const timeOptions = [
        { name: 'Morning', value: '0' },
        { name: 'Afternoon', value: '1' },
        { name: 'Evening', value: '2' },
      ];
    return (
        <div className='leaflet-top leaflet-right'>
            <div 
                className="leaflet-control leaflet-bar"
                style={{
                    backgroundColor: "white",
                }}
            >
                <Row
                    style={{
                        paddingBottom: "0px",
                        paddingRight: "10px"
                    }}   
                >
                    <ButtonGroup>
                        {timeOptions.map((radio, idx) => (
                            <ToggleButton
                                key={idx}
                                id={`radio-${idx}`}
                                type="radio"
                                variant={"outline-primary"}
                                name="radio"
                                value={radio.value}
                                checked={radio.value === time}
                                onChange={(e) => {
                                    console.log(e.currentTarget.value)
                                    hotjar.event('change-time');
                                    setTime(e.currentTarget.value)
                                }}
                            >
                                {radio.name}
                            </ToggleButton>
                        ))}
                    </ButtonGroup>
                </Row>
            </div>
        </div>
    )
}