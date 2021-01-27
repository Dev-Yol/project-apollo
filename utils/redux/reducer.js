import { ActionTypes } from './actions'
const initialState = {
    loading: false,
    requests: {
        pending: [],
        failed: []
    },
    reviews: []
}
export default (state = initialState, action) => {
    let { type, payload } = action
    switch (type) {
        case ActionTypes.LOADING:
            return {
                ...state, loading: payload
            }

        case ActionTypes.CREATE:
            return {
                ...state, loading: payload
            }

        case ActionTypes.RETRIEVE:
            return {
                ...state, loading: payload
            }

        case ActionTypes.UPDATE:
            return {
                ...state, loading: payload
            }
        case ActionTypes.DELETE:
            return {
                ...state, loading: payload
            }
        default:
            return state;
    }
}