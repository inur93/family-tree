import { Grid } from '@mui/material'
import { FamilyTreeApi } from '../api'
import { useData } from '../hooks/useData'
import AddPersonCard from './AddPersonCard'
import LazyPersonCard from './LazyPersonCard'
import PersonCard from './PersonCard'
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
          {person.data && <PersonCard person={person.data} />}
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
        >
          {person.data?.partner?.id ? (
            <LazyPersonCard
              id={person.data?.partner.person.id}
              hideDelete
              description={person.data?.partner.is}
            />
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
