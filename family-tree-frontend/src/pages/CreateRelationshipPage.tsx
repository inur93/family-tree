import { useNavigate, useSearchParams } from 'react-router-dom'
import { FamilyTreeApi } from '../api'
import { CreateRelationshipDto, ICreateRelationshipDto, RelationshipTypeDto } from '../api/ApiClient'
import CreateRelationshipForm from '../components/CreateRelationshipForm'
import { useToast } from '../hooks/useToast'

const CreateRelationshipPage = () => {
  const toast = useToast()
  const [params] = useSearchParams()
  const navigate = useNavigate()
  const handleSubmit = async (relationship: ICreateRelationshipDto) => {
    const created = await FamilyTreeApi.createRelationship(new CreateRelationshipDto(relationship))
    toast.success(`Relationship has been created`)
    navigate({ pathname: '/', search: `person=${created.personId}` })
  }
  return (
    <CreateRelationshipForm
      personId={params.get('personId') || ''}
      is={params.get('type') as RelationshipTypeDto}
      onSubmit={handleSubmit}
    ></CreateRelationshipForm>
  )
}

export default CreateRelationshipPage
