import React from "react";
import c from './statisticCard.module.css'
import userimg from '../../assets/icons/user.svg'

const StatisticCard = ({ activeUsers, allUsers, statusUser }) => {
    return (
        <div className={c.wrap}>
            <div className={c.wrap__users}>
                <h2>{statusUser}</h2>
                {statusUser == 'Активные ползователи' ?

                    <h1>{activeUsers}/{allUsers}</h1>
                    :
                    <div>
                        <h1 style={{ display: 'inline-block' }}>{allUsers}</h1>
                        <div id={statusUser !== 'Занятые' ? `${c.active__users}` : `${c.disactive__users}`} style={{ display: 'inline-block' }}>
                            <h2>({allUsers}%)</h2>
                        </div>
                    </div>
                }

            </div>

            <img src={userimg} alt="driver_icon" />
        </div>
    )
}

export default StatisticCard;