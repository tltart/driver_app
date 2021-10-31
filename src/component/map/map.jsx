import React, { useState } from "react";
import c from './map.module.css';
import GoogleMap from "./googleMap/googleMap";
import MapAuto from "./mapAuto/mapAuto";
import { connect } from 'react-redux'
import { getCoordinates } from '../../store/selectors/coordinatsSelector';
import { SetCoordinates } from '../../store/mapReducer';
import { selectDriverAction } from '../../store/driverReducer'

const mapStateToProps = (state) => {
    return {
        listForMap: state.drivers.listForMap,
        coordinates: getCoordinates(state),
        selectDriver: state.drivers.selectDriver
    }
}

const MapComponent = React.memo(({ listForMap, coordinates, setCoordinates, selectDriverAction, selectDriver }) => {


    console.log("Render Map Wrapper");

    return (
        <div className={c.wrap}>
            <div className={c.wrap__head}>
                <h2>КАРТА ВОДИТЕЛЕЙ</h2>
                <MapAuto setCoordinates={setCoordinates} selectDriver={selectDriver} />
            </div>
            <div className={c.map__container}>
                <GoogleMap listForMap={listForMap} coordinates={coordinates} selectDriverAction={selectDriverAction} />
            </div>
        </div>
    )
})

export default connect(mapStateToProps, { SetCoordinates, selectDriverAction })(MapComponent);