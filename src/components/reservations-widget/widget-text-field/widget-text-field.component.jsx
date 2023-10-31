import React from "react"
import * as S from "./widget-text-field.styles"
import { useFormContext, Controller } from "react-hook-form"
import { getRHFErrorMessage } from "../../../utils/utils"

const CustomInput = ({
  title,
  name,
  validations,
  label,
  className,
  type = "text",
  variant = "outlined",
  multiline,
  defaultValue = "",
  placeholder,
  required,
  ...otherProps
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  const error = getRHFErrorMessage(errors, name)

  return (
    <Controller
      rules={{
        required,
        ...validations,
      }}
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <S.CustomInput
          error={!!error}
          margin="normal"
          InputLabelProps={{ shrink: true }}
          required={!!validations?.required}
          variant={variant}
          label={label}
          helperText={error}
          type={type}
          multiline={multiline}
          placeholder={placeholder}
          {...otherProps}
          {...field}
        />
      )}
    />
  )
}

export default CustomInput
