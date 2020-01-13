import axios from 'axios'

/* CREATE (post) */
export const POST_SMURF_START = 'POST_SMURF_START'
export const POST_SMURF_SUCCESS = 'POST_SMURF_SUCCESS'
export const POST_SMURF_FAIL = 'POST_SMURF_FAIL'

export const postSmurf = (newSmurf) => dispatch => {
    dispatch({ type: POST_SMURF_START })
    axios
        .post(`/api/parents/food`, newSmurf)
        .then(res => {
            dispatch({ type: POST_SMURF_SUCCESS, payload: res.data })
        })
        .catch(err => dispatch({ type: POST_SMURF_FAIL, payload: err }))
}

/* READ (get) */
export const FETCH_SMURF_START = 'FETCH_SMURF_START'
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS'
export const FETCH_SMURF_FAIL = 'FETCH_SMURF_FAIL'

export const fetchSmurf = () => dispatch => {
    dispatch({ type: FETCH_SMURF_START })
    axios
    .get(``)
        .then(res => {
            console.log(res)
            dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data })
        })
        .catch(err => dispatch({ type: FETCH_SMURF_FAIL, payload: err }))
}

/* UPDATE (put) */
export const PUT_SMURF_START = 'PUT_SMURF_START'
export const PUT_SMURF_SUCCESS = 'PUT_SMURF_SUCCESS'
export const PUT_SMURF_FAIL = 'PUT_SMURF_FAIL'

export const putSmurf = (id, updateSmurf) => dispatch => {
    dispatch({ type: PUT_SMURF_START })
    axios
        .put(`/api/parents/food/${id}`, updateSmurf )
        .then(res => {
            dispatch({ type: PUT_SMURF_SUCCESS, payload: res.data })
        })
        .catch(err => dispatch({ type: PUT_SMURF_FAIL, payload: err }))
}

/* DELETE */
export const DELETE_SMURF_START = 'DELETE_SMURF_START'
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS'
export const DELETE_SMURF_FAIL = 'DELETE_SMURF_FAIL'

export const deleteSmurf = (id) => dispatch => {
    dispatch({ type: DELETE_SMURF_START })
    axios
        .delete(`/api/parents/food/${id}`)
        .then(res => {
            dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data })
        })
        .catch(err => dispatch({ type: DELETE_SMURF_FAIL, payload: err }))
}