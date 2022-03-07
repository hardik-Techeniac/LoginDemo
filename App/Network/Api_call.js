import axios from "axios";
export default axios.create({
    baseURL: "http://15.184.130.128/api/",
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'JWT fefege...',
        'appversion': '0.0',
    }
});
