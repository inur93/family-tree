import { TextField as MuiTextField } from '@mui/material'
import { useField } from 'formik'
import React from 'react'

type Props = {
  name: string
  label: string
  placeholder?: string
  value?: string | null
  multiline?: boolean
  minRows?: number
  onChange?: (e: React.ChangeEvent<any>) => void
  onBlur?: (e: React.ChangeEvent<any>) => void
}
const TextField = ({value, ...props}: Props) => {
  const [, meta] = useField({ name: props.name })
  return (
    <>
      <MuiTextField
        type="text"
        {...props}
        value={value === null || value === undefined ? "" : value}
        error={meta.touched && !!meta.error}
        helperText={meta.touched && meta.error}
      />
    </>
  )
}

export default TextField
