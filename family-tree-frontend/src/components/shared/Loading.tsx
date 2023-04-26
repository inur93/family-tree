import { Alert, Button } from '@mui/material'
import Spinner from './Spinner'

type Props = {
  children: React.ReactNode
  loading?: boolean
  error?: string
  retry?: () => Promise<void>
}

const Loading = ({ children, loading, error, retry }: Props) => {
  if (loading) return <Spinner show />
  if (error)
    return (
      <Alert
        severity="error"
        action={
          retry ? (
            <Button color="inherit" size="small" onClick={retry}>
              Retry
            </Button>
          ) : null
        }
      >
        {error}
      </Alert>
    )
  return <>{children}</>
}

export default Loading
