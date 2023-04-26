import { Grid } from '@mui/material'
import { FamilyTreeApi } from '../api'
import { useData } from '../hooks/useData'
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
          {person.data?.spouse?.id && (
            <LazyPersonCard
              id={person.data?.spouse.id}
              hideDelete
              description="Spouse"
            />
          )}
        </Grid>
      </Grid>
    </Loading>
  )
}

export default PersonOverview
