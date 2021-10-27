import React, { useEffect, useState } from "react";
import c from './main.module.css'
import StatisticCard from "../component/statisticCard/statisticCard";
import MapComponent from "../component/map/map";
import { connect } from 'react-redux'
import { getUsersSelector } from '../store/selectors/usersSelector';
import { getDrivers } from '../store/selectors/driversSelector';
import DriversSheet from "../component/driversSheet/driversSheet";
import DriverCard from "../component/driverCard/driverCard";
import { getCoordinates } from '../store/selectors/coordinatsSelector';
import { SetCoordinates } from '../store/mapReducer';
import { setDriverListSort, selectDriverAction, getDriversThunk } from "../store/driverReducer";


const mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        drivers: getDrivers(state),
        listDrivers: state.drivers.listDrivers,
        coordinates: getCoordinates(state),
        selectDriver: state.drivers.selectDriver
    }
}

const MainPage = ({ users, drivers, SetCoordinates, coordinates, listDrivers, setDriverListSort, selectDriver, selectDriverAction, getDriversThunk }) => {


    let [activeUsers, setActiveUsers] = useState();
    let [allUsers, setAllUsers] = useState();
    let [freeUsers, setFreeUsers] = useState();
    let [bisyUsers, setBisyUsers] = useState();

    useEffect(() => {
        setActiveUsers(users.active.length);
        setAllUsers(users.allUsers);
        setFreeUsers(users.allUsers / 2);
        setBisyUsers(users.allUsers / 2);
    }, [])

    // console.log(drivers);
    // setTimeout(() => {
    //     getDriversThunk();
    // }, 5000);

    console.log("RENDER MAIN");

    return (
        <div className={c.wrap}>
            <div className={c.wrap__statistic}>
                <StatisticCard activeUsers={activeUsers} allUsers={allUsers} statusUser="Активные пользователи" />
                <StatisticCard statusUser="Свободные" allUsers={freeUsers} />
                <StatisticCard statusUser="Занятые" allUsers={bisyUsers} />
            </div>
            <div className={c.wrap__map}>
                <MapComponent drivers={drivers} coordinates={coordinates} setCoordinates={SetCoordinates} selectDriverAction={selectDriverAction}/>
            </div>
            <div className={c.footer__wrap}>
                <div className={c.wrap__drivers__items}>
                    <DriversSheet drivers={drivers} listDrivers={listDrivers} setDriverListSort={setDriverListSort} selectDriverAction={selectDriverAction}/>
                </div>
                <div className={c.wrap__driver__item}>
                    <DriverCard selectDriver={selectDriver} />
                </div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps, { SetCoordinates, setDriverListSort, selectDriverAction, getDriversThunk })(MainPage);