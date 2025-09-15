import axios from "axios";

export const api = axios.create(
    {
      baseURL: "https://68c7ac8f5d8d9f51473287c4.mockapi.io/",
      headers: {
        "Content-Type": "application/json"
      },
      timeout: 5_000
    }
)