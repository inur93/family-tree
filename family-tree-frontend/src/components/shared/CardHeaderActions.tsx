import { Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { FamilyTreeApi } from '../../api'
import { IPersonDto, IPersonalRelationshipDto } from '../../api/ApiClient'
import { useToast } from '../../hooks/useToast'

type PersonActionProps = {
  person: IPersonDto
}

export const PersonActions = ({ person }: PersonActionProps) => {
  const toast = useToast()
  const navigate = useNavigate()

  const handleEdit = async () => {
    navigate({
      pathname: '/edit-person',
      search: `id=${person.id}`
    })
  }

  const handleDelete = async () => {
    await FamilyTreeApi.deletePerson(person.id)
    toast.success(`${person.currentName.displayName} has been deleted`)
  }
  return (
    <>
      <Button onClick={handleEdit}>Edit</Button>
      <Button
        color="error"
        variant="outlined"
        onClick={handleDelete}
      >
        Delete
      </Button>
    </>
  )
}

type RelationshipActionsProps = {
  relationship: IPersonalRelationshipDto
}
export const RelationshipActions = ({ relationship }: RelationshipActionsProps) => {
  return (
    <Button
      variant="text"
      component={Link}
      to={`/relationship/${relationship.id}`}
    >
      Show relationship
    </Button>
  )
}
