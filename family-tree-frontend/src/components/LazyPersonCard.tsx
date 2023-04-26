import { Card, CardActions, CardContent, CardHeader, IconButton, Typography } from '@mui/material'
import { IPersonDto, SexDto } from '../api/ApiClient'
import { format } from 'date-fns'
import { personColor } from '../functions/colorFunctions'
import { Delete } from '@mui/icons-material'
import { FamilyTreeApi } from '../api'
import { useToast } from '../hooks/useToast'
import Loading from './shared/Loading'
import PersonCard from './PersonCard'
import { useData } from '../hooks/useData'

type Props = { id: string; hideDelete?: boolean; description?: string }

const LazyPersonCard = ({ id, ...props }: Props) => {
  const [person] = useData(() => FamilyTreeApi.getPerson(id), id)
  return (
    <Loading {...person}>
      {person.data && (
        <PersonCard
          person={person.data}
          {...props}
        />
      )}
    </Loading>
  )
}

export default LazyPersonCard
