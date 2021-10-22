import React, { useMemo, useState, useEffect, memo } from "react";
import c from './driversSheet.module.css'




const DriversSheet = memo(({ drivers }) => {
    console.log(drivers);

    const onSort = (field) => {
        console.log(field);
    }

    return (
        <>
            <div id={c.title}>
                <h2>Список водителей</h2>
            </div>
            <div className={c.wrap__table}>
                <table className="table">
                    <thead>
                        <tr>
                            <th onClick={onSort(null, 'id')} style={{cursor:'default', backgroundColor:'#F1F3FA', color:'#545E67', fontSize:'15px'}}>Номер</th>
                            <th onClick={onSort(null, 'id')} style={{cursor:'default', backgroundColor:'#F1F3FA', color:'#545E67', fontSize:'15px'}}>Имя</th>
                            <th onClick={onSort(null, 'id')} style={{cursor:'default', backgroundColor:'#F1F3FA', color:'#545E67', fontSize:'15px'}}>Статус</th>
                        </tr>
                    </thead>
                    <tbody>
                        {drivers.map((item, index) => (
                            <tr key={item.driverID}>
                                <td>{index}</td>
                                <td>{item.name}</td>
                                <td id={!item.activeStatus ? `${c.status__bisy}` : `${c.status__free}`}>{!item.activeStatus ? "Занят" : "Свободен"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
})


export default DriversSheet;