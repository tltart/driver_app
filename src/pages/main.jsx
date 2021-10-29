import React, { useEffect, useState } from "react";
import c from './main.module.css'
import StatisticCard from "../component/statisticCard/statisticCard";
import MapComponent from "../component/map/map";
import { connect } from 'react-redux'
import { getUsersSelector } from '../store/selectors/usersSelector';
import DriversSheet from "../component/driversSheet/driversSheet";
import DriverCard from "../component/driverCard/driverCard";

import { getDriversThunk } from "../store/driverReducer";
import { getUsersThunk } from "../store/userReducer"

const mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
    }
}

const MainPage = ({ users, getDriversThunk, getUsersThunk }) => {

    // console.log(users);

    useEffect(() => {
        let i = 0;
        let interval = setInterval(() => {
            if (i < 11) {
                getDriversThunk();
                getUsersThunk();
            }
            else {
                clearInterval(interval)
            }

        }, 1000);
    }, []);
    
    // console.log("RENDER MAIN");

    return (
        <div className={c.wrap}>
            <div className={c.wrap__statistic}>
                <StatisticCard activeUsers={users.activeUsers} allUsers={users.allUsers} statusUser="Активные пользователи" />
                <StatisticCard statusUser="Свободные" allUsers={users.allUsers} activeUsers={users.activeUsers} />
                <StatisticCard statusUser="Занятые" allUsers={users.allUsers} deactiveUsers={users.deactiveUsers} />
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

export default connect(mapStateToProps, { getDriversThunk, getUsersThunk })(MainPage);