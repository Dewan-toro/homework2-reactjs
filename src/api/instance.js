import axios from "axios";

const instance = axios.create({
    baseURL: "https://www.getpostman.com/collections/daca5da325a45677a983"
});

export { instance};