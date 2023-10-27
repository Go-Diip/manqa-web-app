import React from "react"
import * as S from "./about-hero.styles"
import { Container, Grid } from "@mui/material"
import parse from "html-react-parser"
import CustomImage from "../../components/custom-image/custom-image.component"

const AboutHero = ({ firstContent, image, secondContent, title }) => {
  return (
    <S.Section>
      <Container>
        <Grid
          container
          rowSpacing={{ xs: 4, md: 7 }}
          columnSpacing={{ xs: 4, md: 10 }}
        >
          <Grid item xs={12} sm={6} display="flex" alignItems="center">
            {firstContent && <S.Content>{parse(firstContent)}</S.Content>}
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomImage img={image} arPaddingPercentage={127} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <S.Title>{title}</S.Title>
          </Grid>
          <Grid item xs={12} sm={6} display="flex" justifyContent="center">
            {secondContent && (
              <S.Content className="remove-margin">
                {parse(secondContent)}
              </S.Content>
            )}
          </Grid>
        </Grid>
      </Container>
    </S.Section>
  )
}

export default AboutHero
