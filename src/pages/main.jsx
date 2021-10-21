import React from "react";
import c from './main.module.css'
import StatisticCard from "../component/statisticCard/statisticCard";
import MapComponent from "../component/map/map";

const MainPage = () => {

    return (
        <div className={c.wrap}>
            <div className={c.wrap__statistic}>
                <StatisticCard />
                <StatisticCard />
                <StatisticCard />

            </div>
            <MapComponent />
        </div>
    )
}

export default MainPage;