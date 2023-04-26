import { useContext, createContext } from 'react'

type ToastConfig = (message: string) => void

export const ToastContext = createContext<ToastConfig>(() => {})

export const useToast = () => {
  const notify = useContext(ToastContext)
  return notify
}
