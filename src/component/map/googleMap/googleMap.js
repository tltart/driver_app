import React from 'react';
import GoogleMapReact from 'google-map-react';



const GoogleMap = () => {
    const MAP = {
        defaultZoom: 8,
        defaultCenter: { lat: 60.814305, lng: 47.051773 },
        options: {
            maxZoom: 19,
        },
    };

    let state = {
        mapOptions: {
            center: MAP.defaultCenter,
            zoom: MAP.defaultZoom,
        },
        clusters: [],
    };
    return (
        <GoogleMapReact
            defaultZoom={MAP.defaultZoom}
            defaultCenter={MAP.defaultCenter}
            options={MAP.options}
            // onChange={handleMapChange}
            yesIWantToUseGoogleMapApiInternals
            bootstrapURLKeys={{ key: 'yourkey' }}
        >
            {state.clusters.map(item => {
                if (item.numPoints === 1) {
                    return (
                        <Marker
                            key={item.id}
                            lat={item.points[0].lat}
                            lng={item.points[0].lng}
                        />
                    );
                }

                return (
                    <ClusterMarker
                        key={item.id}
                        lat={item.lat}
                        lng={item.lng}
                        points={item.points}
                    />
                );
            })}
        </GoogleMapReact>
    )
}

export default GoogleMap;