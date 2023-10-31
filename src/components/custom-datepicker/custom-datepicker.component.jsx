import React, { useState } from "react"
import * as S from "./custom-datepicker.styles"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { Controller, useFormContext } from "react-hook-form"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import { MAX_DATE, MIN_DATE } from "../../utils/constants"
import { InputAdornment, TextField } from "@mui/material"
import CalendarTodayIcon from "@mui/icons-material/CalendarToday"
import dayjs from "dayjs"

const CustomDatepicker = ({ name }) => {
  const { control } = useFormContext()
  const [dateOpen, setDateOpen] = useState(false)

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: true }}
      defaultValue={dayjs()}
      render={({ field: { onChange, value } }) => (
        <S.DatePicketWrapper>
          <LocalizationProvider dateAdapter={AdapterDayjs} locale="es">
            <DatePicker
              label="Fecha"
              inputFormat="MMM DD"
              disableMaskedInput
              autoOk
              open={dateOpen}
              onOpen={() => setDateOpen(true)}
              onClose={() => setDateOpen(false)}
              value={value}
              onChange={onChange}
              // date={selectedDate}
              // onChange={date => setSelectedDate(date)}
              minDate={MIN_DATE}
              maxDate={MAX_DATE}
              // shouldDisableDate={disableMondays}
              variant="inline"
              inputVariant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CalendarTodayIcon />
                  </InputAdornment>
                ),
              }}
              disablePast={true}
              InputAdornmentProps={{ position: "start" }}
              renderInput={params => (
                <TextField
                  className="date"
                  onKeyDown={e => e.preventDefault()}
                  fullWidth
                  //   onClick={() => setDateOpen(true)}
                  {...params}
                />
              )}
            />
          </LocalizationProvider>
        </S.DatePicketWrapper>
      )}
    />
  )
}

export default CustomDatepicker
