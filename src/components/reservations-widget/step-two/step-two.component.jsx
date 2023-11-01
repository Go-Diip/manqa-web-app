import React, { useEffect } from "react"
import * as S from "./step-two.styles.jsx"
import { Controller, useFormContext } from "react-hook-form"
import {
  Alert,
  Button,
  FormControl,
  Grid,
  InputAdornment,
  Radio,
  RadioGroup,
} from "@mui/material"
import { Disclaimer, Subtitle } from "../reservations-widget.styles"
import WidgetTextField from "../widget-text-field/widget-text-field.component"
import LocalPhoneIcon from "@mui/icons-material/LocalPhone"
import EmailIcon from "@mui/icons-material/Email"
import { STEPS } from "../reservations-widget.component"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import Typography from "@mui/material/Typography"
import {
  emailRegex,
  getRHFErrorMessage,
  isInTimeRange,
  validatePhone,
} from "../../../utils/utils.js"

const inputNames = ["firstName", "lastName", "phone", "email", "area"]

const StepTwo = ({ setCurrentStep, areas }) => {
  const {
    trigger,
    control,
    watch,
    formState: { errors },
  } = useFormContext()

  // console.log("errors :>> ", errors)

  const handleNext = async () => {
    trigger(inputNames).then(res => {
      if (res) {
        setCurrentStep(STEPS.FINALIZE)
      }
    })
  }
  const area = watch("area")
  const selectedTime = watch("time")
  const areaError = getRHFErrorMessage(errors, "area")
  // console.log("areas :>> ", areas)
  // const selectedArea = areas.find(({ name }) => name === area)

  useEffect(() => {
    trigger("area")
  }, [area])

  const validateArea = area => {
    // console.log("area :>> ", area)
    const selectedArea = areas.find(({ name }) => name === area)
    // console.log("selectedArea :>> ", selectedArea)
    if (!selectedArea) return
    const validateTime = isInTimeRange(
      selectedTime,
      selectedArea.startTime,
      selectedArea.closeTime,
    )
    if (!validateTime) {
      // console.log("validateTime :>> ", validateTime)
      return "La hora seleccionada no está disponible en esta área"
    }
    return
  }

  return (
    <S.Wrapper>
      <Grid container spacing={{ xs: 1, md: 4 }}>
        <Grid item xs={12} md={7}>
          <Subtitle>Datos</Subtitle>
          <WidgetTextField
            name={inputNames[0]}
            label="Nombre"
            required="El nombre es requerido"
            placeholder="Tu primer nombre"
            autoComplete="given-name"
          />
          <WidgetTextField
            name={inputNames[1]}
            label="Apellidos"
            required="Los apellidos son requeridos"
            placeholder="Tus dos apellidos"
            autoComplete="family-name"
          />
          <WidgetTextField
            name={inputNames[2]}
            label="Teléfono"
            required="El teléfono es requerido"
            placeholder="Tu teléfono celular"
            // validate={validatePhone}
            validations={{
              validate: value => {
                if (validatePhone(value)) return true
                return "Por favor ingresa un número válido de 10 digitos"
              },
            }}
            autoComplete="tel"
            type="tel"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            // customError="Por favor ingresa un número válido de 10 digitos"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <LocalPhoneIcon />
                </InputAdornment>
              ),
            }}
          />

          <WidgetTextField
            name={inputNames[3]}
            required="El email es requerido"
            label="Correo electrónico"
            placeholder="Tu correo electrónico"
            type="email"
            autoComplete="email"
            validations={{
              pattern: emailRegex,
            }}
            // customError="Correo electrónico inválido"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <Subtitle>Ambiente</Subtitle>
          <FormControl
            component="fieldset"
            margin="normal"
            sx={{ marginBottom: "1.5em" }}
          >
            <Controller
              name={inputNames[4]}
              control={control}
              defaultValue={areas[0].name}
              rules={{
                validate: validateArea,
              }}
              render={({ field }) => (
                <RadioGroup {...field}>
                  {areas?.map((item, index) => (
                    <S.CustomRadioButton
                      value={item.name}
                      control={<Radio />}
                      label={item.name}
                      key={`area-${index}`}
                      // disabled={!isRestaurantAvailable}
                    />
                  ))}
                </RadioGroup>
              )}
            />
          </FormControl>
          {areaError && (
            <Alert severity="error" style={{ marginBottom: "1rem" }}>
              {areaError}
            </Alert>
          )}
          <Button
            fullWidth
            className="continueBtn"
            type="button"
            onClick={handleNext}
          >
            Continuar
            <ArrowForwardIcon />
          </Button>
        </Grid>
      </Grid>
      <Disclaimer>
        <Typography>
          Asegúrate de colocar tus datos correctamente. La confirmación de tu
          reservación será enviada a tu correo electrónico y por WhatsApp.
        </Typography>
      </Disclaimer>
    </S.Wrapper>
  )
}
export default StepTwo
