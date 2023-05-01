import { format } from 'date-fns'
import { FamilyTreeApi } from '../api'
import { IPersonalRelationshipDto, RelationshipTypeDto } from '../api/ApiClient'
import { useData } from '../hooks/useData'
import PersonCard from './PersonCard'
import { RelationshipActions } from './shared/CardHeaderActions'
import Loading from './shared/Loading'
import { Typography } from '@mui/material'

const CoupleTypes = [
  RelationshipTypeDto.Boyfriend,
  RelationshipTypeDto.Girlfriend,
  RelationshipTypeDto.Wife,
  RelationshipTypeDto.Husband
]

const getRelationshipDescription = (relationship: IPersonalRelationshipDto) => {
  const lines = []

  if (relationship.marriedOn) {
    lines.push(`${relationship.is} (Married since ${format(relationship.marriedOn, 'MMMM yyyy')})`)
  }

  if (relationship.validFrom && CoupleTypes.includes(relationship.is)) {
    lines.push(`Couple since ${format(relationship.validFrom, 'MMMM yyyy')}`)
  }

  if (!lines.length) {
    lines.push(`${relationship.is}`)
  }

  return lines.map((x) => (
    <Typography
      variant="body1"
      key={x}
    >
      {x}
    </Typography>
  ))
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
