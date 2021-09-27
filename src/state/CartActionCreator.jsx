export const addToCart = (productId) => {
    return (dispatch) => {
        dispatch({
            type: "addToCart",
            payload: productId
        })
    }
}

export const removeFromCart = (productId) => {
    return (dispatch) => {
        dispatch({
            type: "removeFromCart",
            payload: productId
        })
    }
}