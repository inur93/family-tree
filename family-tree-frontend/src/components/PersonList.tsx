import { Add } from '@mui/icons-material'
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { format } from 'date-fns'
import { IBasicPersonDto } from '../api/ApiClient'

type Props = {
  people: IBasicPersonDto[]
  onClick?: (id: string) => Promise<void>
  emptyText?: string
  actionText?: string
  onAction?: () => Promise<void>
}

const PersonList = ({ people, emptyText, onClick, onAction, actionText }: Props) => {
  const text = emptyText || 'The list is empty'
  return (
    <List>
      {!people.length && <p>{text}</p>}
      {people.map((x) => (
        <ListItemButton
          key={x.id}
          onClick={async () => onClick && onClick(x.id)}
        >
          <ListItemText
            primary={x.displayName}
            secondary={format(x.birthday, 'dd-MM-yyyy')}
          />
        </ListItemButton>
      ))}
      {onAction && (
        <ListItemButton onClick={onAction}>
          <ListItemIcon>
            <Add />
          </ListItemIcon>
          <ListItemText primary={actionText || 'Add person'} />
        </ListItemButton>
      )}
    </List>
  )
}

export default PersonList
