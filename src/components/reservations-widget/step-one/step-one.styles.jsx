import styled from "@emotion/styled"

export const Wrapper = styled.div`
  .MuiInputLabel-root {
    color: ${({ theme }) => theme.palette.text.primary};
  }

  .MuiInputBase-root {
    border-radius: 0;
  }

  .date,
  .time {
    .MuiInputBase-root,
    input {
      cursor: pointer;
    }
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    .MuiFormControl-root {
      margin-bottom: 1.5em;
    }
  }

  /* ${({ theme }) => theme.breakpoints.up("lg")} {
    .continueBtn {
      border-top-left-radius: 0 !important;
      border-bottom-left-radius: 0 !important;
    }
  } */
`

export const DatePicketWrapper = styled.div`
  .MuiFormControl-root {
    width: 100%;
  }
`
