import styled from 'styled-components'
import {
  Paper,
  Typography
} from '@material-ui/core'

export const PaperContainer = styled(Paper)`
  && {
    flex-grow: 1;
    margin-bottom: ${({ theme }) => theme.spacing(5)}px;
    padding: ${({ theme }) => theme.spacing(2)}px;
  }
`

export const Title = styled(Typography).attrs({
  align: 'center',
  gutterBottom: true,
  variant: 'h6'
})`
  && {
    text-align: left;
  }
`

export const FooterContent = styled.div`
  display: flex;
  justify-content: flex-end;
`
