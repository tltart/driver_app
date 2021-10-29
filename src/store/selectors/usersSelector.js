import { createSelector } from 'reselect'

const getUsers = (state) => {
    return state.users.usersEqual
}

export const getUsersSelector = createSelector(getUsers, (users) => {

    let active = [];
    let allUsers = 0;
    let deactiveUsers = 0;
    let activeUsers = 0;

    users.map(item => {
        for (let key in item) {
            if (key == 'activeStatus') {
                allUsers++;
                if (item[key] == 1)
                    return active.push(item)
            }


        }
    })

    deactiveUsers = allUsers - active.length;
    activeUsers = active.length

    return ({ active, allUsers, deactiveUsers, activeUsers })
})

