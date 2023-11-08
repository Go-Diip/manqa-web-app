import React, { useState } from "react"
import * as S from "./header.styles.jsx"
import { Collapse, Container, Stack, useScrollTrigger } from "@mui/material"
import Logo from "../../assets/logo.svg"
import HEADER_ITEMS from "./header-items.json"
import HeaderItem from "./header-item/header-item.component.jsx"
import MenuIcon from "../../assets/menu.svg"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import { RESERVATIONS_ENABLED } from "../../utils/constants"
import { isBrowser } from "../../utils/utils.js"

const Header = ({ isHome }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isOpenDropdown, setIsOpenDropdown] = useState(true)
  const menuItems = HEADER_ITEMS.find(item => item.title === "Menú")?.items
  const viewportHeight = isBrowser ? window.innerHeight : 1000
  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: isHome ? viewportHeight : 100,
  })

  return (
    <>
      <S.Header
        elevation={scrollTrigger ? 4 : 0}
        position="relative"
        className={isHome ? "home" : ""}
      >
        <Container>
          <S.LogoWrapper url="/">
            <Logo />
          </S.LogoWrapper>
          <S.LinksWrapper>
            {HEADER_ITEMS.map((item, index) => (
              <HeaderItem key={`link-${index}`} {...item} />
            ))}
          </S.LinksWrapper>
          <S.MobileWrapper>
            {RESERVATIONS_ENABLED && (
              <S.StyledLink url="/reservaciones" style={{ color: "#4A97AF" }}>
                Reservar
              </S.StyledLink>
            )}
            <MenuIcon onClick={() => setIsMenuOpen(!isMenuOpen)} />
          </S.MobileWrapper>
        </Container>
      </S.Header>
      <S.MobileMenu
        onClick={() => setIsOpenDropdown(!isOpenDropdown)}
        className={isHome ? "home" : ""}
      >
        <Collapse in={isMenuOpen} unmountOnExit>
          <Container>
            <S.MenuTitle>Menu</S.MenuTitle>
            {isOpenDropdown ? <RemoveIcon /> : <AddIcon />}
          </Container>
          <Collapse in={isOpenDropdown} unmountOnExit>
            <Stack>
              {menuItems?.map((item, index) => (
                <S.MobileMenuItem key={`link-${index}`} url={item.url}>
                  {item.title}
                </S.MobileMenuItem>
              ))}
            </Stack>
          </Collapse>
        </Collapse>
      </S.MobileMenu>
    </>
  )
}
export default Header
