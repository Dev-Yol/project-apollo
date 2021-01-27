import api from 'utils/api';
import { ActionTypes, actionCreator } from 'utils/redux/actions'
export const fetchCities = async (provID, dispatch) => {
    let res = await api.get(`/${provID}/cities`);
    if (!res.error) {
        dispatch(actionCreator(ActionTypes.FETCH_CITIES, res.data))
    } else {
        dispatch(actionCreator(ActionTypes.FETCH_CITIES, []))
    }
    return res
}
export const fetchProvinces = async (dispatch) => {
    let res = await api.get('/provinces');
    if (!res.error) {
        dispatch(actionCreator(ActionTypes.FETCH_PROVINCES, res.data))
    }
    return res
}