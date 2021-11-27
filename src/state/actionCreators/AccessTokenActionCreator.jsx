export const setAccessToken= (accessToken) => {
    return (dispatch) => {
        dispatch({
            type: "setAccessToken",
            payload: accessToken
        })
    }
}

export const removeAccessToken = () => {
    return (dispatch) => {
        dispatch({
            type: "removeAccessToken"
        })
    }
}

