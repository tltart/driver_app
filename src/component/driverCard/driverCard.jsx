import React from "react";
import c from './driverCard.module.css'


const DriverCard = ({ driverId }) => {
    // console.log(driverId);
    return (
        <div className={c.wrap__card}>
            <h2>Выбранный водитель</h2>
            <div className={c.title__driver}>
                <img src={driverId.avatar} alt="logoUsder" />
                {driverId.rating < 3.49 &&
                    <div className={`${c.raiting} ${c.danger}`}>
                        {driverId.rating}{driverId.rating % 1 === 0 && '.00'}
                    </div>
                }
                {driverId.rating < 4.49 & driverId.rating >= 3.5 &&
                    <div className={`${c.raiting} ${c.attention}`}>
                        {driverId.rating}{driverId.rating % 1 === 0 && '.00'}
                    </div>
                }
                {driverId.rating >= 4.5 &&
                    <div className={c.raiting}>
                        {driverId.rating}{driverId.rating % 1 === 0 && '.00'}
                    </div>
                }
                <div className={driverId.activeStatus ? `${c.name__status} ${c.free}` : `${c.name__status}`}>
                    <h3>{driverId.name}</h3>
                    <h4>{driverId.activeStatus ? 'Свободен' : 'Занят'}</h4>
                </div>


            </div>
            <div className={c.info__driver}>
                <h4>Номер: <span style={{color: '#696E74'}}>{driverId.ide < 10 && '0'}{driverId.ide}</span></h4>
                <h4>Город: <span style={{color: '#696E74'}}>...........</span></h4>
                <h4>Телефон: <span style={{color: '#696E74'}}>{driverId.phoneNumber}</span></h4>
                <h4>Марка машины/год выпуска: <span style={{color: '#696E74'}}>{driverId.carModel}/.....</span></h4>
                <h4>Дата авторизации: <span style={{color: '#696E74'}}>........</span></h4>
            </div>
        </div>
    )
}

export default DriverCard;