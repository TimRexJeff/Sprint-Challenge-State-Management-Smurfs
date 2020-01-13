import {POST_SMURF_START,
    POST_SMURF_SUCCESS,
    POST_SMURF_FAIL,
    FETCH_SMURF_START,
    FETCH_SMURF_SUCCESS,
    FETCH_SMURF_FAIL,
    PUT_SMURF_START,
    PUT_SMURF_SUCCESS,
    PUT_SMURF_FAIL,
    DELETE_SMURF_START,
    DELETE_SMURF_SUCCESS,
    DELETE_SMURF_FAIL
} from "../actions/index"

const initialState = {
    smurfs: [],
    isFetching: false,
    error: null
}

const  reducer= (state = initialState, action) => {
    switch (action.type) {
        case POST_SMURF_START:
        case FETCH_SMURF_START:
        case PUT_SMURF_START:
        case DELETE_SMURF_START:
            return {
            ...state,
            isFetching: true
            }
        case POST_SMURF_SUCCESS:
        case FETCH_SMURF_SUCCESS:
        case PUT_SMURF_SUCCESS:
        case DELETE_SMURF_SUCCESS:
            return {
            ...state,
            smurfs: action.payload,
            isFetching: false,
            error: ""
            }
        case POST_SMURF_FAIL:
        case FETCH_SMURF_FAIL:
        case PUT_SMURF_FAIL:
        case DELETE_SMURF_FAIL:
            return {
            ...state,
            isFetching: false,
            error: action.payload
            }
        default:
            return state
  }
}

export default reducer