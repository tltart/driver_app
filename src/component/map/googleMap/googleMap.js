import React, { useRef, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from '../locationMarker';
import UseSupercluster from 'use-supercluster'
import c from './googleMap.module.css'



const GoogleMap = ({ drivers }) => {
    const mapRef = useRef();
    const [zoom, setZoom] = useState(10);
    const [bounds, setBounds] = useState(null);

    const MAP = {
        defaultZoom: 9,
        defaultCenter: { lat: drivers[0].currentLocationLatitude, lng: drivers[0].currentLocationLongitude },
        options: {
            maxZoom: 19,
        },
    };


    const points = drivers.map(item => ({
        "type": "Feature",
        "properties": {
            "cluster": false,
            "eventTitle": item.fullName
        },
        "geometry": { "type": "Point", "coordinates": [item.currentLocationLongitude, item.currentLocationLatitude] }
    }))


    const { clusters } = UseSupercluster({
        points,
        bounds,
        zoom,
        options: { radius: 75, maxZoom: 20 }
    })

    console.log(clusters);

    return (
        <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
            center={MAP.defaultCenter}
            zoom={MAP.defaultZoom}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map }) => {
                mapRef.current = map;
            }}
            onChange={({ zoom, bounds }) => {
                setZoom(zoom);
                setBounds([
                    bounds.nw.lng,
                    bounds.se.lat,
                    bounds.se.lng,
                    bounds.nw.lat
                ])
            }}>

            {clusters.map((cluster, index) => {
                const [longitude, latitude] = cluster.geometry.coordinates;
                const { cluster: isCluster, pont_count: pointCount } = cluster.properties
                //Used for incon type
                // const clusterId = cluster.properties.eventType;
                if (isCluster) {
                    let changeSize = Math.round(pointCount / points.length * 100);
                    //Can't exceed 40px
                    let addSize = Math.min(changeSize * 10, 40);
                    return (
                        <section lat={latitude, longitude} key={cluster.id}>
                            <div className={c.cluster__marker} style={{
                                width: addSize + changeSize + "px",
                                height: addSize + changeSize + "px"
                            }}>
                                {pointCount}
                            </div>
                        </section>
                    )
                }
                return(
                    <LocationMarker key={index} phone={cluster.properties.eventTitle} lng={longitude} lat={latitude}/>
                )
            })}

        </GoogleMapReact>

    )
}

export default GoogleMap;