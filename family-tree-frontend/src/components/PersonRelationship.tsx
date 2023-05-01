import { format } from 'date-fns'
import { FamilyTreeApi } from '../api'
import { IPersonalRelationshipDto } from '../api/ApiClient'
import { useData } from '../hooks/useData'
import PersonCard from './PersonCard'
import { RelationshipActions } from './shared/CardHeaderActions'
import Loading from './shared/Loading'

const getRelationshipDescription = (relationship: IPersonalRelationshipDto) => {
  if (relationship.marriedOn) {
    return `${relationship.is} (since ${format(relationship.marriedOn, 'MMMM yyyy')})`
  }
  return relationship.is
}

type Props = {
  relationship: IPersonalRelationshipDto
}

const PersonRelationship = ({ relationship }: Props) => {
  const [person] = useData(() => FamilyTreeApi.getPerson(relationship.person.id), relationship.person.id)
  return (
    <Loading {...person}>
      {person.data && (
        <PersonCard
          person={person.data}
          actions={<RelationshipActions relationship={relationship} />}
          description={getRelationshipDescription(relationship)}
        />
      )}
    </Loading>
  )
}

export default PersonRelationship
