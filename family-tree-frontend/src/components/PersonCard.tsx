import { Female, Male } from '@mui/icons-material'
import { Card, CardActionArea, CardActions, CardContent, CardHeader } from '@mui/material'
import { format } from 'date-fns'
import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { IPersonDto, SexDto } from '../api/ApiClient'

type Props = {
  person: IPersonDto
  description?: ReactNode
  actions?: ReactNode
  clickable?: boolean
}

const PersonCard = ({ person, description, actions, clickable }: Props) => {
  const birthday = format(person.birthday, 'dd-MM-yyyy')

  const Header = () => (
    <CardHeader
      title={
        <>
          {person.sex === SexDto.Female ? <Female /> : <Male />}
          {person.currentName.displayName}
        </>
      }
      subheader={birthday}
    />
  )
  return (
    <Card style={{height: '100%'}}>
      {clickable ? (
        <CardActionArea
          component={Link}
          to={{
            pathname: '/',
            search: `person=${person.id}`
          }}
        >
          <Header />
        </CardActionArea>
      ) : (
        <Header />
      )}

      <CardContent>{description}</CardContent>
      {actions && <CardActions>{actions}</CardActions>}
    </Card>
  )
}

export default PersonCard
