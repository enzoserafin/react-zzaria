import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {
  Button as MaterialButton,
  Input as MaterialInput,
  Typography
} from '@material-ui/core'

export const HeaderContent = styled.main`
  padding: 20px;
`

export const Title = styled(Typography).attrs({
  gutterBottom: true,
  align: 'center'
})``

export const MainContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spacing(2)}px;
`

export const Input = styled(MaterialInput).attrs({
  type: 'number'
})`
  && {
    margin-bottom: ${({ theme }) => theme.spacing(3)}px;
  }

  & input {
    font-size: 80px;
    padding: 10px;
    text-align: center;
    width: 150px;
  }
`

export const Button = styled(MaterialButton).attrs({
  color: 'secondary',
  component: Link,
  variant: 'contained'
})`
  && {
    text-align: center;
  }

`
