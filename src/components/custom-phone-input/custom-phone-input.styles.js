import styled from "@emotion/styled"
import { FormControl, InputLabel, Typography } from "@mui/material"

export const PhoneInputWrapper = styled(FormControl)`
  width: 100%;
  /* position: relative; */
  .MuiInput-root {
    margin: 0;
  }
  .MuiInputBase-root {
    min-height: unset;
  }
  > .PhoneInputInput {
    width: 100%;
    box-sizing: border-box;
    font-style: normal;
    font-weight: 400;
    font-size: ${({ theme }) => theme.typography.pxToRem(14)};
    line-height: 144%;
    letter-spacing: 0.01em;
    height: 56px;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.23);
    input {
      padding: 21.5px 14px;
      font-size: 1rem;
      line-height: 1.5rem;
      border-radius: 4px;
      color: rgba(0, 0, 0, 0.87);
    }
    .MuiInputBase-root {
      ::after,
      ::before {
        display: none;
      }
    }
    .PhoneInputCountry {
      margin-left: 14px;
    }
    &:hover {
      outline: 0;
      /* border: 1px solid rgba(0, 0, 0, 85); */
    }
    ::before,
    ::after {
      border: 0 !important;
    }
    &.PhoneInput--error {
      &:hover {
        outline-color: ${({ theme }) => theme.palette.text.error};
      }
    }
  }
`

export const Label = styled(InputLabel)`
  letter-spacing: 0.15px;
  color: rgba(0, 0, 0, 0.3);
  background-color: #f7f7f7;
  padding: 0 0.25rem;
  margin-left: -0.25rem;
  top: 8px;
  &.MuiInputLabel-shrink {
    top: 0;
  }
`

export const ErrorMessage = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.error};
  margin-top: 3px;
  margin-left: 14px;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.66;
  text-align: left;
`
