import { useNavigate, useSearchParams } from 'react-router-dom'
import { FamilyTreeApi } from '../api'
import { CreatePersonDto, ICreatePersonDto } from '../api/ApiClient'
import EditPersonForm from '../components/EditPersonForm'
import Loading from '../components/shared/Loading'
import { useData } from '../hooks/useData'
import { useToast } from '../hooks/useToast'
import { Grid } from '@mui/material'

const UpdatePersonPage = () => {
  const toast = useToast()
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const [person] = useData(async (id) => id && FamilyTreeApi.getPerson(id), params.get('id'))

  const handleSubmit = async (person: ICreatePersonDto) => {
    const updated = await FamilyTreeApi.updatePerson(params.get('id')!, new CreatePersonDto(person))
    toast.success(`'${updated.currentName.firstname}' has been updated`)
    navigate({ pathname: '/', search: `person=${updated.id}` })
  }
  return (
    <Loading {...person}>
      <Grid
        container
        justifyContent="center"
      >
        <Grid
          item
          xs={11}
          md={4}
        >
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
        </Grid>
      </Grid>
    </Loading>
  )
}

export default UpdatePersonPage
