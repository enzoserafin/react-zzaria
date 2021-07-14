import styled from 'styled-components'
import { ListItem as MaterialListItem } from '@material-ui/core'

export const ListItem = styled(MaterialListItem)`
  && {
    display: flex;
    justify-content: space-between;
  }
`
