import { Grid } from '@mui/material'
import { FamilyTreeApi } from '../api'
import { useData } from '../hooks/useData'
import AddPersonCard from './AddPersonCard'
import PersonCard from './PersonCard'
import PersonRelationship from './PersonRelationship'
import { PersonActions } from './shared/CardHeaderActions'
import Loading from './shared/Loading'

type Props = { id: string }

const PersonOverview = ({ id }: Props) => {
  const [person] = useData(() => FamilyTreeApi.getPerson(id), id)
  return (
    <Loading {...person}>
      <Grid
        container
        spacing={2}
      >
        <Grid
          item
          xs={12}
          md={6}
        >
          {person.data && (
            <PersonCard
              person={person.data}
              actions={<PersonActions person={person.data} />}
            />
          )}
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
        >
          {person.data?.partner?.id ? (
            <PersonRelationship relationship={person.data?.partner} />
          ) : (
            <AddPersonCard text="Add partner" />
          )}
        </Grid>
        <Grid
          item
          xs={12}
        ></Grid>
      </Grid>
    </Loading>
  )
}

export default PersonOverview
