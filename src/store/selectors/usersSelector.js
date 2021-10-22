import { createSelector } from 'reselect'

const getUsers = (state) => {
    return state.users.users
}

export const getUsersSelector = createSelector(getUsers, (users) => {

    let active = [];
    let allUsers = 0;

    users.map(item => {
        for (let key in item) {
            if (key == 'activeStatus') {
                allUsers++;
                if (item[key] == 1)
                    return active.push(item)
            }


        }
    })

    return ({ active, allUsers })
})

