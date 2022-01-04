export const setUserId= (userId) => {
    return (dispatch) => {
        dispatch({
            type: "setUserId",
            payload: userId
        })
    }
}

export const removeUserId = () => {
    return (dispatch) => {
        dispatch({
            type: "removeUserId"
        })
    }
}