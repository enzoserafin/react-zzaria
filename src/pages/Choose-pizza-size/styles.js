import styled from 'styled-components'
import { Typography } from '@material-ui/core'

export const Content = styled.main`
  flex-grow: 1;
  padding: 20px;
`

export const Title = styled(Typography).attrs({
  gutterBottom: true,
  align: 'center'
})``
