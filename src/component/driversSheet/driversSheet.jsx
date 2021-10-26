import React, { useMemo, useState, useEffect, memo, useRef } from "react";
import c from './driversSheet.module.css'




const DriversSheet = memo(({ drivers, listDrivers, setDriverList }) => {

    const rootRef = useRef();
    const [start, setStart] = useState(0);
    const [nameSort, setNameSort] = useState(true);
    const [statusSort, setStatusSort] = useState(true);
    const [numberSort, setNumberSort] = useState(true);



    const onSort = (field) => {
        if (field) {
            if (field.target.outerText === "Имя") {
                listDrivers.sort((prev, next) => {
                    if (nameSort) {
                        if (prev.fullname < next.fullname) return -1;
                        if (prev.fullname < next.fullname) return 1;
                    }
                    else {
                        if (prev.fullname > next.fullname) return -1;
                        if (prev.fullname > next.fullname) return 1;
                    }
                });
                setNameSort(!nameSort)
            }
            if (field.target.outerText === "Статус") {
                listDrivers.sort((prev, next) => {
                    if (statusSort) {
                        if (prev.status < next.status) return -1;
                        if (prev.status < next.status) return 1;
                    }
                    else {
                        if (prev.status > next.status) return -1;
                        if (prev.status > next.status) return 1;
                    }
                });
                setStatusSort(!statusSort)
            }
            if (field.target.outerText === "Номер") {
                listDrivers.sort((prev, next) => {
                    if (numberSort) {
                        if (prev.id < next.id) return -1;
                        if (prev.id < next.id) return 1;
                    }
                    else {
                        if (prev.id > next.id) return -1;
                        if (prev.id > next.id) return 1;
                    }
                });
                setNumberSort(!numberSort);
            }
            setDriverList(listDrivers);
            console.log(listDrivers);
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


    useEffect(() => {
        let zz = [];
        const driversToList = () => {
            if (Object.keys(drivers).length) {
                zz = drivers.map(item => ({
                    fullname: item.fullName,
                    status: item.activeStatus,
                    id: item.ide
                }))
                return zz;
            }
            return
        }
        driversToList();
        setDriverList(zz)
    }, [])

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
                            <th onClick={onSort} >Имя</th>
                            <th onClick={onSort} >Статус</th>
                        </tr>
                    </thead>
                    <div className={c.wrap__table} style={{
                        height: rowHeight * (visibleRows - 1),
                        overflow: 'auto'
                    }} ref={rootRef}>
                        <div style={{ height: getTopHeight() }} />
                        <tbody>
                            {listDrivers.slice(start, start + visibleRows).map((item, index) => (
                                <tr key={start + index} onClick={}>
                                    <td>{item.id < 10 ? '0'+item.id : item.id}</td>
                                    <td>{item.fullname}</td>
                                    <td id={!item.status ? `${c.status__bisy}` : `${c.status__free}`}>{!item.status ? "Занят" : "Свободен"}</td>
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