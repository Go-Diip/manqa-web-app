import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
import { reservationsApi } from "../apis/apis"
import { CLIENT_ID, LOCATION_ID, STATUSES } from "./constants"
import { catchAsync } from "./utils"
dayjs.extend(utc)
dayjs.extend(timezone)

// export const getToken = async () => {
//   const tokenRes = await window.fetch(`/api/get-token`)
//   const response = await tokenRes.json()
//   const token = response?.token
//   return token
// }

export const getLocationInfo = catchAsync(async () => {
  const res = await reservationsApi.get(`locations/${LOCATION_ID}`)
  // console.log("res :>> ", res);
  return res?.data
}, "getLocationInfo")

export const getExceptionalTimes = catchAsync(async () => {
  // const token = getToken()
  const res = await reservationsApi.post(
    `exceptional-times/future-exceptional-times`,
    {
      clientId: CLIENT_ID,
    },
    // {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //     "Content-Type": "application/json",
    //   },
    // },
  )
  return res?.data
}, "getExceptionalTimes")

export const getBlockedTimes = catchAsync(async () => {
  // const token = getToken()
  const res = await reservationsApi.post(
    `block-times/future-block-times`,
    {
      clientId: CLIENT_ID,
    },
    // {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //     "Content-Type": "application/json",
    //   },
    // },
  )
  // console.log("res :>> ", res);
  return res?.data
}, "getBlockedTimes")

export const getTimesArray = (openTime, closeTime, interval) => {
  if (!openTime || !closeTime || !interval) return
  const open = dayjs(new Date(`2023-09-26T${openTime}:00`))
  const close = dayjs(new Date(`2023-09-26T${closeTime}:00`))
  const timesArr = []
  let currentHour = dayjs(open)
  while (+currentHour <= +close) {
    const formattedHour = currentHour.format("HH:mm")
    const label = currentHour.format("h:mm A")
    timesArr.push({ value: formattedHour, label })
    // timesArr.push(formattedHour);
    // currentHour.set(currentHour.get("minutes") + interval);
    currentHour = currentHour.add(interval, "minute")
  }
  return timesArr
}

const formatDatesArr = dates => {
  return dates?.map(item => ({
    id: item?.id,
    date: dayjs.tz(item.date, "America/Bogota"),
  }))
}

export const evaluateCalendarDate = async (
  timesArray,
  formattedDate,
  isOpenDay,
) => {
  // console.log("timesArray :>> ", timesArray)
  // console.log("formattedDate :>> ", formattedDate)
  const exceptRes = await getExceptionalTimes()
  const exceptionalTimes = formatDatesArr(exceptRes?.data?.exceptionalTimes)
  // console.log("exceptionalTimes :>> ", exceptionalTimes)
  const blockedRes = await getBlockedTimes()
  const blockedTimes = formatDatesArr(blockedRes?.data?.blockTimes)
  // console.log("blockedTimes :>> ", blockedTimes)
  const newTimes = timesArray
    ?.map(item => {
      const itemDate = dayjs(`${formattedDate} ${item.value}`)
      // console.log("itemDate :>> ", itemDate)
      const findBlocked = blockedTimes.find(blocked =>
        blocked.date.isSame(itemDate),
      )
      const findExc = exceptionalTimes.find(exc => exc.date.isSame(itemDate))
      if (itemDate.isBefore(dayjs())) {
        return null
      }
      // console.log("itemDate :>> ", itemDate);
      if (Array.isArray(blockedTimes) && findBlocked) {
        // console.log("blocked :>> ", itemDate.format("HH:mm"));
        return { ...item, status: "blocked", id: findBlocked?.id }
      }
      if (Array.isArray(exceptionalTimes) && findExc) {
        // console.log("exceptional :>> ", itemDate.format("HH:mm"));
        return { ...item, status: "active", id: findExc?.id }
      }
      if (!isOpenDay) {
        return { ...item, status: "blocked" }
      }
      return { ...item, status: "active" }
    })
    .filter(item => item)
  return newTimes
}

export const createReservation = catchAsync(async data => {
  const res = await reservationsApi.post(`reservations`, {
    clientId: CLIENT_ID,
    locationId: LOCATION_ID,
    status: STATUSES.pending,
    ...data,
  })
  return res?.data
}, "createReservation")
