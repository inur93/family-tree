import { useNavigate } from 'react-router-dom'
import { FamilyTreeApi } from '../api'
import { CreateRelationshipDto, ICreateRelationshipDto } from '../api/ApiClient'
import CreateRelationshipForm from '../components/CreateRelationshipForm'
import { useToast } from '../hooks/useToast'

type Props = {}

const CreateRelationshipPage = ({}: Props) => {
  const toast = useToast()
  const navigate = useNavigate()
  const handleSubmit = async (relationship: ICreateRelationshipDto) => {
    const created = await FamilyTreeApi.createRelationship(new CreateRelationshipDto(relationship))
    toast(`Relationship has been created`)
    navigate({ pathname: '/', search: `person=${created.personId}` })
  }
  return <CreateRelationshipForm onSubmit={handleSubmit}></CreateRelationshipForm>
}

export default CreateRelationshipPage
