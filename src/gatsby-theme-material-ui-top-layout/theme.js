import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  navHeight: 74,
  sectionPadding: "padding-top: 1.5em; padding-bottom: 1.5em;",
  fonts: {
    primary: "Josefin Sans, sans-serif",
    secondary: "Julius Sans One, sans-serif",
  },
  layout: {
    contentWidth: 1236,
  },
  palette: {
    primary: {
      // contrastText: "rgba(0, 0, 0, 0.87)",
      main: "#63A8BE",
      light: "#274747",
      dark: "#70797A",
    },
    secondary: {
      // contrastText: "rgba(0, 0, 0, 0.87)",
      main: "#4A97AF",
      light: "#E9E9E9",
      dark: "#1F1D2F",
    },
    tertiary: {
      main: "#2C9ED0",
    },
    text: {
      primary: "#363636",
      secondary: "#F5F5F2",
      content: "#000000",
      tertiary: "#1A2933",
      disabled: "#10355A",
      hint: "#10355A",
      light: "#FFFFFF",
    },
    alternate: {
      main: "rgb(247, 249, 250)",
      dark: "#e8eaf6",
    },
  },
  typography: {
    fontFamily: `"Josefin Sans", "Julius Sans One", "Arial", sans-serif`,
  },
})

export default theme
