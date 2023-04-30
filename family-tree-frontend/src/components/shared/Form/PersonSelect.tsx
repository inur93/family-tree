import { Autocomplete, TextField } from '@mui/material'
import { IBasicPersonDto } from '../../../api/ApiClient'

type Props = {
  label: string
  name: string
  value: string
  people: IBasicPersonDto[]
  setFieldValue?: (field: string, value: any) => void
}

const PersonSelect = ({ value, label, name, people, setFieldValue }: Props) => {
  return (
    <Autocomplete
      disablePortal
      id={`person-select-${name}`}
      value={people.find((x) => x.id === value) || null}
      options={people}
      getOptionLabel={(option) => `${option.displayName} (${option.birthday.getFullYear()})`}
      onChange={(e, value, reason) => {
        setFieldValue && setFieldValue(name, value?.id)
      }}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      renderInput={(params) => (
        <TextField
          {...params}
          name={name}
          label={label}
        />
      )}
    />
  )
}

export default PersonSelect
