import { Grid } from '@mui/material'
import { FamilyTreeApi } from '../api'
import { RelationshipTypeDto } from '../api/ApiClient'
import { useData } from '../hooks/useData'
import ActionCard from './ActionCard'
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
        justifyContent={'flex-start'}
        alignItems={'stretch'}
        spacing={2}
      >
        <Grid
          item
          xs={12}
          sm={6}
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
          sm={6}
        >
          {person.data?.partner?.id ? (
            <PersonRelationship relationship={person.data?.partner} />
          ) : (
            <ActionCard
              text="Add partner"
              linkTo={`/create-relationship?personId=${id}&type=${RelationshipTypeDto.Partner}`}
            />
          )}
        </Grid>
        {person.data?.relationships
          .filter((x) => x.id !== person.data?.partner?.id)
          .map((x) => (
            <Grid
              key={x.id}
              item
              xs={12}
              sm={6}
              md={6}
              lg={4}
            >
              <PersonRelationship relationship={x} />
            </Grid>
          ))}
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={4}
        >
          <ActionCard
            text="Add relationship"
            linkTo={`/create-relationship?personId=${id}&type=${RelationshipTypeDto.Parent}`}
          />
        </Grid>
      </Grid>
    </Loading>
  )
}

export default PersonOverview
