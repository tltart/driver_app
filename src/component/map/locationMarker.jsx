import React from 'react';
import c from './locationMarker.module.css'

const LocationMarker = ({ phone }) => {
    return (
        <div className={c.wrap__marker}>
            <h4>{phone}</h4>
        </div>
    );
}

export default LocationMarker;