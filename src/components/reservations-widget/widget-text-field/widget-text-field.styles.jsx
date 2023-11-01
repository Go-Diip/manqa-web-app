import styled from "@emotion/styled"
import { TextField, Typography } from "@mui/material"

export const Title = styled(Typography)`
  font-size: ${({ theme }) => theme.typography.pxToRem(18)};
  line-height: ${({ theme }) => theme.typography.pxToRem(18)};
  font-weight: 700;
  letter-spacing: -0.01em;
`

export const CustomInput = styled(TextField)`
  width: 100%;
  label {
    color: rgba(0, 0, 0, 0.23);
  }
`
