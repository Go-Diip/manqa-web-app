import dayjs from "dayjs"

export const IS_PRODUCTION = process.env.GATSBY_ACTIVE_ENV === "production"

export const RESERVATIONS_ENABLED = true

export const CLIENT_ID = process.env.GATSBY_CLIENT_ID

export const LOCATION_ID = process.env.GATSBY_LOCATION_ID

export const CURRENT_DATE = dayjs()

export const MIN_DATE = CURRENT_DATE

export const MAX_DATE = dayjs(MIN_DATE).add(5, "week")

export const TIME_STATUSES = {
  ACTIVE: "active",
  BLOCKED: "blocked",
}

export const STATUSES = {
  approved: "confirmed",
  pending: "pending",
  canceled: "canceled",
}

export const SEAT_OPTIONS = [
  {
    value: 1,
    label: "1 Persona",
  },
  {
    value: 2,
    label: "2 Personas",
  },
  {
    value: 3,
    label: "3 Personas",
  },
  {
    value: 4,
    label: "4 Personas",
  },
  {
    value: 5,
    label: "5 Personas",
  },
  {
    value: 6,
    label: "6 Personas",
  },
  {
    value: 7,
    label: "7 Personas",
  },
  {
    value: 8,
    label: "8 Personas",
  },
  {
    value: 9,
    label: "9 Personas",
  },
  {
    value: 10,
    label: "10 Personas",
  },
]

export const whatsappTemplates = {
  RESERVATION_NEW: "reservation_new_host_2",
  RESERVATION_NOT_AVAILABLE: "reservation_not_available_1",
  RESERVATION_CANCELED: "reservation_canceled_1",
  RESERVATION_CONFIRMED: "reservation_confirmed_3",
}
