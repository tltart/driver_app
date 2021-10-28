import React, { useEffect, useState } from "react";
import c from './driverCard.module.css'
import { connect } from 'react-redux'
import { selectDriverAction } from "../../store/driverReducer";

const mapStateToProps = (state) => {
    return {
        selectDriver: state.drivers.selectDriver,
        listForSheet: state.drivers.listForSheet
    }
}


const DriverCard = ({ selectDriver, listForSheet, selectDriverAction }) => {


    useEffect(() => {
        if (selectDriver) {
            selectDriverAction(selectDriver.driverID)
        }
    }, [listForSheet])

    return (
        <div className={c.wrap__card}>
            {selectDriver ?
                <div>
                    <h2>Выбранный водитель</h2>
                    <div className={c.wrap__head__info}>
                        <div className={c.avatar__driver}>
                            <img src={selectDriver.avatar} alt="logoUsder" />
                            {selectDriver.rating < 3.49 &&
                                <div className={`${c.raiting} ${c.danger}`}>
                                    {selectDriver.rating}{selectDriver.rating % 1 === 0 && '.00'}
                                </div>
                            }
                            {selectDriver.rating < 4.49 & selectDriver.rating >= 3.5 &&
                                <div className={`${c.raiting} ${c.attention}`}>
                                    {selectDriver.rating}{selectDriver.rating % 1 === 0 && '.00'}
                                </div>
                            }
                            {selectDriver.rating >= 4.5 &&
                                <div className={c.raiting}>
                                    {selectDriver.rating}{selectDriver.rating % 1 === 0 && '.00'}
                                </div>
                            }
                        </div>
                        <div className={c.title__driver}>
                            <div className={selectDriver.activeStatus ? `${c.name__status} ${c.free}` : `${c.name__status}`}>
                                <h3>{selectDriver.name}</h3>
                                <h4>{selectDriver.activeStatus ? 'Свободен' : 'Занят'}</h4>
                            </div>
                        </div>
                    </div>
                    <div className={c.info__driver}>
                        <h4>Номер: <span style={{ color: '#696E74' }}>{selectDriver.ide < 10 && '0'}{selectDriver.ide}</span></h4>
                        <h4>Город: <span style={{ color: '#696E74' }}>...........</span></h4>
                        <h4>Телефон: <span style={{ color: '#696E74' }}>{selectDriver.phoneNumber}</span></h4>
                        <h4>Марка машины/год выпуска: <span style={{ color: '#696E74' }}>{selectDriver.carModel}/.....</span></h4>
                        <h4>Дата авторизации: <span style={{ color: '#696E74' }}>........</span></h4>
                    </div>
                </div>
                : <h2>Водитель не выбран</h2>
            }
        </div>

    )
}

export default connect(mapStateToProps, { selectDriverAction })(DriverCard);