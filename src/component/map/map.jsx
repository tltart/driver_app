import React from "react";
import c from './map.module.css';
import SelectCity from '../selectCity/selectCity'
import GoogleMap from "./googleMap/googleMap";


const MapComponent = () => {

    return (
        <div className={c.wrap}>
            <div className={c.wrap__head}>
                <h2>КАРТА ВОДИТЕЛЕЙ</h2>
                <SelectCity />
                <GoogleMap />
            </div>

        </div>
    )
}

export default MapComponent;