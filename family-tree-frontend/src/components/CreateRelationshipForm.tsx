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
    ofId: '',
    is: RelationshipTypeDto.Partner,
    validFrom: undefined,
    validTo: undefined,
    marriedOn: undefined,
    ...defaultValues
  }
  const handleSubmit = (values: ICreateRelationshipDto) => {
    if (values.validFrom) {
      values.validFrom = new Date(values.validFrom)
    }
    if (values.validTo) {
      values.validTo = new Date(values.validTo)
    }
    if(values.marriedOn){
      values.marriedOn = new Date(values.marriedOn)
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
            label="Is"
            name="is"
            value={values.is}
            options={[
              RelationshipTypeDto.Parent,
              RelationshipTypeDto.Spouse,
              RelationshipTypeDto.Partner,
              RelationshipTypeDto.Child
            ].map((x) => ({ label: x, key: x }))}
            onChange={handleChange}
          />

          <PersonSelect
            name="ofId"
            label="Of"
            value={values.ofId}
            setFieldValue={setFieldValue}
            people={people.data || []}
          />

          <DateTimeField
            name="marriedOn"
            label="Married"
            value={values.marriedOn}
            onBlur={handleBlur}
            onChange={handleChange}
            dateOnly
          />

          <DateTimeField
            name="validFrom"
            label="Valid from"
            value={values.validFrom}
            onBlur={handleBlur}
            onChange={handleChange}
            dateOnly
          />

          <DateTimeField
            name="validTo"
            label="Valid to"
            value={values.validTo}
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
