import { useParams } from 'react-router-dom'
import { FamilyTreeApi } from '../api'
import EditRelationshipForm from '../components/EditRelationshipForm'
import Loading from '../components/shared/Loading'
import { useData } from '../hooks/useData'
import { useToast } from '../hooks/useToast'

const EditRelationshipPage = () => {
  const toast = useToast()
  const params = useParams<{ id: string }>()
  const [relationship] = useData(async (id) => id && FamilyTreeApi.getRelationship(id), params.id)

  const handleSubmit = async () => {
    toast.success('this operation has not been implemented')
  }
  return (
    <Loading {...relationship}>
      {relationship.data && (
        <EditRelationshipForm
          relationship={relationship.data}
          onSubmit={handleSubmit}
        />
      )}
    </Loading>
  )
}

export default EditRelationshipPage
