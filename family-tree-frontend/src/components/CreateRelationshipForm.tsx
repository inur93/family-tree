import { Form, Formik } from 'formik'
import { FamilyTreeApi } from '../api'
import { ICreateRelationshipDto, RelationshipTypeDto } from '../api/ApiClient'
import { useData } from '../hooks/useData'
import Button from './shared/Form/Button'
import DateTimeField from './shared/Form/DateTimeField'
import PersonSelect from './shared/Form/PersonSelect'
import Select from './shared/Form/Select'

type Props = {
  onSubmit: (relationship: ICreateRelationshipDto) => Promise<void>
  personId?: string
  relatedId?: string
  type?: RelationshipTypeDto
}

const CreateRelationshipForm = ({ onSubmit, ...defaultValues }: Props) => {
  const [people] = useData(() => FamilyTreeApi.searchPeople(undefined))
  const initialValues: ICreateRelationshipDto = {
    personId: '',
    relatedId: '',
    type: RelationshipTypeDto.Spouse,
    from: undefined,
    to: undefined,
    ...defaultValues
  }
  const handleSubmit = (values: ICreateRelationshipDto) => {
    if (values.from) {
      values.from = new Date(values.from)
    }
    if (values.to) {
      values.to = new Date(values.to)
    }
    onSubmit(values)
  }
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {({ values, handleChange, handleBlur, setFieldValue }) => (
        <Form>
          <PersonSelect
            name="personId"
            label="Person"
            value={values.personId}
            setFieldValue={setFieldValue}
            people={people.data || []}
          />
          <Select
            label="Type"
            name="type"
            value={values.type}
            options={[RelationshipTypeDto.Spouse, RelationshipTypeDto.Spouse].map((x) => ({ label: x, key: x }))}
            onChange={handleChange}
          />

          <PersonSelect
            name="relatedId"
            label="Related"
            value={values.relatedId}
            setFieldValue={setFieldValue}
            people={people.data || []}
          />

          <DateTimeField
            name="from"
            label="Valid from"
            value={values.from}
            onBlur={handleBlur}
            onChange={handleChange}
            dateOnly
          />
          <DateTimeField
            name="to"
            label="Valid to"
            value={values.to}
            onBlur={handleBlur}
            onChange={handleChange}
            dateOnly
          />
          <Button
            submit
            primary
          >
            Create
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default CreateRelationshipForm
