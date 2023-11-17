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
                Horarios de atención: <br /> Lunes a domingo 12:00-20:0
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
            ©Manqa {new Date().getFullYear()}. Desarrollado por{" "}
            <a
              href="https://godiip.com/?utm_source=manqa+powered+by+link&utm_medium=link+on+bottom+of+website&utm_campaign=manqa+powered+by+link"
              className="underline"
              target="_blank"
            >
              Diip.
            </a>
            <Stack
              display={{ xs: "flex", md: "none" }}
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 1, md: 3 }}
              marginTop={{ xs: 1 }}
            >
              <S.InfoAnchor url="/politicas-de-privacidad/">
                Políticas de privacidad
              </S.InfoAnchor>
              <S.InfoAnchor url="/terminos-y-condiciones/">
                Términos y condiciones
              </S.InfoAnchor>
            </Stack>
          </S.InfoText>
          <Stack
            display={{ xs: "none", md: "flex" }}
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 1, md: 3 }}
          >
            <S.InfoAnchor url="/politicas-de-privacidad/">
              Políticas de privacidad
            </S.InfoAnchor>
            <S.InfoAnchor url="/terminos-y-condiciones/">
              Términos y condiciones
            </S.InfoAnchor>
          </Stack>
          <Stack
            spacing={{ xs: 5, md: 7.5 }}
            direction="row"
            justifyContent={{ xs: "space-between", md: "flex-end" }}
            alignItems="center"
          >
            <a
              href="https://instagram.com/manqa.uio?igshid=MzMyNGUyNmU2YQ=="
              target="_blank"
            >
              <Instagram />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100093669645253&mibextid=LQQJ4d"
              target="_blank"
            >
              <Facebook />
            </a>
            <a
              href="https://www.tripadvisor.com/Restaurant_Review-g294308-d26712527-Reviews-Manqa_by_Muru-Quito_Pichincha_Province.html"
              target="_blank"
            >
              <Tripadvisor />
            </a>
            <a href="https://maps.app.goo.gl/KLeaoH9y4Y5KbaJy7" target="_blank">
              <Google />
            </a>
          </Stack>
        </S.BottomWrapper>
      </S.Wrapper>
    </S.Section>
  )
}

export default Footer
