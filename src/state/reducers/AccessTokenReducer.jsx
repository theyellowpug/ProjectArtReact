const initialState = "";

const AccessTokenReducer = (accessToken = initialState, action) => {

    switch (action.type) {
        case "setAccessToken":
            return accessToken===action.payload ? accessToken : accessToken=action.payload;
        case "removeAccessToken":
            return accessToken="";
        default:
            return accessToken;
    }
}

export default AccessTokenReducer;