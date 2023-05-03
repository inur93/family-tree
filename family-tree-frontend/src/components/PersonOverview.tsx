import { Grid } from '@mui/material'
import { FamilyTreeApi } from '../api'
import { useData } from '../hooks/useData'
import AddPersonCard from './AddPersonCard'
import PersonCard from './PersonCard'
import PersonRelationship from './PersonRelationship'
import { PersonActions } from './shared/CardHeaderActions'
import Loading from './shared/Loading'
import Button from './shared/Form/Button'
import { RelationshipTypeDto } from '../api/ApiClient'

type Props = { id: string }

const PersonOverview = ({ id }: Props) => {
  const [person] = useData(() => FamilyTreeApi.getPerson(id), id)
  return (
    <Loading {...person}>
      <Grid
        container
        justifyContent={'flex-end'}
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
              description={
                <Button
                  primary
                  to={`/create-relationship?personId=${id}`}
                >
                  Add relationship
                </Button>
              }
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
            <AddPersonCard
              text="Add partner"
              linkTo={`/create-relationship?personId=${id}&type=${RelationshipTypeDto.Partner}`}
            />
          )}
        </Grid>
        <Grid
          item
          xs={12}
        >
          {person.data?.relationships
            .filter((x) => x.id !== person.data?.partner?.id)
            .map((x) => (
              <PersonRelationship
                key={x.id}
                relationship={x}
              />
            ))}
        </Grid>
      </Grid>
    </Loading>
  )
}

export default PersonOverview
