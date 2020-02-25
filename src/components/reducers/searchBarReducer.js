import {SET_SEARCH_PARAMS, SET_SPECIES_FILTER} from '../actions/types'

const initialState = {
    searchParams: '',
    speciesFilter: ''
}

export default function(state = initialState, action) {
    switch (action.type) {
      case SET_SEARCH_PARAMS:
        return {
          ...state,
          searchParams: action.payload
        };
        case SET_SPECIES_FILTER:
        return {
          ...state,
          speciesFilter: action.payload
        };
      default:
        return state;
    }
  }