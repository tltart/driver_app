import React, { useEffect, useRef, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from '../locationMarker';
import UseSupercluster from 'use-supercluster'
import c from './googleMap.module.css'


const Marker = ({ children }) => children;

const GoogleMap = ({ drivers, coordinates, selectDriverAction }) => {

    const mapRef = useRef();
    const [zoom, setZoom] = useState(10);
    const [bounds, setBounds] = useState(null);
    const [cent, setCent] = useState({})

    const clickHandlerMarker = (driverId) => {
        selectDriverAction(driverId);
    }

    const points = drivers.map(item => ({
        "type": "Feature",
        "properties": {
            "cluster": false,
            "eventTitle": item.fullName,
            "driverId": item.driverID
        },
        "geometry": { "type": "Point", "coordinates": [item.currentLocationLongitude, item.currentLocationLatitude] }
    }))


    const { clusters, supercluster } = UseSupercluster({
        points,
        bounds,
        zoom,
        options: { radius: 75, maxZoom: 20 }
    })


    useEffect(() => {
        if (drivers[0]) {
            setCent({
                defaultZoom: 9,
                defaultCenter: { lat: drivers[0].currentLocationLatitude, lng: drivers[0].currentLocationLongitude },
                options: {
                    maxZoom: 19,
                },
            })
        }
    }, [drivers])

    useEffect(() => {
        if (Object.values(coordinates).length) {
            mapRef.current.panTo({ lat: coordinates.lat, lng: coordinates.lng });
            mapRef.current.setZoom(10);
        }
    }, [coordinates])



    return (
        <>
            {cent.defaultCenter ?
                <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
                    center={cent.defaultCenter}
                    zoom={cent.defaultZoom}
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
                        const { cluster: isCluster, point_count: pointCount } = cluster.properties
                        if (isCluster) {
                            // console.log(cluster.properties);
                            return (
                                <Marker
                                    key={`cluster-${cluster.id}`}
                                    lat={latitude}
                                    lng={longitude}
                                >
                                    <div
                                        className={c.cluster__marker}
                                        style={{
                                            width: `${10 + (pointCount / points.length) * 40}px`,
                                            height: `${10 + (pointCount / points.length) * 40}px`
                                        }}
                                        onClick={() => {
                                            const expansionZoom = Math.min(
                                                supercluster.getClusterExpansionZoom(cluster.id),
                                                20
                                            );
                                            mapRef.current.setZoom(expansionZoom);
                                            mapRef.current.panTo({ lat: latitude, lng: longitude });
                                        }}
                                    >
                                        {pointCount}
                                    </div>
                                </Marker>
                            );
                        }
                        return (
                            <LocationMarker key={index} phone={cluster.properties.eventTitle} lng={longitude} lat={latitude}
                                selectDriverAction={() => { clickHandlerMarker(cluster.properties.driverId) }} />
                        )
                    })}

                </GoogleMapReact>
                : <div></div>
            }
        </>
    )
}

export default GoogleMap;