import axios from "axios";

export default () => {
  return axios.create({
    baseURL: "https://demo.msayef.net/api/v1",
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem('auth_data')) ? (JSON.parse(localStorage.getItem('auth_data'))).host.authentication_token : null}`,
      "Content-Type": "application/json"
    }
  });
};