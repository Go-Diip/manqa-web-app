import React from "react"
import * as S from "./about-us.styles"
import { graphql, useStaticQuery } from "gatsby"
import { Grid, Stack } from "@mui/material"
import CustomVideo from "../../components/custom-video/custom-video.component"
import FlowerPattern from "../../assets/flower-pattern.svg"
import { RESERVATIONS_ENABLED } from "../../utils/constants"

const AboutUs = ({ title, description, items }) => {
  const staticQuery = useStaticQuery(graphql`
    query {
      pattern: file(relativePath: { eq: "about-us-pattern.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `)

  return (
    <S.Section>
      <S.TopWrapper>
        <S.TopContainer>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
        </S.TopContainer>
      </S.TopWrapper>
      <S.PatternImage img={staticQuery.pattern} alt="pattern" />
      <S.MiddleWrapper>
        {items?.length > 0 && (
          <Grid container>
            {items.map((item, index) => (
              <Grid
                container
                item
                xs={12}
                md={6}
                key={`item-${index}`}
                direction={index % 2 ? "row-reverse" : "row"}
              >
                <Grid item xs={12} sm={6} md={7}>
                  <S.StyledVideo
                    autoplay
                    video={item.video}
                    arPaddingPercentage={75}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={5}>
                  <S.ItemText>
                    <S.ItemTitle>{item.title}</S.ItemTitle>
                    <Stack spacing={{ xs: 2, md: 4 }}>
                      {item.subItems?.map(({ button }, index) => (
                        <S.StyledBtn
                          color="secondary"
                          href={button?.url}
                          target={button?.target}
                          key={`button-${index}`}
                        >
                          {button?.title}
                        </S.StyledBtn>
                      ))}
                    </Stack>
                  </S.ItemText>
                </Grid>
              </Grid>
            ))}
          </Grid>
        )}
      </S.MiddleWrapper>
      {RESERVATIONS_ENABLED && (
        <S.BottomWrapper>
          <S.ReservationBtn href="/reservaciones">Reservar</S.ReservationBtn>

          <S.PatternWrapper>
            <FlowerPattern />
            <FlowerPattern className="reverse" />
          </S.PatternWrapper>
        </S.BottomWrapper>
      )}
    </S.Section>
  )
}

export default AboutUs
