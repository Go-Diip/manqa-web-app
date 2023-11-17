import React, { useState } from "react"
import * as S from "./header-item.styles"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import { MenuItem } from "@mui/material"
import { RESERVATIONS_ENABLED } from "../../../utils/constants"

const HeaderItem = ({ title, url, items }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const isOpenDropdown = Boolean(anchorEl)
  const handleClick = event => {
    if (items) {
      setAnchorEl(event.currentTarget)
    }
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const Link = items ? S.StyledText : S.StyledLink

  if (title === "Reservar" && !RESERVATIONS_ENABLED) {
    return null
  }

  return (
    <>
      <Link
        url={url}
        className={`${items ? "with-icon" : ""} ${
          isOpenDropdown ? "active" : ""
        }`}
        onClick={handleClick}
      >
        {title}
        {items && <>{isOpenDropdown ? <RemoveIcon /> : <AddIcon />}</>}
      </Link>
      {items?.length > 0 && (
        <S.StyledMenu
          anchorEl={anchorEl}
          open={isOpenDropdown}
          onClose={handleClose}
        >
          {items?.map((item, index) => (
            <MenuItem key={`link-${index}`} onClick={handleClose}>
              <S.StyledLink href={item.url} target={item?.target}>
                {item.title}
              </S.StyledLink>
            </MenuItem>
          ))}
        </S.StyledMenu>
      )}
    </>
  )
}

export default HeaderItem
