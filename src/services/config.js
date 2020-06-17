import axios from "axios";

export const http = axios.create({
  baseURL: "http://localhost:3002/",
  headers: {
    "content-type": "application/json",
  },
});
