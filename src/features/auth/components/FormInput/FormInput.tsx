import { Field } from "react-final-form"
import { Input, Spacer, Typography } from "@thiagoporto/minim-ui"

import type { IFormInputProps } from "@features/auth/types"

export const FormInput: React.FC<IFormInputProps> = ({
  label,
  name,
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

          <Input {...input} {...props} error={meta.touched && !!meta.error} />

          {meta.error && meta.touched && (
            <>
              <Spacer variant="stack" size="qk" />

              <Typography
                textStyle="error"
                aria-label="Input error message"
                as="span"
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
