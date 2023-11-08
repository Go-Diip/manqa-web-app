import React from "react"
import * as S from "./meet-us.styles"
import { Box, Grid } from "@mui/material"
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded"
import MosaicPattern from "../../assets/mosaic-pattern.svg"
import { RESERVATIONS_ENABLED } from "../../utils/constants"

const MeetUs = ({ content, image, link }) => {
  return (
    <S.Section>
      <Grid container>
        <Grid item xs={12} sm={6} margin={{ xs: "0 1.5rem", sm: "0" }}>
          <S.TextWrapper>
            <Box maxWidth="656px">
              <S.Content>{content}</S.Content>
              <Box display="flex" justifyContent={{ md: "flex-end" }}>
                <S.StyledAnchor url={link.url}>
                  Conócenos
                  <ArrowForwardIosRoundedIcon />
                </S.StyledAnchor>
              </Box>
            </Box>
          </S.TextWrapper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <S.ImageWrapper>
            <S.StyledImage img={image} arPaddingPercentage={102} />
          </S.ImageWrapper>
        </Grid>
      </Grid>
      {RESERVATIONS_ENABLED && (
        <S.BottomWrapper>
          <S.ReservationBtn href="/reservaciones">Reservar</S.ReservationBtn>

          <S.PatternWrapper>
            <MosaicPattern className="left" />
            <MosaicPattern className="right" />
            <MosaicPattern className="top" />
            <MosaicPattern className="bottom" />
          </S.PatternWrapper>
        </S.BottomWrapper>
      )}
    </S.Section>
  )
}

export default MeetUs
