import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID z7mrB2CfQETkVtJGovoiEe_Ltrje3m8yjdw75s9q_80",
  },
});
