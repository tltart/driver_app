const SET_COORDINATES = "SET_COORDINATES"



let initialState = {

    coordinats: []

}


const mapReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_COORDINATES:
            return { ...state, coordinats: [...action.payload] }

        default:
            return state;
    }

}

export const SetCoordinates = (coordinates) => ({ type: SET_COORDINATES, payload: coordinates })

export default mapReducer;