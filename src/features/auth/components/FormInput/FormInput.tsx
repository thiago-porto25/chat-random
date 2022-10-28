import { Field } from "react-final-form"
import { Input, Spacer, Typography } from "@thiagoporto/minim-ui"

import { testId } from "@src/test-utils"

import type { IFormInputProps } from "@features/auth/types"

import { InputContainer } from "./styles"

export const FormInput: React.FC<IFormInputProps> = ({
  label,
  name,
  onChange,
  ...props
}) => {
  return (
    <Field name={name}>
      {({ input, meta }) => (
        <div>
          {label && (
            <>
              <Typography htmlFor={name} textStyle="inputLabel" as="label">
                {label}
              </Typography>
              <Spacer variant="stack" size="nn" />
            </>
          )}

          <InputContainer>
            <Input
              {...input}
              {...props}
              onChange={(e) => {
                input.onChange(e)
                onChange && onChange(e)
              }}
              error={meta.touched && !!meta.error}
            />
          </InputContainer>

          {meta.error && meta.touched && (
            <>
              <Spacer variant="stack" size="qk" />

              <Typography
                textStyle="error"
                aria-label="Input error message"
                as="span"
                data-testid={testId.inputError}
              >
                {meta.error}
              </Typography>
            </>
          )}
        </div>
      )}
    </Field>
  )
}
