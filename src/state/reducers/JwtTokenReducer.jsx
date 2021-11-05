const initialState = "";

const JwtTokenReducer = (jwtToken = initialState, action) => {

    switch (action.type) {
        case "getJwtToken": 
            return jwtToken
        case "setJwtToken":
            return jwtToken.includes(action.payload) ? jwtToken : jwtToken=action.payload;
        case "removeJwtToken":
            return jwtToken="";
        default:
            return jwtToken;
    }
}

export default JwtTokenReducer;