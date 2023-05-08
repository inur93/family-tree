import { Collapse } from '@mui/material'
import { Form, Formik } from 'formik'
import { FamilyTreeApi } from '../api'
import { CreateRelationshipDto, ICreateRelationshipDto, RelationshipTypeDto } from '../api/ApiClient'
import { useData } from '../hooks/useData'
import DateTimeField from './shared/Form/DateTimeField'
import PersonSelect from './shared/Form/PersonSelect'
import Select from './shared/Form/Select'

type Props = {
  onSubmit: (relationship: ICreateRelationshipDto) => Promise<void>
  children?: React.ReactNode
  initialValues: Partial<ICreateRelationshipDto>
  editMode?: boolean
}

const RelationshipForm = ({ onSubmit, children, initialValues, editMode }: Props) => {
  const [people] = useData(() => FamilyTreeApi.searchPeople(undefined))

  const handleSubmit = (values: ICreateRelationshipDto) => {
    if (values.validFrom) {
      values.validFrom = new Date(values.validFrom)
    }
    if (values.validTo) {
      values.validTo = new Date(values.validTo)
    }
    if (values.marriedOn) {
      values.marriedOn = new Date(values.marriedOn)
    }
    onSubmit(values)
  }

  const vals = { ...new CreateRelationshipDto(), ...initialValues }
  return (
    <Formik
      initialValues={vals}
      onSubmit={handleSubmit}
    >
      {({ values, handleChange, handleBlur, setFieldValue }) => (
        <Form>
          <PersonSelect
            name="personId"
            label="Person"
            value={values.personId || ''}
            setFieldValue={setFieldValue}
            people={people.data || []}
            disabled={editMode}
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
            disabled={editMode}
          />

          <PersonSelect
            name="ofId"
            label="Of"
            value={values.ofId || ''}
            setFieldValue={setFieldValue}
            people={people.data || []}
            disabled={editMode}
          />

          <Collapse in={values.is === RelationshipTypeDto.Spouse}>
            <DateTimeField
              name="marriedOn"
              label="Married"
              value={values.marriedOn}
              onBlur={handleBlur}
              onChange={handleChange}
              dateOnly
            />
          </Collapse>
          <Collapse
            in={[RelationshipTypeDto.Spouse, RelationshipTypeDto.Partner].includes(
              values.is || RelationshipTypeDto.Child
            )}
          >
            <DateTimeField
              name="validFrom"
              label="From"
              value={values.validFrom}
              onBlur={handleBlur}
              onChange={handleChange}
              dateOnly
            />
            <DateTimeField
              name="validTo"
              label="To"
              value={values.validTo}
              onBlur={handleBlur}
              onChange={handleChange}
              dateOnly
            />
          </Collapse>
          {children}
        </Form>
      )}
    </Formik>
  )
}

export default RelationshipForm
