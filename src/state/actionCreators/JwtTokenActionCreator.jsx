export const setJwtToken= (jwtToken) => {
    return (dispatch) => {
        dispatch({
            type: "setJwtToken",
            payload: jwtToken
        })
    }
}

export const removeJwtToken = () => {
    return (dispatch) => {
        dispatch({
            type: "removeJwtToken",
        })
    }
}

export const getJwtToken = () => {
    return (dispatch) => {
        dispatch({
            type: "getJwtToken",
        })
    }
}