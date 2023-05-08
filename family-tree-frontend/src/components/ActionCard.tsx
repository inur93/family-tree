import { Add } from '@mui/icons-material'
import { Card, CardActionArea, CardContent, CardHeader } from '@mui/material'
import { useNavigate } from 'react-router-dom'

type Props = {
  text: string
  linkTo: string
  icon?: React.ReactNode
}

const ActionCard = ({ text, linkTo, icon }: Props) => {
  const navigate = useNavigate()
  const ActionIcon = icon ?? <Add />
  return (
    <Card onClick={() => navigate(linkTo)}>
      <CardActionArea>
        <CardHeader
          title={ActionIcon}
          subheader={text}
        />
        <CardContent></CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ActionCard
