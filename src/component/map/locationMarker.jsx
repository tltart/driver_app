import React from 'react';
import c from './locationMarker.module.css'

const LocationMarker = ({ phone, selectDriverAction }) => {

    return (
        <div className={c.wrap__marker} onClick={selectDriverAction}>
            <h4>{phone}</h4>
        </div>
    );
}

export default LocationMarker;