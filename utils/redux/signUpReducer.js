import { ActionTypes } from './actions'
const initialState = {
    provinces: [],
    cities: [],
}
export default (state = initialState, action) => {
    let { type, payload } = action
    switch (type) {
        case ActionTypes.FETCH_CITIES:
            return {
                ...state, cities: payload
            }
        case ActionTypes.FETCH_PROVINCES:
            return {
                ...state, provinces: payload
            }
        default:
            return state;
    }
}