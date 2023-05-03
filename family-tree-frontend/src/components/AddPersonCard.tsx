import { Add } from '@mui/icons-material'
import { Card, CardActionArea, CardContent, CardHeader } from '@mui/material'
import { useNavigate } from 'react-router-dom'

type Props = { text: string; linkTo: string }

const AddPersonCard = ({ text, linkTo }: Props) => {
  const navigate = useNavigate()
  return (
    <Card onClick={() => navigate(linkTo)}>
      <CardActionArea>
        <CardHeader
          title={<Add></Add>}
          subheader={text}
        />
        <CardContent></CardContent>
      </CardActionArea>
    </Card>
  )
}

export default AddPersonCard
