const INIT_DRIVERS = "INIT_DRIVERS"





let initialState = {

    drivers: [],

}



const driverReducer = (state = initialState, action) => {
    switch (action.type) {

        case INIT_DRIVERS:
            return {... state, drivers: [...state.drivers, ...action.payload]}

        default:
            return state;
    }

}

// export const GoodActive = (item) => ({ type: ACTIVE, payload: item })

export default driverReducer;