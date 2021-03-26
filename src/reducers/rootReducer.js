const initialState = {arrTracking = []}

function rootReducer (state = initialState, action) {
    switch(action.type) {
        case "newTracking": 
            return {...state, arrTracking: action.payload.newTrackingNum}
        default: 
            return state
    }
}