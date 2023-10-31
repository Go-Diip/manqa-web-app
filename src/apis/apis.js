const axios = require("axios")

export const reservationsApi = axios.create({
  baseURL: `${process.env.GATSBY_RESERVATIONS_URL}/v1/`,
})
