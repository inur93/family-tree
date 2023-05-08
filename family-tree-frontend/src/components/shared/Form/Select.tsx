import { FormControl, InputLabel, MenuItem, Select as MuiSelect, SelectChangeEvent } from '@mui/material'

type Option<T> = {
  key: T
  label: string
}

type BaseProps<T> = {
  value?: T
  onChange: (event: SelectChangeEvent<T>, child: React.ReactNode) => void
}

type Props<T> = BaseProps<T> & {
  name: string
  label: string
  options: Option<T>[]
  disabled?: boolean
}

function Select<T extends string | number>({ options, name, label, onChange, value, disabled }: Props<T>) {
  return (
    <FormControl>
      <InputLabel id={`${name}-label`}>{label}</InputLabel>
      <MuiSelect
        labelId={`${name}-label`}
        id={`${name}-id`}
        value={value}
        name={name}
        label={label}
        onChange={onChange}
        disabled={disabled}
      >
        {options.map((x) => (
          <MenuItem
            key={x.key}
            value={x.key}
          >
            {x.label}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  )
}

export default Select
