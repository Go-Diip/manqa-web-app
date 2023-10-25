import React from "react"
import * as S from "./meet-us.styles"
import { Box, Grid, useMediaQuery } from "@mui/material"
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded"
import { useTheme } from "@emotion/react"

const MeetUs = ({ content, image, link }) => {
  const theme = useTheme()
  const upMd = useMediaQuery(theme.breakpoints.up("md"))

  return (
    <S.Section>
      <Grid container>
        <Grid item xs={12} md={6}>
          <S.TextWrapper>
            <Box maxWidth="656px">
              <S.Content>{content}</S.Content>
              <Box display="flex" justifyContent="flex-end">
                <S.StyledAnchor href={link.url}>
                  Conócenos
                  <ArrowForwardIosRoundedIcon />
                </S.StyledAnchor>
              </Box>
            </Box>
          </S.TextWrapper>
        </Grid>
        <Grid item xs={12} md={6}>
          <S.StyledImage img={image} arPaddingPercentage={upMd ? null : "55"} />
        </Grid>
      </Grid>
    </S.Section>
  )
}

export default MeetUs
