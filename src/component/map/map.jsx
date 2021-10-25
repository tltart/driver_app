import React, { useState } from "react";
import c from './map.module.css';
import GoogleMap from "./googleMap/googleMap";
import MapAuto from "./mapAuto/mapAuto";

const MapComponent = (props) => {


    return (
        <div className={c.wrap}>
            <div className={c.wrap__head}>
                <h2>КАРТА ВОДИТЕЛЕЙ</h2>
                <MapAuto />
            </div>
            <div className={c.map__container}>
                <GoogleMap drivers={props.drivers} />
            </div>
        </div>
    )
}

export default MapComponent;