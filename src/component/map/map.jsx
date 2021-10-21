import React from "react";
import c from './map.module.css';
import SelectCity from '../selectCity/selectCity'

const MapComponent = () => {

    return (
        <div className={c.wrap}>
            <div className={c.wrap__head}>
                <h2>КАРТА ВОДИТЕЛЕЙ</h2>
                <SelectCity />
            </div>

        </div>
    )
}

export default MapComponent;