import { TextField as MuiTextField } from '@mui/material'
import { format } from 'date-fns'
import { useField } from 'formik'

interface Props {
  name: string
  label: string
  dateOnly?: boolean
  placeholder?: string
  value?: Date | null
  multiline?: boolean
  minRows?: number
  onChange?: (e: React.ChangeEvent<any>) => void
  onBlur?: (e: React.ChangeEvent<any>) => void
}

const formatDateTime = (date: Date | null | undefined, dateOnly?: boolean) => {
  if (!date) {
    return ""
  }

  if (typeof date === 'string') {
    return date || ""
  }
  try {
    return format(date, dateOnly ? 'yyyy-MM-dd' : "yyyy-MM-dd'T'HH:mm")
  } catch (e) {
    return date || ""
  }
}

const DateTimeField = ({ value, dateOnly, ...props }: Props) => {
  const [, meta] = useField({ name: props.name })
  const formattedValue = formatDateTime(value, dateOnly)
  return (
    <>
      <MuiTextField
        type={dateOnly ? 'date' : 'datetime-local'}
        {...props}
        value={formattedValue}
        InputLabelProps={{ shrink: true }}
        error={meta.touched && !!meta.error}
        helperText={meta.touched && meta.error}
      />
    </>
  )
}

export default DateTimeField
