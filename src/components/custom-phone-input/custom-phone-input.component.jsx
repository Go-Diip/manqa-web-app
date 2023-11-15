import React from "react"
import * as S from "./custom-phone-input.styles"
import { isValidPhoneNumber } from "react-phone-number-input"
import { Controller, useFormContext } from "react-hook-form"
import PhoneInput from "react-phone-number-input"
import { Input } from "@mui/material"
import { forwardRef } from "react"
import { getRHFErrorMessage } from "../../utils/utils"
import flags from "react-phone-number-input/flags"
import "react-phone-number-input/style.css"

const CustomPhoneInput = ({ name, label, required }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  if (!control) return null

  const error = getRHFErrorMessage(errors, name)

  return (
    <S.PhoneInputWrapper>
      {label && (
        <S.Label className={!!error ? "error" : ""} shrink>
          {label}
          {required && " *"}
        </S.Label>
      )}
      <Controller
        name={name}
        control={control}
        rules={{
          validate: value => {
            if (!value) return "Por favor, ingresa un número de teléfono."
            const isValid = isValidPhoneNumber(value)
            if (!isValid)
              return "Por favor, ingresa un número de teléfono válido."
          },
          required: required,
        }}
        render={({ field: { onChange, ...others } }) => (
          <PhoneInput
            {...others}
            className={`${!!error ? "PhoneInput--error" : ""} PhoneInputInput`}
            onChange={onChange}
            inputComponent={PhoneNumberInput}
            flags={flags}
            defaultCountry="EC"
            // onCountryChange={() => onChange("")}
          />
        )}
      />
      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
    </S.PhoneInputWrapper>
  )
}

const PhoneNumberInput = forwardRef((props, ref) => {
  return <Input {...props} inputRef={ref} />
})

PhoneNumberInput.displayName = "PhoneRef"

export default CustomPhoneInput
