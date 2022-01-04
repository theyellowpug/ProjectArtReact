const initialState = "";

const UserIdReducer = (userId = initialState, action) => {

    switch (action.type) {
        case "setUserId":
            return userId===action.payload ? userId : userId=action.payload;
        case "removeUserId":
            return userId="";
        default:
            return userId;
    }
}

export default UserIdReducer;