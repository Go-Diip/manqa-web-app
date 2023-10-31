import { reservationsApi } from "../apis/apis"

export default async function handler(req, res) {
  const USERNAME = process.env.GATSBY_RESERVATIONS_USERNAME
  const PASSWORD = process.env.GATSBY_RESERVATIONS_PASSWORD

  const loginRes = await reservationsApi.post(`users/login`, {
    email: USERNAME,
    password: PASSWORD,
  })

  const token = loginRes.data.token

  return res.status(200).json({ token })
}
