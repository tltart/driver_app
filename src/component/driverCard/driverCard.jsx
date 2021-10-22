import React from "react";
import c from './driverCard.module.css'

const DriverCard = ({ driverId }) => {
    console.log(driverId);
    return (
        <div className={c.wrap__card}>
            <h2>Выбранный водитель</h2>
            <div className={c.title__driver}>
                <img src={driverId.avatar} alt="logoUser" />
                <div className={c.name__status}>
                    <h3>{driverId.name}</h3>
                    <h4>{driverId.activeStatus ? 'Свободен' : 'Занят'}</h4>
                </div>

            </div>
            <div className={c.info__driver}>

            </div>
        </div>
    )
}

export default DriverCard;