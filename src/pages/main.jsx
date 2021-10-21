import React from "react";
import c from './main.module.css'
import StatisticCard from "../component/statisticCard/statisticCard";
import MapComponent from "../component/map/map";

const MainPage = () => {

    return (
        <div className={c.wrap}>
            <div className={c.wrap__statistic}>
                <StatisticCard driverStatus={driverStatus} />
                <StatisticCard driverStatus={driverStatus} />
                <StatisticCard driverStatus={driverStatus} />
            </div>
            <div className={c.wrap__map}>
                <MapComponent />
            </div>
            <div className={c.footer__wrap}>
                <div className={c.wrap__drivers__items}>

                </div>
                <div className={c.wrap__driver__item}>
                </div>
            </div>
        </div>
    )
}

export default MainPage;