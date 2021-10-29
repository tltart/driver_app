import React from "react";
import c from './statisticCard.module.css'
import userimg from '../../assets/icons/user.svg'

const StatisticCard = ({ activeUsers, allUsers, statusUser, deactiveUsers }) => {
    return (
        <div className={c.wrap}>
            <div className={c.wrap__users}>
                <h2>{statusUser}</h2>
                {statusUser == 'Активные пользователи' &&

                    <h1>{activeUsers}/{allUsers}</h1>
                }
                {statusUser == 'Свободные' &&
                    <div>
                        <h1 style={{ display: 'inline-block' }}>{activeUsers}</h1>
                        <div id={statusUser !== 'Занятые' ? `${c.active__users}` : `${c.disactive__users}`} style={{ display: 'inline-block' }}>
                            <h2>({activeUsers / allUsers * 100}%)</h2>
                        </div>
                    </div>
                }
                {statusUser == 'Занятые' &&
                    <div>
                        <h1 style={{ display: 'inline-block' }}>{deactiveUsers}</h1>
                        <div id={statusUser !== 'Занятые' ? `${c.active__users}` : `${c.disactive__users}`} style={{ display: 'inline-block' }}>
                            <h2>({deactiveUsers/allUsers * 100 }%)</h2>
                        </div>
                    </div>
                }
            </div>

            <img src={userimg} alt="driver_icon" />
        </div>
    )
}

export default StatisticCard;