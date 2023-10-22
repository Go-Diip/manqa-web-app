import React from "react"
import * as S from "./about-us.styles"
import { graphql, useStaticQuery } from "gatsby"
import CustomImage from "../../components/custom-image/custom-image.component"
import { Grid, Stack } from "@mui/material"
import CustomVideo from "../../components/custom-video/custom-video.component"

const AboutUs = ({ title, description, items }) => {
  const staticQuery = useStaticQuery(graphql`
    query {
      pattern: file(relativePath: { eq: "about-us-pattern.jpg" }) {
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
      <CustomImage img={staticQuery.pattern} alt="pattern" />
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
                <Grid item xs={6} md={7}>
                  <CustomVideo autoplay video={item.video} />
                </Grid>
                <Grid item xs={6} md={5}>
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
      <S.BottomWrapper>
        <S.ReservationBtn href="/reservaciones">Reservar</S.ReservationBtn>
      </S.BottomWrapper>
    </S.Section>
  )
}

export default AboutUs
