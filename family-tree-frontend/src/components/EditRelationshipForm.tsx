import { Button } from '@mui/material'
import { IUpdateRelationshipDto, RelationshipDto } from '../api/ApiClient'
import { useToast } from '../hooks/useToast'
import RelationshipForm from './RelationshipForm'
import { FamilyTreeApi } from '../api'
import { useNavigate } from 'react-router-dom'
import { mapToSimple } from '../functions/relationshipTypeMapper'

type Props = {
  onSubmit: (relationship: IUpdateRelationshipDto) => Promise<void>
  relationship: RelationshipDto
}

const EditRelationshipForm = ({ onSubmit, relationship }: Props) => {
  const toast = useToast()
  const navigate = useNavigate()

  const handleDelete = async () => {
    await FamilyTreeApi.deleteRelationship(relationship.id)
    toast.success('The relationship has been removed')
    navigate(-1)
  }

  return (
    <RelationshipForm
      onSubmit={onSubmit}
      initialValues={{ ...relationship, is: mapToSimple(relationship.is) }}
    >
      <Button type="submit">Update</Button>
      <Button
        variant="outlined"
        color="error"
        onClick={handleDelete}
      >
        Delete
      </Button>
    </RelationshipForm>
  )
}

export default EditRelationshipForm
