/* eslint-disable @typescript-eslint/camelcase */
import axios, { AxiosRequestConfig } from "axios";
import qs from "qs";

class RapidAPI {
  public async request(url: string, key: string, toRemove: string) {
    try {
      const config: AxiosRequestConfig = {
        method: "POST",
        url: "https://rapidapi.p.rapidapi.com/remove",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          "x-rapidapi-key": key,
          "x-rapidapi-host": "background-removal.p.rapidapi.com",
        },
        data: qs.stringify({
          image_url: url,
          to_remove: toRemove,
        }),
      };

      const response = await axios.request(config);

      return response.data;
    } catch (err) {
      return {
        error: true,
        message: err.response.data.message,
      };
    }
  }
}

export default new RapidAPI();
