import { useNavigate } from 'react-router-dom'
import { FamilyTreeApi } from '../api'
import { CreatePersonDto, ICreatePersonDto } from '../api/ApiClient'
import CreatePersonForm from '../components/CreatePersonForm'
import { useToast } from '../hooks/useToast'

type Props = {}

const CreatePersonPage = ({}: Props) => {
  const toast = useToast()
  const navigate = useNavigate()
  const handleSubmit = async (person: ICreatePersonDto) => {
    const created = await FamilyTreeApi.createPerson(new CreatePersonDto(person))
    toast.success(`'${created.currentName.firstname}' has been created`)
    navigate({ pathname: '/', search: `person=${created.id}` })
  }
  return <CreatePersonForm onSubmit={handleSubmit}></CreatePersonForm>
}

export default CreatePersonPage
