import React from "react"
import * as S from "./step-one.styles.jsx"
import { Button, Grid, InputAdornment, Typography } from "@mui/material"
import WidgetSelect from "../widget-select/widget-select.component"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { STEPS } from "../reservations-widget.component"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import { useFormContext } from "react-hook-form"
import { SEAT_OPTIONS } from "../../../utils/constants"
import CustomDatepicker from "../../custom-datepicker/custom-datepicker.component.jsx"

const inputNames = ["seats", "date", "time"]

const StepOne = ({ setCurrentStep, availableTimes }) => {
  const { trigger } = useFormContext()

  const handleNext = () => {
    trigger(inputNames).then(res => {
      if (res) {
        setCurrentStep(STEPS.PERSONAL_DATA)
      }
    })
  }

  return (
    <S.Wrapper>
      <Grid container spacing={2}>
        <Grid item xs={12} md>
          <WidgetSelect
            options={SEAT_OPTIONS}
            name={inputNames[0]}
            label="Personas"
            defaultValue={SEAT_OPTIONS[0].value}
            isRequired
          />
        </Grid>
        <Grid item xs={12} md>
          <CustomDatepicker name={inputNames[1]} />
        </Grid>
        <Grid item xs={12} md>
          <WidgetSelect
            options={availableTimes}
            name={inputNames[2]}
            label="Hora"
            startAdornment={
              <InputAdornment position="start">
                <AccessTimeIcon />
              </InputAdornment>
            }
            isRequired
          />
        </Grid>
        <Grid item xs={12} md>
          <Button
            fullWidth
            // disabled={areAllAreasBlocked}
            className="continueBtn"
            type="button"
            onClick={handleNext}
          >
            Continuar
            <ArrowForwardIcon />
          </Button>
        </Grid>
        {availableTimes?.length === 0 && (
          <Grid item xs={12}>
            <Typography mt={1} variant="body2" color="error">
              No hay horarios disponible para la fecha seleccionada.
            </Typography>
          </Grid>
        )}
      </Grid>
    </S.Wrapper>
  )
}
export default StepOne
