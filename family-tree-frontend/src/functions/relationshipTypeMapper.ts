import { RelationshipTypeDto } from '../api/ApiClient'

export const mapToSimple = (type: RelationshipTypeDto) => {
  switch (type) {
    case RelationshipTypeDto.Boyfriend:
    case RelationshipTypeDto.Girlfriend:
    case RelationshipTypeDto.Partner:
      return RelationshipTypeDto.Partner
    case RelationshipTypeDto.Daughter:
    case RelationshipTypeDto.Son:
    case RelationshipTypeDto.Child:
      return RelationshipTypeDto.Child
    case RelationshipTypeDto.Husband:
    case RelationshipTypeDto.Wife:
    case RelationshipTypeDto.Spouse:
      return RelationshipTypeDto.Spouse
    case RelationshipTypeDto.Father:
    case RelationshipTypeDto.Mother:
    case RelationshipTypeDto.Parent:
      return RelationshipTypeDto.Parent
  }
}
