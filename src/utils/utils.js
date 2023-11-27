import dayjs from "dayjs"
import { whatsappTemplates } from "./constants"

export const isBrowser = typeof window !== "undefined"

export const getLocalStorageItem = key => {
  if (isBrowser) {
    return window.localStorage.getItem(key)
  }
  return null
}

export const setLocalStorageItem = (key, value) => {
  if (isBrowser) {
    window.localStorage.setItem(key, value)
  }
}

export const catchAsync = (fn, fnName = "anonymous function") => {
  return async (...props) => {
    return await fn(...props)
      .then(res => {
        if (res?.status === "error") {
          throw new Error(res?.message)
        }
        return res
      })
      .catch(err => {
        console.error(fnName, err.message ?? "Something was wrong")
        // console.error(fnName, err);
        return err
      })
  }
}

export const getColor = (color, theme) => {
  switch (color) {
    case "primary":
      return theme.palette.primary.main
    case "secondary":
      return theme.palette.secondary.main
    case "tertiary":
      return theme.palette.tertiary.main
    case "content":
      return theme.palette.text.content
    default:
      return theme.palette.text.primary
  }
}

export const textEllipsis = (
  str,
  maxLength,
  { side = "end", ellipsis = "..." } = {},
) => {
  if (str.length > maxLength) {
    switch (side) {
      case "start":
        return ellipsis + str.slice(-(maxLength - ellipsis.length))
      case "end":
      default:
        return str.slice(0, maxLength - ellipsis.length) + ellipsis
    }
  }
  return str
}

export const evaluateDate = (date, daysOfWeek) => {
  if (!date || !daysOfWeek) return
  const dateObj = dayjs(date)
  const dayOfWeekName = dateObj.format("dddd")
  return daysOfWeek.includes(dayOfWeekName)
}

export const getRHFErrorMessage = (errors, name, rules) => {
  const splitName = `${name}`.split(".")
  const getError = () => {
    if (splitName.length === 2) {
      return errors[splitName[0]]?.[splitName[1]]
    }
    if (splitName.length === 3) {
      return errors[splitName[0]]?.[splitName[1]]?.[splitName[2]]
    }
    return errors[name]
  }
  const error = getError()

  if (error) {
    // console.log(name, error);
    switch (error.type) {
      case "valueAsNumber":
        return `${name} is not a valid number`
      case "required":
        return error?.message ? error.message : "This is a required field"
      case "min":
        return `Min ${rules.min}`
      case "max":
        return `Max ${rules.max}`
      case "maxLength":
        return `Text too long. Max ${rules.maxLength}`
      case "minLength":
        return `Text too short. Min ${rules.minLength}`
      case "pattern":
        return `${name} is not valid`
      case "validate":
        //console.log(errors)
        return error.message
      default:
        return error.message
    }
  }
}

export const validatePhone = number => number?.match(/\d/g)?.length === 10

export const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const isInTimeRange = (time, startTime, endTime) => {
  const today = dayjs().format("YYYY/MM/DD")
  const startDate = dayjs(`${today} ${startTime}`)
  // console.log("startDate :>> ", startDate)
  const endDate = dayjs(`${today} ${endTime}`)
  // console.log("endDate :>> ", endDate)
  const selectedDate = dayjs(`${today} ${time}`)
  // console.log("selectedDate :>> ", selectedDate)
  return (
    selectedDate.isSame(startDate) ||
    selectedDate.isSame(endDate) ||
    selectedDate.isBetween(startDate, endDate)
  )
}
