import React, { useState, useEffect, memo, useRef } from "react";
import c from './driversSheet.module.css'
import { connect } from 'react-redux'
import { selectDriverAction } from "../../store/driverReducer";




const mapStateToProps = (state) => {
    return {
        listForSheet: state.drivers.listForSheet,
    }
}


const DriversSheet = memo(({ listForSheet, selectDriverAction }) => {

    const rootRef = useRef();
    const [start, setStart] = useState(0);
    const [nameSort, setNameSort] = useState(true);
    const [statusSort, setStatusSort] = useState(true);
    const [numberSort, setNumberSort] = useState(true);

    const [sortedList, setSortedList] = useState(listForSheet);

    const clickHandler = (e) => {
        selectDriverAction(e);
    }

    const onSort = (field) => {
        if (field) {
            if (field.target.outerText === "Имя") {
                listForSheet.sort((prev, next) => {
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
                listForSheet.sort((prev, next) => {
                    if (statusSort) {
                        if (prev.activeStatus < next.activeStatus) return -1;
                        if (prev.activeStatus < next.activeStatus) return 1;
                    }
                    else {
                        if (prev.activeStatus > next.activeStatus) return -1;
                        if (prev.activeStatus > next.activeStatus) return 1;
                    }
                });
                setStatusSort(!statusSort)
            }
            if (field.target.outerText === "Номер") {
                listForSheet.sort((prev, next) => {
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
            setSortedList(listForSheet);
        }
        return

    }

    const rowHeight = 40;
    const visibleRows = 6;

    const getTopHeight = () => {
        return rowHeight * start;
    }

    const getBottomHeight = () => {
        return rowHeight * (Object.keys(listForSheet).length - (start + visibleRows))
    }

    const onScroll = (e) => {
        setStart(Math.floor(e.target.scrollTop / rowHeight))
    }


    useEffect(() => {
        rootRef.current.addEventListener('scroll', onScroll);
        return () => {
            rootRef.current.removeEventListener('scroll', onScroll);
        }
    }, [listForSheet])

    console.log("Render Driver Sheet");

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
                            {listForSheet.slice(start, start + visibleRows).map((item, index) => (
                                <tr key={item.driverId} onClick={() => { clickHandler(item.driverId) }}>
                                    <td>{item.id < 10 ? '0' + item.id : item.id}</td>
                                    <td>{item.fullname}</td>
                                    <td id={!item.activeStatus ? `${c.status__bisy}` : `${c.status__free}`}>{!item.activeStatus ? "Занят" : "Свободен"}</td>
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


export default connect(mapStateToProps, { selectDriverAction })(DriversSheet);