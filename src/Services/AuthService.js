import axios from "axios";

const AUTH_REST_API_BASE_URL = "http://localhost:8080"

export const loginAPICall = (username, password) => axios.post(AUTH_REST_API_BASE_URL + '/login', { username, password});