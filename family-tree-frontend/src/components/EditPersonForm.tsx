import { Formik, Form } from 'formik'
import { ICreatePersonDto, SexDto } from '../api/ApiClient'
import DateTimeField from './shared/Form/DateTimeField'
import TextField from './shared/Form/TextField'
import Select from './shared/Form/Select'
import { Button } from '@mui/material'

type Props = {
  onSubmit: (person: ICreatePersonDto) => Promise<void>
  person: ICreatePersonDto
}

const EditPersonForm = ({ onSubmit, person }: Props) => {
  const handleSubmit = (values: ICreatePersonDto) => {
    if (values.birthday) {
      values.birthday = new Date(values.birthday)
    }
    onSubmit(values)
  }
  return (
    <Formik
      initialValues={person}
      onSubmit={handleSubmit}
    >
      {({ values, handleChange, handleBlur }) => (
        <Form>
          <TextField
            name="firstname"
            label="Firstname"
            placeholder="Firstname"
            value={values.firstname}
            onBlur={handleBlur}
            onChange={handleChange}
          />

          <TextField
            name="middlename"
            label="Middlename"
            placeholder="Middlename"
            value={values.middlename}
            onBlur={handleBlur}
            onChange={handleChange}
          />

          <TextField
            name="lastname"
            label="Lastname"
            placeholder="Lastname"
            value={values.lastname}
            onBlur={handleBlur}
            onChange={handleChange}
          />

          <DateTimeField
            name="birthday"
            label="Birthday"
            value={values.birthday}
            onBlur={handleBlur}
            onChange={handleChange}
            dateOnly
          />

          <Select
            name="sex"
            label="Sex"
            value={values.sex}
            options={[
              { key: SexDto.Male, label: 'Male' },
              { key: SexDto.Female, label: 'Female' }
            ]}
            onChange={handleChange}
          />
          <Button type="submit">Update</Button>
        </Form>
      )}
    </Formik>
  )
}

export default EditPersonForm
