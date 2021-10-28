import React, { useEffect, useState } from "react";
import c from './main.module.css'
import StatisticCard from "../component/statisticCard/statisticCard";
import MapComponent from "../component/map/map";
import { connect } from 'react-redux'
import { getUsersSelector } from '../store/selectors/usersSelector';
import DriversSheet from "../component/driversSheet/driversSheet";
import DriverCard from "../component/driverCard/driverCard";

import { getDriversThunk } from "../store/driverReducer";

const mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
    }
}

const MainPage = ({ users, getDriversThunk }) => {


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

    useEffect(() => {
        let i = 0;
        let interval = setInterval(() => {
            if (i < 11) {
                getDriversThunk();
                i++;
                console.log("waiting for the next call.");
            }
            else {
                clearInterval(interval)
            }

        }, 5000);
    }, [])
    console.log("RENDER MAIN");

    return (
        <div className={c.wrap}>
            <div className={c.wrap__statistic}>
                <StatisticCard activeUsers={activeUsers} allUsers={allUsers} statusUser="Активные пользователи" />
                <StatisticCard statusUser="Свободные" allUsers={freeUsers} />
                <StatisticCard statusUser="Занятые" allUsers={bisyUsers} />
            </div>
            <div className={c.wrap__map}>
                <MapComponent />
            </div>
            <div className={c.footer__wrap}>
                <div className={c.wrap__drivers__items}>
                    <DriversSheet />
                </div>
                <div className={c.wrap__driver__item}>
                    <DriverCard />
                </div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps, {getDriversThunk})(MainPage);