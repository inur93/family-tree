import { Grid } from '@mui/material'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { FamilyTreeApi } from '../api'
import PersonList from '../components/PersonList'
import PersonOverview from '../components/PersonOverview'
import { useData } from '../hooks/useData'

type Props = {}

const FamilyOverviewPage = ({}: Props) => {
  const [people] = useData(() => FamilyTreeApi.searchPeople(undefined))
  const navigate = useNavigate()
  const [params] = useSearchParams()
  return (
    <Grid
      container
      spacing={2}
    >
      <Grid
        item
        md={3}
      >
        <PersonList
          people={people.data || []}
          onClick={async (id) => navigate({ search: `person=${id}` })}
          onAction={async () => navigate('/create-person')}
        />
      </Grid>
      {params.get('person') && (
        <Grid
          item
          md={9}
        >
          <PersonOverview id={params.get('person') as string} />
        </Grid>
      )}
    </Grid>
  )
}

export default FamilyOverviewPage
