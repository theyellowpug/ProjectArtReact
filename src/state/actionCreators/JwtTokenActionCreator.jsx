import { refreshToken } from "../../api/AuthenticationApi";

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
            type: "removeJwtToken"
        })
    }
}

export const refreshJwtToken = () => {

    return (dispatch) => {
        dispatch({
            type: "refreshJwtToken",
            payload: 
                refreshToken()
            .then(response=>{
                setJwtToken(response.data.access_token)             
            })
        })
    };
 }


