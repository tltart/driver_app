import React, { useState } from "react";
import c from './map.module.css';
import GoogleMap from "./googleMap/googleMap";
import MapAuto from "./mapAuto/mapAuto";

const MapComponent = ({drivers, coordinates, setCoordinates}) => {

    
    return (
        <div className={c.wrap}>
            <div className={c.wrap__head}>
                <h2>КАРТА ВОДИТЕЛЕЙ</h2>
                <MapAuto setCoordinates={setCoordinates}/>
            </div>
            <div className={c.map__container}>
                <GoogleMap drivers={drivers} coordinates={coordinates}/>
            </div>
        </div>
    )
}

export default MapComponent;