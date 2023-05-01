import { Card, CardContent, CardHeader } from '@mui/material'
import { format } from 'date-fns'
import { ReactNode } from 'react'
import { FamilyTreeApi } from '../api'
import { IPersonDto } from '../api/ApiClient'
import { personColor } from '../functions/colorFunctions'
import { useToast } from '../hooks/useToast'

type Props = {
  person: IPersonDto
  description?: ReactNode
  actions?: ReactNode
}

const PersonCard = ({ person, description, actions }: Props) => {
  const toast = useToast()
  const birthday = format(person.birthday, 'dd-MM-yyyy')
  const handleDelete = async () => {
    await FamilyTreeApi.deletePerson(person.id)
    toast(`${person.currentName.displayName} has been deleted`)
  }
  return (
    <Card
      style={{
        backgroundColor: personColor(person.sex)
      }}
    >
      <CardHeader
        action={actions}
        title={person.currentName.displayName}
        subheader={birthday}
      />
      <CardContent>{description}</CardContent>
    </Card>
  )
}

export default PersonCard
