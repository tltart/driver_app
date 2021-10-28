import React from 'react';
import c from './locationMarker.module.css'

const LocationMarker = ({ phone, selectDriverSet, status }) => {

    return (
        <div className={status ? `${c.wrap__marker}` : `${c.wrap__marker} ${c.bisy}`} onClick={selectDriverSet}>
            <h4>{phone}</h4>
        </div>
    );
}

export default LocationMarker;