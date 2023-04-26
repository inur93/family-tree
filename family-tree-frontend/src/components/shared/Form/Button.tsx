import { ButtonProps, Button as MuiButton } from '@mui/material'
import { Link } from 'react-router-dom'

type Props = {
  children?: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  primary?: boolean
  autoFocus?: boolean
  submit?: boolean
  disabled?: boolean
  to?: string
}
const Button = ({ primary, submit, onClick, to, ...otherProps }: Props) => {
  const props = {
    ...otherProps,
    variant: 'contained',
    color: primary ? 'primary' : 'inherit'
  } as ButtonProps

  if (submit) {
    return (
      <MuiButton
        {...props}
        type="submit"
      />
    )
  }

  if (to) {
    return (
      <MuiButton
        component={Link}
        to={to}
        color={primary ? 'primary' : 'inherit'}
        variant="contained"
      >
        {otherProps.children}
      </MuiButton>
    )
  }
  return (
    <MuiButton
      {...props}
      type="button"
      onClick={(e) => {
        e.preventDefault()
        onClick && onClick(e)
      }}
    />
  )
}

export default Button
