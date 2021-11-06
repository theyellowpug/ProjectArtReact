const initialState = "";

const JwtTokenReducer = (jwtToken = initialState, action) => {

    switch (action.type) {
        case "setJwtToken":
            return jwtToken===action.payload ? jwtToken : jwtToken=action.payload;
        case "removeJwtToken":
            return jwtToken="";
        case "refreshJwtToken":
            return action.payload;
        default:
            return jwtToken;
    }
}

export default JwtTokenReducer;