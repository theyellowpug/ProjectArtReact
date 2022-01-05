const BASE_URL="https://typ-project-art.herokuapp.com/";
//const BASE_URL="http://localhost:8080/";

const REFRESH_CONFIG = {
    headers: { Authorization: `Bearer ${localStorage.getItem("refresh_token")}` }
};

export{
    BASE_URL,
    REFRESH_CONFIG
}