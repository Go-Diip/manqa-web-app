import React, { useEffect, useState } from "react"
import * as S from "./reservations-widget.styles"
import WidgetHeader from "./widget-header/widget-header.component"
import { graphql, useStaticQuery } from "gatsby"
import { FormProvider, useForm } from "react-hook-form"
import { Grid, Tab, Typography } from "@mui/material"
import StepOne from "./step-one/step-one.component"
import StepTwo from "./step-two/step-two.component"
import StepThree from "./step-three/step-three.component"
// import { setReservation } from "../../services/reservations"
import Spinner from "../spinner/spinner.component"
import { navigate } from "gatsby-link"
import { useQuery } from "@tanstack/react-query"
import {
  createReservation,
  evaluateCalendarDate,
  getLocationInfo,
  getTimesArray,
} from "../../utils/reservations-api"
import { TIME_STATUSES } from "../../utils/constants"
import { evaluateDate } from "../../utils/utils"
import dayjs from "dayjs"
// import { sendGtagReservationMadeEvent } from "../../gtag-utils"
// import addToMailchimp from "gatsby-plugin-mailchimp"

export const STEPS = {
  SELECT_TABLE: 0,
  PERSONAL_DATA: 1,
  FINALIZE: 2,
}

const ReservationsWidget = () => {
  const staticQuery = useStaticQuery(graphql`
    query {
      reservations: file(relativePath: { eq: "reservations.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `)
  const [currentStep, setCurrentStep] = useState(STEPS.SELECT_TABLE)
  const [isLoading, setIsLoading] = useState(false)
  const [isOpenDialog, setIsOpenDialog] = useState(false)
  const [overviewData, setOverviewData] = useState(null)
  const [overviewText, setOverviewText] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [isFirstRender, setIsFirstRender] = useState(true)
  const [timesArray, setTimesArray] = useState([])
  const handleGetData = async () => {
    const res = await getLocationInfo()
    // console.log("res :>> ", res)
    const data = res?.data?.data
    if (res?.status === "success") {
      setTimesArray(
        getTimesArray(data.openTime, data.closeTime, +data.interval),
      )
      setValue("area", data.areas[0]?.name)
      setIsFirstRender(false)
      return data
    }
  }

  const {
    data: locationInfo,
    // error,
    isLoading: isDataLoading,
  } = useQuery({
    queryKey: ["reservations"],
    queryFn: handleGetData,
    refetchInterval: 10000,
  })
  // console.log("locationInfo :>> ", locationInfo)
  const areas = locationInfo?.areas

  const [availableTimes, setAvailableTimes] = useState([])
  const methods = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: {
      date: dayjs(),
    },
  })

  const { watch, setValue, trigger } = methods

  const reservationDate = watch("date")
  // console.log("reservationDate :>> ", reservationDate)

  const isOpenDay = evaluateDate(reservationDate, locationInfo?.openDays)

  const handleChange = (event, newValue) => {
    setCurrentStep(newValue)
  }

  const onSubmit = async data => {
    setIsLoading(true)
    const jsDate = dayjs(data.date)
    const date = dayjs(`${jsDate.format("YYYY-MM-DD")} ${data.time}`)
    // console.log("date :>> ", date);

    data.date = date.toISOString()
    console.log("data :>> ", data)

    const reservationRes = await createReservation(data)
    // console.log("reservationRes :>> ", reservationRes)
    if (reservationRes?.status !== "success") {
      setErrorMessage(reservationRes?.message ?? "Something was wrong")
      return
    }

    setOverviewData({
      ...data,
      date: `${jsDate.format("DD/MM/YYYY")} a las ${data.time}`,
    })
    setIsLoading(false)
  }
  // console.log("isOpenDay :>> ", isOpenDay)

  const handleChangeDate = async () => {
    const availability = await evaluateCalendarDate(
      timesArray,
      reservationDate?.format("YYYY-MM-DD"),
      isOpenDay,
    )
    // console.log("availability :>> ", availability)
    const newTimes =
      availability?.filter(item => item.status === TIME_STATUSES.ACTIVE) ?? []
    // console.log("newTimes :>> ", newTimes)
    setAvailableTimes(newTimes)
    setValue("time", newTimes[0]?.value)
    trigger("time")
  }

  useEffect(() => {
    if (isFirstRender) return
    handleChangeDate()
  }, [reservationDate, isFirstRender, timesArray])

  useEffect(() => {
    const currentTime = dayjs()
    const minTime = dayjs("11:30", "H:mm")
    const maxTime = dayjs("22:30", "H:mm")
    const isSunday = dayjs().day() === 0
    const isMonday = dayjs().day() === 1
    if (
      currentTime.isBefore(minTime) ||
      currentTime.isAfter(maxTime) ||
      isSunday ||
      isMonday
    ) {
      setOverviewText(
        "Hemos recibido tu solicitud de reservación. Recibirás la confirmación vía WhatsApp y correo electrónico durante nuestro horario de atención para reservaciones: Martes a Sábado de 11:30am a 10:30pm.  ",
      )
    } else {
      setOverviewText(
        "Hemos recibido tu solicitud de reservación, en breve recibirás un mensaje con el estado de tu reserva dependiendo de nuestra disponibilad,  via WhatsApp y correo electrónico.",
      )
    }
    if (overviewData) {
      setIsOpenDialog(true)
      // setShouldSubmit(false)
    }
  }, [overviewData])

  return (
    <FormProvider {...methods}>
      {isDataLoading || (isLoading && <Spinner />)}
      <S.Wrapper>
        <S.ImageWrapper tag="div" img={staticQuery.reservations} />
        <S.MainWrapper>
          <WidgetHeader />
          <S.StepperTabs
            value={currentStep}
            variant="fullWidth"
            onChange={handleChange}
            aria-label="Reservation "
          >
            <Tab
              label="1. Reserva una mesa"
              disabled={currentStep <= STEPS.SELECT_TABLE}
            />
            <Tab
              label="2. Datos Personales"
              disabled={currentStep <= STEPS.PERSONAL_DATA}
            />
            <Tab
              label="3. Finalizar"
              disabled={currentStep <= STEPS.FINALIZE}
            />
          </S.StepperTabs>
          <S.StepsWrapper>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              {currentStep === STEPS.SELECT_TABLE && (
                <StepOne
                  setCurrentStep={setCurrentStep}
                  availableTimes={availableTimes}
                />
              )}
              {currentStep === STEPS.PERSONAL_DATA && (
                <StepTwo
                  setCurrentStep={setCurrentStep}
                  availableTimes={availableTimes}
                  areas={areas}
                />
              )}
              {currentStep === STEPS.FINALIZE && (
                <StepThree
                  setCurrentStep={setCurrentStep}
                  errorMessage={errorMessage}
                />
              )}
            </form>
          </S.StepsWrapper>
          <S.Disclaimer>
            <Grid container spacing={3}>
              <Grid item xs={12} md={8}>
                {/*<Typography>Horario de atención: Martes a Sábado</Typography>*/}
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography>
                  <b>Horario </b>
                </Typography>
                <Typography>Martes a Sábado:</Typography>
                <Typography>
                  Restaurante <br /> 12:30pm - 3:30pm 7:00pm - 10:30pm
                </Typography>
                <Typography>
                  Segundo Piso <br />
                  7:00pm - 12:00am
                </Typography>
                <Typography>Domingo y Lunes: cerrados</Typography>
              </Grid>
            </Grid>
          </S.Disclaimer>
        </S.MainWrapper>
        <S.CustomModal
          disableEscapeKeyDown={true}
          onClose={() => setIsOpenDialog(false)}
          open={isOpenDialog}
        >
          <Grid container spacing={5} alignItems="center">
            <Grid item xs={12} sm={6}>
              <S.ModalName>Hola {overviewData?.firstName}</S.ModalName>
              <S.ModalDescription>{overviewText}</S.ModalDescription>
            </Grid>
            <Grid item xs={12} sm={6}>
              <S.ModalLabel sx={{ marginBottom: "1em" }}>
                <b>Datos de Reservación</b>
              </S.ModalLabel>
              <S.ModalLabel>Nombre reserva</S.ModalLabel>
              <S.ModalText>{`${overviewData?.firstName} ${overviewData?.lastName}`}</S.ModalText>
              <S.ModalLabel>Fecha de reserva</S.ModalLabel>
              <S.ModalText>{overviewData?.date}</S.ModalText>
              <S.ModalLabel>Numero de personas</S.ModalLabel>
              <S.ModalText>{overviewData?.seats}</S.ModalText>
            </Grid>
          </Grid>
          <div>
            <S.ModalButton onClick={() => navigate("/")}>
              Entendido
            </S.ModalButton>
          </div>
        </S.CustomModal>
      </S.Wrapper>
    </FormProvider>
  )
}
export default ReservationsWidget
