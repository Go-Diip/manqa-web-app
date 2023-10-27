import React from "react"
import * as S from "./footer.styles"
import { Grid, Stack } from "@mui/material"
import LogoSvg from "../../assets/icon.svg"
import Instagram from "../../assets/instagram.svg"
import Facebook from "../../assets/facebook.svg"
import Tripadvisor from "../../assets/tripadvisor.svg"
import Google from "../../assets/google.svg"

const Footer = () => {
  return (
    <S.Section>
      <S.Wrapper>
        <S.Line />
        <Grid container spacing={{ xs: 5, md: 3 }}>
          <Grid item xs={12} md={4}>
            <Stack spacing={2}>
              <S.InfoText>
                Horarios de atención: <br /> Lunes a domingo 12:00-20:30
              </S.InfoText>
              <S.InfoAnchor href="tel:+593963548986">
                +5939 6354 8986
              </S.InfoAnchor>
              <S.InfoAnchor href="mailto:manqa.uio@gmail.com">
                manqa.uio@gmail.com
              </S.InfoAnchor>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <S.InfoText>
              Avenida 6 de diciembre n35-244 y Germán Alemán, C.C. Megamaxi
              Planta Baja, Local 103.
            </S.InfoText>
          </Grid>
          <Grid item xs={12} md={4}>
            <S.LogoWrapper url="/">
              <LogoSvg />
            </S.LogoWrapper>
          </Grid>
        </Grid>
        <S.BottomWrapper>
          <S.InfoText className="diip">
            ©Manqa 2023. Desarrollado por{" "}
            <span className="underline">Diip.</span>
          </S.InfoText>
          <Stack
            spacing={{ xs: 5, md: 7.5 }}
            direction="row"
            justifyContent={{ xs: "space-between", md: "flex-end" }}
            alignItems="center"
          >
            <a>
              <Instagram />
            </a>
            <a>
              <Facebook />
            </a>
            <a>
              <Tripadvisor />
            </a>
            <a>
              <Google />
            </a>
          </Stack>
        </S.BottomWrapper>
      </S.Wrapper>
    </S.Section>
  )
}

export default Footer
