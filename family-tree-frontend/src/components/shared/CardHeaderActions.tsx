import { MoreVert } from '@mui/icons-material'
import { IconButton, Menu, MenuItem } from '@mui/material'
import { ReactNode, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FamilyTreeApi } from '../../api'
import { IPersonDto, IPersonalRelationshipDto } from '../../api/ApiClient'
import { useToast } from '../../hooks/useToast'

type PersonActionProps = {
  person: IPersonDto
}

export const PersonActions = ({ person }: PersonActionProps) => {
  const toast = useToast()
  const navigate = useNavigate()

  const handleEdit = async () => {
    navigate({
      pathname: '/edit-person',
      search: `id=${person.id}`
    })
  }

  const handleDelete = async () => {
    await FamilyTreeApi.deletePerson(person.id)
    toast(`${person.currentName.displayName} has been deleted`)
  }
  return (
    <MoreAction>
      <MenuItem onClick={handleEdit}>Edit person</MenuItem>
      <MenuItem onClick={handleDelete}>Delete person</MenuItem>
    </MoreAction>
  )
}

type RelationshipActionsProps = {
  relationship: IPersonalRelationshipDto
}
export const RelationshipActions = ({ relationship }: RelationshipActionsProps) => {
  const toast = useToast()
  const navigate = useNavigate()

  const handleEdit = async () => {
    navigate(`/relationship/${relationship.id}`)
  }

  const handleDelete = async () => {
    await FamilyTreeApi.deleteRelationship(relationship.id)
    toast(`Relationship has been deleted`)
  }
  return (
    <MoreAction>
      <MenuItem onClick={handleEdit}>Edit relationship</MenuItem>
      <MenuItem onClick={handleDelete}>Delete relationship</MenuItem>
    </MoreAction>
  )
}

type MoreActionProps = {
  children?: ReactNode
}
const MoreAction = ({ children }: MoreActionProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <>
      <IconButton
        aria-label="actions on person"
        aria-controls="actions"
        aria-haspopup="true"
        onClick={handleMenu}
      >
        <MoreVert />
      </IconButton>
      <Menu
        id="actions"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {children}
      </Menu>
    </>
  )
}
