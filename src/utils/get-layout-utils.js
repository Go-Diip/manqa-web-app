import React from "react"
import MiscContent from "../layouts/MiscContent"
import { v4 as uuidv4 } from "uuid"
import HomeHero from "../layouts/HomeHero"
import AboutUs from "../layouts/AboutUs"
import MeetUs from "../layouts/MeetUs"
import TestimonialsSlider from "../layouts/TestimonialsSlider"
import AboutHero from "../layouts/AboutHero"

export const getPageLayout = layout => {
  const layoutName = layout?.fieldGroupName?.split("_").pop().trim()
  if (!layoutName) return null
  switch (layoutName) {
    case "MiscContent":
      return <MiscContent key={uuidv4()} {...layout} />
    case "HomeHero":
      return <HomeHero key={uuidv4()} {...layout} />
    case "AboutUs":
      return <AboutUs key={uuidv4()} {...layout} />
    case "MeetUs":
      return <MeetUs key={uuidv4()} {...layout} />
    case "TestimonialsSlider":
      return <TestimonialsSlider key={uuidv4()} {...layout} />
    case "AboutHero":
      return <AboutHero key={uuidv4()} {...layout} />
  }
}
