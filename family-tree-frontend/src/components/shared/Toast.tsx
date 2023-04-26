import { Alert, Snackbar } from '@mui/material'
import { useEffect, useState } from 'react'
import { ToastContext } from '../../hooks/useToast'

type Props = {
  children?: React.ReactNode
}

interface SnackbarMessage {
  message: string
  key: number
}

interface State {
  open: boolean
  snackPack: readonly SnackbarMessage[]
  messageInfo?: SnackbarMessage
}

const Toast = ({ children }: Props) => {
  const [snackPack, setSnackPack] = useState<readonly SnackbarMessage[]>([])
  const [open, setOpen] = useState(false)
  const [messageInfo, setMessageInfo] = useState<SnackbarMessage | undefined>(undefined)

  useEffect(() => {
    if (snackPack.length && !messageInfo) {
      // Set a new snack when we don't have an active one
      setMessageInfo({ ...snackPack[0] })
      setSnackPack((prev) => prev.slice(1))
      setOpen(true)
    } else if (snackPack.length && messageInfo && open) {
      // Close an active snack when a new one is added
      setOpen(false)
    }
  }, [snackPack, messageInfo, open])

  const notify = (message: string) => {
    setSnackPack((prev) => [...prev, { message, key: new Date().getTime() }])
  }

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  const handleExited = () => {
    setMessageInfo(undefined)
  }

  return (
    <ToastContext.Provider value={notify}>
      {children}
      <Snackbar
        key={messageInfo ? messageInfo.key : undefined}
        open={open}
        autoHideDuration={6000}
        TransitionProps={{ onExited: handleExited }}
        onClose={handleClose}
      >
        <Alert
          severity="success"
          onClose={handleClose}
          sx={{ width: '100%' }}
        >
          {messageInfo ? messageInfo.message : undefined}
        </Alert>
      </Snackbar>
    </ToastContext.Provider>
  )
}

export default Toast
