import { Grid, Paper, Typography } from '@mui/material'
import { FamilyTreeApi } from '../api'
import { ExternalLoginRequest } from '../api/ApiClient'
import FacebookLogin from '../components/login/FacebookLogin'
import GoogleLogin from '../components/login/GoogleLogin'
import { useToast } from '../hooks/useToast'

type Props = {
  callback: (isLoggedIn: boolean) => Promise<void>
}

const LoginPage = ({ callback }: Props) => {
  const toast = useToast()
  const handleCallback = (provider: string) => async (token: string) => {
    try {
      await FamilyTreeApi.externalLogin(provider, new ExternalLoginRequest({ token }))
      await callback(true)
    } catch (e: any) {
      toast.error(e.message)
    }
  }
  return (
    <Grid
      container
      justifyContent="center"
      spacing={4}
    >
      <Grid
        item
        xs={10}
        sm={6}
        md={4}
        lg={3}
        xl={2}
      >
        <Paper sx={{ padding: '2rem' }}>
          <Grid
            container
            justifyContent={'center'}
            spacing={2}
          >
            <Grid
              item
              xs={12}
            >
              <Typography variant="h4">Login</Typography>
              <Typography variant="body1">Use either your google or facebook account to login</Typography>
            </Grid>
            <Grid
              item
              xs={12}
            >
              <GoogleLogin onResponse={handleCallback('google')} />
            </Grid>
            <Grid
              item
              xs={12}
            >
              <FacebookLogin onResponse={handleCallback('facebook')} />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default LoginPage
