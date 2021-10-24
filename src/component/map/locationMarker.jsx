import React from 'react';

const LocationMarker = ({ phone }) => {
    return (
        <div style={{ width: '40px', height: '20px', backgroundColor: 'blue', borderRadius: '8px' }}>
            {phone}
        </div>
    );
}

export default LocationMarker;