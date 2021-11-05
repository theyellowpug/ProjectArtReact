const initialState = [];

const CartReducer = (state = initialState, action) => {

    switch (action.type) {
        case "addToCart":
            return state.includes(action.payload) ? state : state.concat(action.payload);
        case "removeFromCart":
            return state.length === 0 ? state : state.pop(action.payload);
        default:
            return state;
    }
}

export default CartReducer;