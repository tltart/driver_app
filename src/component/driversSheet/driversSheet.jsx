import React, { useMemo, useState, useEffect, memo, useRef } from "react";
import c from './driversSheet.module.css'




const DriversSheet = memo(({ drivers }) => {


    const rootRef = useRef();
    const [start, setStart] = useState(0);
    const [listDrivers, setListDrivers] = useState([]);

    const onSort = (field) => {
        if (field) {
            console.log(field.target);
        }
        return

    }

    const rowHeight = 40;
    const visibleRows = 6;

    const getTopHeight = () => {
        return rowHeight * start;
    }

    const getBottomHeight = () => {
        return rowHeight * (Object.keys(drivers).length - (start + visibleRows))
    }

    const onScroll = (e) => {
        setStart(Math.floor(e.target.scrollTop / rowHeight))
    }

    const driversSort = useMemo(() => {
        let zz = drivers.map(item => ({
            fullname: item.fullName,
            status: item.activeStatus
        }))
        setListDrivers(zz)
    }, [drivers])


    useEffect(() => {
        driversSort();
    }, [drivers])

    useEffect(() => {
        rootRef.current.addEventListener('scroll', onScroll);
        return () => {
            rootRef.current.removeEventListener('scroll', onScroll);
        }

    }, [])


    return (
        <>
            <div id={c.title}>
                <h2>Список водителей</h2>
            </div>
            <div className={c.wrap__table}>
                <table>
                    <thead>
                        <tr>
                            <th onClick={onSort} >Номер</th>
                            <th onClick={onSort(null, 'id')} >Имя</th>
                            <th onClick={onSort(null, 'id')} >Статус</th>
                        </tr>
                    </thead>
                    <div className={c.wrap__table} style={{
                        height: rowHeight * (visibleRows - 1),
                        overflow: 'auto'
                    }} ref={rootRef}>
                        <div style={{ height: getTopHeight() }} />
                        <tbody>
                            {listDrivers.slice(start, start + visibleRows).map((item, index) => (
                                <tr key={start + index}>
                                    <td>{start + index}</td>
                                    <td>{item.fullname}</td>
                                    <td id={!item.status ? `${c.status__bisy}` : `${c.status__free}`}>{!item.activeStatus ? "Занят" : "Свободен"}</td>
                                </tr>
                            ))}
                        </tbody>
                        <div style={{ height: getBottomHeight() }} />
                    </div>
                </table>
            </div>
        </>
    )
})


export default DriversSheet;