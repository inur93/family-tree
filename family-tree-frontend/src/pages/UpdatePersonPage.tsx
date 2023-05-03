import { useNavigate, useSearchParams } from 'react-router-dom'
import { FamilyTreeApi } from '../api'
import { CreatePersonDto, ICreatePersonDto } from '../api/ApiClient'
import EditPersonForm from '../components/EditPersonForm'
import Loading from '../components/shared/Loading'
import { useData } from '../hooks/useData'
import { useToast } from '../hooks/useToast'

const UpdatePersonPage = () => {
  const toast = useToast()
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const [person] = useData(async (id) => id && FamilyTreeApi.getPerson(id), params.get('id'))

  const handleSubmit = async (person: ICreatePersonDto) => {
    const updated = await FamilyTreeApi.updatePerson(params.get('id')!, new CreatePersonDto(person))
    toast(`'${updated.currentName.firstname}' has been updated`)
    navigate({ pathname: '/', search: `person=${updated.id}` })
  }
  return (
    <Loading {...person}>
      {person.data && (
        <EditPersonForm
          onSubmit={handleSubmit}
          person={
            new CreatePersonDto({
              ...person.data,
              ...person.data.currentName
            })
          }
        ></EditPersonForm>
      )}
    </Loading>
  )
}

export default UpdatePersonPage
