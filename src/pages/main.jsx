import React, { useEffect, useState } from "react";
import c from './main.module.css'
import StatisticCard from "../component/statisticCard/statisticCard";
import MapComponent from "../component/map/map";
import { connect } from 'react-redux'
import { getUsersSelector } from '../store/selectors/usersSelector';
import { getDrivers } from '../store/selectors/driversSelector';
import DriversSheet from "../component/driversSheet/driversSheet";
import DriverCard from "../component/driverCard/driverCard";
import {getCoordinates} from '../store/selectors/coordinatsSelector';
import {SetCoordinates} from '../store/mapReducer';


const mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        drivers: getDrivers(state),
        coordinates: getCoordinates(state)
    }
}

const MainPage = ({ users, drivers, SetCoordinates, coordinates }) => {


    let [activeUsers, setActiveUsers] = useState();
    let [allUsers, setAllUsers] = useState();

    let [freeUsers, setFreeUsers] = useState();
    let [bisyUsers, setBisyUsers] = useState();

    useEffect(() => {
        setActiveUsers(users.active.length);
        setAllUsers(users.allUsers);
        setFreeUsers(users.allUsers/2);
        setBisyUsers(users.allUsers/2);
    }, [])

    return (
        <div className={c.wrap}>
            <div className={c.wrap__statistic}>
                <StatisticCard activeUsers={activeUsers} allUsers={allUsers} statusUser="Активные пользователи" />
                <StatisticCard statusUser="Свободные" allUsers={freeUsers}/>
                <StatisticCard statusUser="Занятые" allUsers={bisyUsers} />
            </div>
            <div className={c.wrap__map}>
                {/* <MapComponent drivers={drivers} coordinates={coordinates} setCoordinates={SetCoordinates}/> */}
            </div>
            <div className={c.footer__wrap}>
                <div className={c.wrap__drivers__items}>
                    <DriversSheet drivers={drivers}/>
                </div>
                <div className={c.wrap__driver__item}>
                    <DriverCard driverId={drivers[5]} />
                </div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps, {SetCoordinates})(MainPage);