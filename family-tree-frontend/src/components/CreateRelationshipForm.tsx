import { Button } from '@mui/material'
import { ICreateRelationshipDto, RelationshipTypeDto } from '../api/ApiClient'
import RelationshipForm from './RelationshipForm'

type Props = {
  onSubmit: (relationship: ICreateRelationshipDto) => Promise<void>
  personId?: string
  relatedId?: string
  is?: RelationshipTypeDto
}

const CreateRelationshipForm = ({ onSubmit, ...defaultValues }: Props) => {
  return (
    <RelationshipForm
      onSubmit={onSubmit}
      initialValues={defaultValues}
    >
      <Button type="submit">Create</Button>
    </RelationshipForm>
  )
}

export default CreateRelationshipForm
