import React from "react";
import c  from './statisticCard.module.css'
import userimg from '../../assets/icons/user.svg'

const StatisticCard = () => {

    return (
        <div className={c.wrap}>
            <img src={userimg} alt="driver_icon" />
        </div>
    )
}

export default StatisticCard;