const initialState = {arrTracking: []}

function rootReducer (state = initialState, action) {
    switch (action.type) {
        case "newTracking": 
            console.log('newTrack', action.payload, state)
            return {...state, arrTracking: [...state.arrTracking, {id: action.payload.trackingNum, info: action.payload.info}]} //{...state, arrTracking: action.payload.newTrackingNum}
        default: 
            return state
    }
}

export default rootReducer
