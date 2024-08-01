import axios from "axios";





const api = axios.create({

  baseURL: import.meta.env.VITE_API_URL,
    params: {
        geo: 'TR',
        lang: 'tr'
      },
      headers: {
        'x-rapidapi-key': 'f0ab21be56mshcc2d6cc403c0830p1c0f26jsn0290f003529a',
        'x-rapidapi-host': 'yt-api.p.rapidapi.com'
      }
});

export default api;