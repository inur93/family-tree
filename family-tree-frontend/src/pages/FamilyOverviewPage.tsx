import { ArrowBack } from '@mui/icons-material'
import { Button, Grid, useMediaQuery, useTheme } from '@mui/material'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { FamilyTreeApi } from '../api'
import PersonList from '../components/PersonList'
import PersonOverview from '../components/PersonOverview'
import { useData } from '../hooks/useData'

type Props = {}

const FamilyOverviewPage = ({}: Props) => {
  const [people] = useData(() => FamilyTreeApi.searchPeople(undefined))
  const [search] = useSearchParams()
  const theme = useTheme()
  const isLarge = useMediaQuery(theme.breakpoints.up('md'))

  const navigate = useNavigate()
  const [params] = useSearchParams()

  const navigatePerson = async (id: string) => {
    navigate({ search: `person=${id}` })
  }

  const hideList = !!search.get('person')
  return (
    <Grid
      container
      spacing={2}
    >
      <Grid
        item
        md={3}
      >
        {hideList && !isLarge && (
          <Button
            startIcon={<ArrowBack />}
            onClick={() => navigate('/')}
          >
            Back to list
          </Button>
        )}
        {(!hideList || isLarge) && (
          <PersonList
            people={people.data || []}
            onClick={navigatePerson}
            onAction={async () => navigate('/create-person')}
          />
        )}
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
