import {SET_SEARCH_PARAMS, SET_SPECIES_FILTER} from './types'

export const setSearchParams = (dispatch, value) =>{
    dispatch({
        type: SET_SEARCH_PARAMS,
        payload: value
    })
}
export const setSpeciesFilter = (dispatch, value) =>{
    dispatch({
        type: SET_SPECIES_FILTER,
        payload: value
    })
}
