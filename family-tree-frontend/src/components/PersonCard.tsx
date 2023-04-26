import { Card, CardActions, CardContent, CardHeader, IconButton, Typography } from '@mui/material'
import { IPersonDto, SexDto } from '../api/ApiClient'
import { format } from 'date-fns'
import { personColor } from '../functions/colorFunctions'
import { Delete } from '@mui/icons-material'
import { FamilyTreeApi } from '../api'
import { useToast } from '../hooks/useToast'

type Props = { person: IPersonDto; hideDelete?: boolean; description?: string }

const PersonCard = ({ person, description, hideDelete }: Props) => {
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
        action={
          !hideDelete && (
            <IconButton
              aria-label="delete"
              onClick={handleDelete}
            >
              <Delete />
            </IconButton>
          )
        }
        title={person.currentName.displayName}
        subheader={birthday}
      />
      <CardContent>{description}</CardContent>
    </Card>
  )
}

export default PersonCard
